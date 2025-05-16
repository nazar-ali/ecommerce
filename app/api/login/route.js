import { connectDb } from "../../../helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../../models/user";

export async function GET(req) {
  connectDb();
  let Users = [];
  try {
    const Users = await User.find();
    return NextResponse.json(Users, {
      status: 200,
      message: "User created successfully",
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(201, {
      status: 500,
      message: "Error creating user",
    });
  }
}

export async function POST(req) {
  try {
    connectDb();
    const { email, password } = await req.json();
    console.log(email, password);
    if (!email || !password) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return NextResponse.json(
        { message: "User email already exists" },
        { status: 400, message: "User email already exists" }
      );
    }
    const isMatch = await bcrypt.compare(password, isUserExist.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const username = isUserExist.username;
    const token = jwt.sign({ username, email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      { message: "User created successfully" },
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
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
