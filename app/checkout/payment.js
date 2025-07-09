import { useState } from "react";

const PaymentCard = ({ ispaymentOpen, setIsPaymentOpen }) => {
  return (
    <div className="mb-6 border rounded-lg  shadow-md">
      {/* Header */}
      <div
        onClick={() => setIsPaymentOpen(!ispaymentOpen)}
        className="cursor-pointer  flex justify-between items-center bg-gray-100 p-4 rounded-t-lg"
      >
        <h2 className="text-lg font-semibold">Payments</h2>
        <span className="text-sm text-purple-600">
          {ispaymentOpen ? "Hide ▲" : "Show ▼"}
        </span>
      </div>
      {
        /* Body (Expandable Content) */
        ispaymentOpen && (
          <div className="p-4">
            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Card Number"
            />
            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Expiry Date"
            />
            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="CVC"
            />
          </div>
        )
      }
    </div>
  );
};
export default PaymentCard;
