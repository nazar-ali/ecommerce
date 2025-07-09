const myOrders = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition duration-300 ease-in-out">
        <h1 className="text-2xl font-semibold text-center mb-6">My Orders</h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Here you can view your recent orders.
        </p>
        {/* Order list will go here */}
      </div>
    </div>
  );
};

export default myOrders;
