const { assets } = require("../assets/assets");
import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderSlider = () => {
  const SliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      img: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      img: assets.header_macbook_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      img: assets.header_playstation_image,
    },
  ];
  const [currentSlider, setCurrentSlider] = useState(0);

  const [loading, setLoading] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % SliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [SliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlider(index);
  };

  return (
    <>
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
          }}
        >
          {SliderData.map((slide, index) => (
            <div
              key={slide.id}
              className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9C3] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
            >
              <div className="md:pl-8 mt-10 md:mt-0">
                <p className="md:text-base text-orange-600 pb-1">
                  {slide.offer}
                </p>
                <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                  {slide.title}
                </h1>
                <div className="flex items-center mt-4 md:mt-6 ">
                  <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
                    {slide.buttonText1}
                  </button>
                  <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                    {slide.buttonText2}
                    <Image
                      className="group-hover:translate-x-1 transition"
                      src={assets.arrow_icon}
                      alt="arrow_icon"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center flex-1 justify-center">
                <Image
                  className="md:w-72 w-48"
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {SliderData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentSlider === index ? "bg-orange-600" : "bg-gray-500/30"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderSlider;
