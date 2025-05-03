'use client'
import Footer from "@/components/Footer";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProduct from "@/components/HomeProduct";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
     <div className="px-6 md:px-16 lg:px-32">
      <HeaderSlider/>
      <HomeProduct/>
    </div>
    <Footer/>
    </> 
  );
}
