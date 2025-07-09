"use client";
import { set } from "mongoose";
import { assets } from "../../assets/assets";
import CrossIcon from "../../assets/CrossIcon";
import Menue from "../../assets/Menue";
import { useAppContext } from "../../context/useContext";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartSidbar from "../CartSidebar";

const Navbar = () => {
  const {
    isMenuOpen,
    products,
    router,
    setIsMenuOpen,
    handleLogout,
    isSeller,
    searchTerm,
    setSearchTerm,
    cartItems,
    setIsCartOpen,
    isCartOpen,
  } = useAppContext();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  console.log("cartItems", cartItems);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-b border-gray-300">
        <div className="flex  items-center px-6 md:px-16 lg:px-32 py-3">
          <Image
            alt="logo"
            src={assets.logo}
            onClick={() => Router.push("/")}
            className="cursor-pointer w-28 md:w-32 rounded-full"
            width={100}
            height={100}
          />
          <div className="flex-1 flex items-center  justify-end">
            <form className="relative max-sm:w-3/4 mr-4 flex-grow max-w-lg">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-gray-900 rounded-md pl-10 pr-4 py-2 border border-gray-500 focus:outline-none  transition"
              />
              <Image
                src={assets.search_icon}
                alt="search icon"
                className="absolute left-3 top-1/2 -translate-y-1/2  w-5 h-5 pointer-events-none"
              />
            </form>
            <div
              className={`sm:hidden max-sm:hidden md:hidden lg:block lg:flex md:flex  items-center gap-4`}
            >
              <Link href="/" className="hover:text-gray-900 transition">
                Home
              </Link>
              <Link href="/shope" className="hover:text-gray-900 transition">
                Shop
              </Link>
              <Link href="/aboutUs" className="hover:text-gray-900 transition">
                About Us
              </Link>
              <Link href="/" className="hover:text-gray-900 transition">
                Contact
              </Link>
              {isSeller && (
                <button
                  onClick={() => Router.push("/seller")}
                  className="text-xs border px-4 py-1.5 rounded-full"
                >
                  Seller Dashboard
                </button>
              )}
            </div>
          </div>
          <div className="ml-4 flex gap-4">
            <ul className="hidden md:flex items-center gap-4" ref={dropdownRef}>
              <div className="relative ">
                <button
                  className="flex items-center  transition"
                  onClick={() => setOpen(!open)}
                >
                  <Image src={assets.user_icon} alt="user icon" className="" />
                  {/* <span>Account</span> */}
                  <RiArrowDropDownLine className=" text-3xl cursor-pointer" />
                </button>

                {open && (
                  <div className="absolute top-10 right-0 bg-white border-white text-gray-500 shadow-md border rounded-md w-40 z-50">
                    <button
                      className="w-full px-4 text-sm py-2 text-left "
                      onClick={() => {
                        setOpen(false);
                        router.push("/profile");
                      }}
                    >
                      View Profile
                    </button>
                    <button
                      className="w-full px-4 py-2  text-sm text-left hover:bg-gray-100"
                      onClick={() => {
                        setOpen(false);
                        router.push("/change-password");
                      }}
                    >
                      Change Password
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left text-red-500 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setOpen(false);
                        handleLogout();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </ul>
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              {<FaCartPlus size={28} className="text-gray-700 " />}
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems?.length}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:block lg:hidden">
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
          <div className="lg:hidden px-6 pb-4 space-y-2">
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
      {isCartOpen && <CartSidbar />}
    </>
  );
};

export default Navbar;
