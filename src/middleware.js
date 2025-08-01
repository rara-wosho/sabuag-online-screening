import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request) {
    console.log("Middleware triggered for request:", request.url);

    return await updateSession(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!^$|^/$|_next/static|api|join|feedback|about|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
