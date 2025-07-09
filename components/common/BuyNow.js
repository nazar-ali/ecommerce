"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const BuyNow = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: "123", quantity: 1 }),
    });

    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.log(result.error.message);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Buy Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Confirm Purchase</h2>
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-4 py-2 rounded mr-2"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNow;
