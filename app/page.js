'use client'
import Footer from "@/components/Footer";
import HeaderSlider from "@/components/HeaderSlider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
     <div className="px-6 md:px-16 lg:px-32">
      <HeaderSlider/>
    </div>
    <Footer/>
    </> 
  );
}
