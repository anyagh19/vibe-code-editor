import NextAuth from "next-auth";
import {
    apiAuthPrefix,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes
} from '@/routes'
import authConfig from "./auth.config";

const {auth} = NextAuth(authConfig); //destucturing auth from NextAuth based on authConfig

export default auth((req) => {
    const {nextUrl} = req //which is the path user is trying to access
    const isLoggedIn = !!req.auth


    // Check if the request is for an API auth route
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)

    // Check if the request is for a public route
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

    // Check if the request is for an auth route
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    // If the user is logged in
    if(isApiAuthRoute){
        return null; 
    }

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))//redirect to home page if logged in and trying to access auth route
        }
        return null; //allow access to auth routes if not logged in
    }

    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/auth/sign-in", nextUrl)) //redirect to sign-in page if not logged in and trying to access protected route
    }
});


//matcher function to check on which routes to apply this middleware
export const config = {
  // copied from clerk
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};