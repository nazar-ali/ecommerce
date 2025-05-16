"use client";
import Footer from "../components/Footer";
import HeaderSlider from "../components/HeaderSlider";
import HomeProduct from "../components/HomeProduct.js";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProduct />
        {/* <FeaturedProduct /> */}
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
