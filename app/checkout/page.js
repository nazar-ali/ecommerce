"use client";
import { useState } from "react";
import ShippingCard from "./shipping";
import PaymentCard from "./Payment";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [ispaymentOpen, setIsPaymentOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        {/* Form Cards Section */}
        <div className="space-y-6">
          {/* Shipping Info */}
          <ShippingCard isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Payment Info */}
          <PaymentCard
            ispaymentOpen={ispaymentOpen}
            setIsPaymentOpen={setIsPaymentOpen}
          />
        </div>

        {/* Order Summary */}
        <div className="mt-8 border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Annibale Colombo Sofa</span>
            <span>$2499.99</span>
          </div>
          <div className="flex justify-between font-semibold mt-4 text-gray-800">
            <span>Total</span>
            <span>$2499.99</span>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-6">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-base shadow-sm transition duration-200">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
