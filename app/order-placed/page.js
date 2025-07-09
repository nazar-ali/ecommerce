const OrderPlaced = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition duration-300 ease-in-out">
        <div className="flex justify-center mb-6">
          <img src="/assets/success.png" alt="Success" className="h-16 w-16" />
        </div>
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Thank you for your order. We will notify you once it is shipped.
        </p>
      </div>
    </div>
  );
};
export default OrderPlaced;
