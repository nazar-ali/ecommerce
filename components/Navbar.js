"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
const Navbar = () => {
  const [isSeller, setIsSeller] = useState(true);
  return (
    <>
      <nav className="flex items-center sticky top-0 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-white">
        <Image
          alt="logo"
          src={assets.logo}
          onClick={() => Router.push("/")}
          className="cursor-pointer w-28 md:w-32 rounded-full"
        />
        <div className="flex items-center gap-4 lg:gap-4 max-md:hidden">
          <Link href="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link href="/all-product" className="hover:text-gray-900 transition">
            Shop
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            About Us
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            Contact
          </Link>
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
