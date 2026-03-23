import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const protectedRoutes = ['/dashboard'];

export async function proxy(request: NextRequest) {
    let response = NextResponse.next();

    // Edge runtime has no localStorage — SSR client reads auth state from cookies instead
    const supabase = createServerClient(supabaseUrl, supabasePublishableKey, {
        cookies: {
            get(name) {
                return request.cookies.get(name)?.value;
            },
            set(name, value, options) {
                request.cookies.set({ name, value, ...options });
                // Reassign response so updated cookies are always on the latest response object
                response = NextResponse.next();
                response.cookies.set({ name, value, ...options });
            },
            remove(name, options) {
                request.cookies.set({ name, value: '', ...options });
                // Same reason as set()
                response = NextResponse.next();
                response.cookies.set({ name, value: '', ...options });
            },
        },
    });

    // Prefer getUser() over getSession() — validates token server-side, can't be spoofed
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) console.error('Supabase auth error:', error.message);

    const isProtected = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );

    // Redirect unauthenticated users away from protected routes
    if (isProtected && (!user || error)) {
        return NextResponse.redirect(new URL('/portal/login', request.url));
    }

    return response;
}

// Matcher scoped to avoid running middleware on static assets and API routes
export const config = {
    matcher: ['/dashboard/:path*'],
};