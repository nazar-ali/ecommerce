import { connectDb } from "../../../helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../../models/user";

export async function POST(req) {
  try {
    await connectDb();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, isUserExist.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { email: isUserExist.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
