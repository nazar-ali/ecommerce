import { useState } from "react";

const ShippingCard = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mb-6 border rounded-lg shadow-md">
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex justify-between items-center bg-gray-100 p-4 rounded-t-lg"
      >
        <h2 className="text-lg font-semibold">Shipping Information</h2>
        <span className="text-sm text-purple-600">
          {isOpen ? "Hide ▲" : "Show ▼"}
        </span>
      </div>

      {/* Body (Expandable Content) */}
      {isOpen && (
        <div className="p-4">
          <input
            className="w-full mb-3 p-2 border rounded"
            placeholder="Full Name"
          />
          <input
            className="w-full mb-3 p-2 border rounded"
            placeholder="Address"
          />
          <input
            className="w-full mb-3 p-2 border rounded"
            placeholder="Phone"
          />
        </div>
      )}
    </div>
  );
};
export default ShippingCard;
