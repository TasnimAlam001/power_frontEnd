import { auth } from "./app/auth";

export default auth((req) => {
  console.log('auth in middleware',!!req.auth)
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  if (nextUrl.pathname == "/login") return null;

  if (!isLoggedIn && nextUrl.pathname != "/login")
    return Response.redirect(new URL("/login", nextUrl));
});
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};






// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

