"use client";

import { useAppContext } from "../../context/useContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useAppContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
