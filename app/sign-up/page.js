// SignUp.jsx

"use client";
import SignupService from "../../lib/SignupService";
import { useAppContext } from "../../context/useContext";
import { useState } from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {
  const { router } = useAppContext();
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log("Sign Up Data:", formData);
    if (formData.password !== formData.confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    try {
      const res = await SignupService.signup(
        formData.username,
        formData.email,
        formData.fullName,
        formData.password,
        formData.confirmPassword,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast(res.message);
      router.push("/signin");
    } catch (error) {
      toast.error(error.message);
    }

    setFormData({
      username: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-2">
          <Image src={assets.logo} alt="Brand Logo" className="h-12" />
        </div>
        <p className="text-center text-gray-500 text-sm mb-6">
          Create an Account
        </p>
        <ToastContainer />
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full mr-2"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signin")}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
