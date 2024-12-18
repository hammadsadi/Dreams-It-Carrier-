"use client";
import React from "react";
import { motion } from "framer-motion";

import SimpleParallax from "simple-parallax-js";
import Image from "next/image";
import MyContainer from "@/components/Shared/MyContainer";
import CourseCategory from "@/components/Shared/CourseCategory";
const Hero = () => {
  const courseCategory = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dq1ey5jg1/image/upload/v1734502698/001-telecommuting_tqgheo.png",
      title: "Web Design & Freelancing",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dq1ey5jg1/image/upload/v1734502698/001-eng_ylyqgg.png",
      title: "Spoken English",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dq1ey5jg1/image/upload/v1734502699/005-js_zlujut.png",
      title: "JavaScript",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dq1ey5jg1/image/upload/v1734502699/004-php-3_pk5as0.png",
      title: "PHP & Laravel",
    },
  ];
  return (
    <div>
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
      {/* Course Catagory */}
      <MyContainer>
        <div className="bg-secondary relative z-20 -top-14 p-4 rounded-md grid md:grid-cols-3 md:gap-3 lg:grid-cols-4 gap-3 grid-cols-1">
          {courseCategory?.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CourseCategory img={course.image} title={course.title} />
            </motion.div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default Hero;
