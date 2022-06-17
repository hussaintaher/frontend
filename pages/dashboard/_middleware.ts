// Idea: Protecting any routes belongs to /dashboard

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //if (req.nextUrl.pathname === "/dashboard") {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log('session: ', session)
    if (!session) return NextResponse.redirect(`${process.env.APP_URL}/api/auth/signin`);
  //}
  return NextResponse.next();
}
