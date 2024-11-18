"use client";
import React, { useState, useEffect } from "react";

const BannerSliders = [
  {
    img: "/image/image1.jpg",
    title: "Random Name #1",
    btn: "BUY NOW",
  },
  {
    img: "/image/image2.jpg",
    title: "Random Name #2",
    btn: "BUY NOW",
  },
  {
    img: "/image/image3.jpg",
    title: "Random Name #3",
    btn: "BUY NOW",
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const totalSlides = BannerSliders.length;

 
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

   
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full  flex flex-col justify-between">
      {/* Slider */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {BannerSliders.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-72 flex items-center justify-center bg-gray-200  rounded-lg"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {BannerSliders.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
