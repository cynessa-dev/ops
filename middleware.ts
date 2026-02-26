import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function middleware(request: NextRequest) {
    let response = NextResponse.next();

    const supabase = createServerClient(
        supabaseUrl,
        supabaseAnonKey,
        {
            cookies: {
                get(name) {
                    return request.cookies.get(name)?.value;
                },
                set(name, value, options) {
                    request.cookies.set({ name, value, ...options });
                    response = NextResponse.next()
                    response.cookies.set({ name, value, ...options });
                },
                remove(name, options) {
                    request.cookies.set({ name, value: '', ...options });
                    response = NextResponse.next()
                    response.cookies.set({ name, value: '', ...options });
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const protectedRoutes = ["/dashboard", "/profile"];

    const isProtected = protectedRoutes.some((route) => 
        request.nextUrl.pathname.startsWith(route)
    );

    if (isProtected && !user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return response;
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"],
};