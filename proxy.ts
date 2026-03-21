import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

// PROTECTED ROUTES
const protectedRoutes = ['/dashboard'];

export async function proxy(request: NextRequest) {
    let response = NextResponse.next();

    // Middleware runs on the Edge runtime which has no access to localStorage
    // Supabase SSR client is used here so auth state is read from cookies instead
    const supabase = createServerClient(
        supabaseUrl,
        supabasePublishableKey,
        {
            cookies: {
                get(name) {
                    return request.cookies.get(name)?.value;
                },
                set(name, value, options) {
                    request.cookies.set({ name, value, ...options });

                    // Response is reassigned here to ensure the updated cookie
                    // is always attached to the latest response object
                    response = NextResponse.next()
                    response.cookies.set({ name, value, ...options });
                },
                remove(name, options) {
                    request.cookies.set({ name, value: '', ...options });

                    // Same reason as set(): keep response and cookies in sync
                    response = NextResponse.next()
                    response.cookies.set({ name, value: '', ...options });
                },
            },
        }
    );

    // getUser() validates the token server-side, unlike getSession() which
    // only reads the cookie and can be spoofed. Always prefer this in middleware
    const {
        data: { user }, error
    } = await supabase.auth.getUser();

    if (error) {
        // Treat auth errors as unauthenticated — don't let the request through
        console.error('Supabase auth error:', error.message);
    }

    if (!user || error) {
        return NextResponse.redirect(new URL('/portal/login', request.url));
    }

    // Check if the current path starts with any of the protected routes
    const isProtected = protectedRoutes.some((route) => 
        request.nextUrl.pathname.startsWith(route)
    );

    const isLoginPage = request.nextUrl.pathname.startsWith('/portal/login');

    // Redirect unauthenticated users away from protected routes
    if (isProtected && !isLoginPage) {
        return NextResponse.redirect(new URL('/portal/login', request.url));
    }

    return response;
}

// Scoping the matcher avoids running this middleware on every request,
// including static assets and API routes which don't need auth checks
export const config = {
    matcher: ['/dashboard/:path*'],
};