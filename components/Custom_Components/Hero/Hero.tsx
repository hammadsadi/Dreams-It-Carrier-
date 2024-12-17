"use client";
import React from "react";
import SimpleParallax from "simple-parallax-js";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-red-700 relative">
      {/* Overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Centered content */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
      </div>

      <SimpleParallax>
        <Image
          src="https://res.cloudinary.com/dq1ey5jg1/image/upload/v1734265345/pexels-julia-m-cameron-4145074_l9js5l.jpg"
          alt="image"
          width={1024}
          height={1920}
          className="w-full max-h-screen object-cover"
        />
      </SimpleParallax>
    </div>
  );
};

export default Hero;
