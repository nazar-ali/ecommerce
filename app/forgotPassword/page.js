// /app/forgot-password/page.tsx
"use client";

import { useState } from "react";
import { assets } from "../../assets/assets";
import Input from "../../components/Input";
import { ToastContainer } from "react-toastify";
import Button from "../../components/Button";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/reset-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setMessage(res.message);
    } else {
      const err = await res.json();
      setMessage(err.error || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition duration-300 ease-in-out">
        <div className="flex justify-center mb-2">
          <Image src={assets.logo} alt="Brand Logo" className="h-12" />
        </div>
        <p className="text-center text-gray-500 text-sm mb-6">
          forgot password
        </p>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4"
          />

          <Button
            type="submit"
            onClick={() => {
              handleSubmit;
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
          >
            Send Reset Link
          </Button>
          <p className="text-red-500 mb-4">{message}</p>
        </form>
      </div>
    </div>
    // <div>
    //   <h1>Forgot Password</h1>
    //   <input
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Email"
    //   />
    //   <button onClick={handleSubmit}>Send Reset Link</button>
    //   <p>{message}</p>
    // </div>
  );
}
