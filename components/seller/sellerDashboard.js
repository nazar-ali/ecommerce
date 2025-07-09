import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function SellerDashboard({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 pt-16">
        <Sidebar />

        <main className="ml-64 flex-1 p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
