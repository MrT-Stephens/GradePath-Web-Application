import { NextRequest, NextResponse } from "next/server";
import db from "./app/(db)/index";

export async function middleware(request) {
    // If the request is not to the home page
    if (request.nextUrl.pathname !== "/") {
        // To see more about db.isAuthenticated, check file app/(db)/index.ts
        const isLoggedIn = await db.isAuthenticated(request.cookies);

        if (
            request.nextUrl.pathname &&
            request.nextUrl.pathname.startsWith("/auth")
        ) {
            // If already logged in and the request is to go to the login page,
            // Skip it and redirect to the account page.
            if (isLoggedIn) {
                return NextResponse.redirect(new URL("/user/main", request.url));
            }
            return;
        }

        // Anything after this is for protected routes, in our case,
        // Only the routes that start with /auth are not protected.
        // If you have other pages that are not protected you can
        // Handle them before the isLoggedIn check below.

        // Check if the user is logged in
        if (!isLoggedIn) {
            // If not logged in, redirect them to the login page.
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    // Continue without any request changes.
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|GradePathLogo.svg).*)'],
};