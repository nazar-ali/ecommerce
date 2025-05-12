"use client";
import { assets } from "@/assets/assets";
import CrossIcon from "@/assets/CrossIcon";
import Menue from "@/assets/Menue";
import { useAppContext } from "@/context/useContext";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return (
    <>
      <nav className="sticky top-0 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-b border-gray-300">
        <div className="flex justify-between items-center px-6 md:px-16 lg:px-32 py-3">
          {/* Logo */}
          <Image
            alt="logo"
            src={assets.logo}
            onClick={() => Router.push("/")}
            className="cursor-pointer w-28 md:w-32 rounded-full"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            <Link
              href="/all-product"
              className="hover:text-gray-900 transition"
            >
              Shop
            </Link>
            <Link href="/" className="hover:text-gray-900 transition">
              About Us
            </Link>
            <Link href="/" className="hover:text-gray-900 transition">
              Contact
            </Link>
            <button
              onClick={() => Router.push("/seller")}
              className="text-xs border px-4 py-1.5 rounded-full"
            >
              Seller Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10"
            >
              {/* Hamburger / Close Icon */}
              {isMenuOpen ? <CrossIcon /> : <Menue />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <Link href="/" className="block hover:text-gray-300">
              Home
            </Link>
            <Link href="/all-product" className="block hover:text-gray-300">
              Shop
            </Link>
            <Link href="/" className="block hover:text-gray-300">
              About Us
            </Link>
            <Link href="/" className="block hover:text-gray-300">
              Contact
            </Link>
            <button
              onClick={() => Router.push("/seller")}
              className="text-xs border px-4 py-1.5 rounded-full w-full"
            >
              Seller Dashboard
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
