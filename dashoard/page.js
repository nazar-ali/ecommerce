"use client";
import Footer from "../components/common/Footer";
import HeaderSlider from "../components/HeaderSlider";
import HomeProduct from "../components/HomeProduct.js";
import Navbar from "../components/common/Navbar";
import CartSidebar from "../components/CartSidebar";
const DashboardPage = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="px-6 md:px-16 lg:px-32">
          <HeaderSlider />
          <HomeProduct />
        </div>
        <CartSidebar />
        <Footer />
      </div>
    </>
  );
};

export default DashboardPage;
