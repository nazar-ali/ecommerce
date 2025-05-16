import { User } from "../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDb } from "../../../helper/db";

export async function POST(req) {
  await connectDb();

  try {
    const { username, email, fullName, password, confirmPassword } =
      await req.json();
    console.log(username, email, fullName, password, confirmPassword);
    if (!username || !email || !fullName || !password || !confirmPassword) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 }
      );
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      fullName,
      password: hashedPassword, // Only store hashed password
    });

    await user.save();

    const token = jwt.sign({ username, email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      { message: "User created successfully", user },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
