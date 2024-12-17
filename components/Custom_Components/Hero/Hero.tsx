"use client";
import React from "react";
// import { motion } from "framer-motion";

import SimpleParallax from "simple-parallax-js";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-red-700 relative">
      {/* Overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-10"></div>

      {/* Centered content */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h2 className="text-2xl md:text-5xl md:leading-[70px] text-center font-bold">
          Unlock Your Potential with a{" "}
          <span className="text-action-primary">Dream IT</span> Career Path
        </h2>
        <button className="cursor-pointer bg-action-primary text-white text-sm md:text-base py-1 px-4 md:py-2 md:px-8 rounded-sm mt-3">
          Join Us
        </button>
      </div>

      <SimpleParallax>
        <Image
          src="https://res.cloudinary.com/dq1ey5jg1/image/upload/v1734439779/laptop-8577367_zq1oxo.jpg"
          alt="image"
          width={1024}
          height={1920}
          className="w-full max-h-screen object-cover "
        />
      </SimpleParallax>
    </div>
  );
};

export default Hero;
