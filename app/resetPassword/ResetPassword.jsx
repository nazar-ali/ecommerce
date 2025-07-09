// /app/reset-password/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!newPassword || newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessage(data.message || "Password reset successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
        <form className="space-y-5">
          <Input
            type="password"
            name="resetPassword"
            placeholder="Reset Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <Button
            onClick={handleReset}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
          >
            submit
          </Button>
          {/* {loading ? "Submitting..." : "Submit"} */}
          {message && (
            <p style={{ color: "green", marginTop: "1rem" }}>{message}</p>
          )}
          {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
        </form>
      </div>
    </div>
    // <div style={{ padding: "1rem" }}>
    //   <h1>Reset Password</h1>
    //   <input
    //     type="password"
    //     placeholder="New Password"
    //     value={newPassword}
    //     onChange={(e) => setNewPassword(e.target.value)}
    //     style={{ padding: "0.5rem", marginTop: "1rem", width: "100%" }}
    //   />
    //   <button
    //     onClick={handleReset}
    //     style={{ padding: "0.5rem", marginTop: "1rem", width: "100%" }}
    //     disabled={loading}
    //   >
    //     {loading ? "Submitting..." : "Submit"}
    //   </button>

    //   {message && (
    //     <p style={{ color: "green", marginTop: "1rem" }}>{message}</p>
    //   )}
    //   {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    // </div>
  );
}
