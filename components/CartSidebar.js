"use client";

import { useAppContext } from "../context/useContext";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
const CartSidbar = () => {
  const { cartItems, removeFromCart, isCartOpen, setIsCartOpen } =
    useAppContext();

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div
      className={`relative z-10 ${isCartOpen ? "" : "hidden"}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background backdrop */}
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {/* Header */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      🛒 Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setIsCartOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Cart Items */}
                  <div className="mt-8">
                    <div className="flow-root">
                      {cartItems?.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                      ) : (
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cartItems?.length > 0 ? (
                            cartItems.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    width={96}
                                    height={96}
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{item.title}</h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Qty: {item.quantity}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex">
                                      <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          ) : (
                            <li className="flex py-6">
                              <div className="ml-4 flex flex-1 flex-col">
                                <p className="text-gray-500">
                                  Your cart is empty.
                                </p>
                              </div>
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Summary */}
                {cartItems?.length > 0 ? (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${getTotal()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          onClick={() => setIsCartOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartSidbar;
