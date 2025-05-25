import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = NextResponse.redirect(new URL("/sign-up", request.url));
    response.cookies.set(
      "token",
      "",
      {
        httpOnly: true,
        path: "/",
        expires: new Date(0),
      },
      {
        status: 200,
        message: "Logout successful",
      }
    );
    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
