"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAppContext } from "../../context/useContext";
import SignInService from "../../lib/SignInService";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { assets } from "../../assets/assets";
import Image from "next/image";

export default function SignIn() {
  const { router } = useAppContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({});
  console.log(userData);
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await SignInService.login(formData.email, formData.password);
      toast(res.message);
      setUserData(res);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition duration-300 ease-in-out">
        <div className="flex justify-center mb-2">
          <Image src={assets.logo} alt="Brand Logo" className="h-12" />
        </div>
        <p className="text-center text-gray-500 text-sm mb-6">
          Sign in to continue shopping
        </p>
        <ToastContainer />
        <form onSubmit={handleSignIn} className="space-y-5">
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="text-right">
            <button
              type="button"
              onClick={() => console.log("Forgot Password clicked")}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
          >
            Sign In
          </Button>

          <div className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigateTo("/sign-up")}
              className="text-blue-600 hover:underline font-medium"
            >
              Create one
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
