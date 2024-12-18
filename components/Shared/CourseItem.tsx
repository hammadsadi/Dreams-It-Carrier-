import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const CourseItem = () => {
  return (
    <div className=" rounded-md shadow-md bg-gray-900 text-gray-100">
      <Image
        src="https://res.cloudinary.com/dq1ey5jg1/image/upload/v1734507398/course_1662795698_vt8fmj.jpg"
        alt="image"
        width={100}
        height={100}
        className="w-full object-cover rounded-t-md"
      />
      <div className="flex flex-col justify-between p-3 space-y-8">
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-semibold tracking-wide">
            Donec lectus leo
          </h2>
          {/* Review */}
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="flex">
                <span className="text-sm text-[#e67e22] md:text-base">
                  <FaStar />
                </span>
                <span className="text-sm text-[#e67e22] md:text-base">
                  <FaStar />
                </span>
                <span className="text-sm text-[#e67e22] md:text-base">
                  <FaStar />
                </span>
                <span className="text-sm text-[#e67e22] md:text-base">
                  <FaStar />
                </span>
                <span className="text-sm text-[#e67e22] md:text-base">
                  <FaStarHalf />
                </span>
              </div>
              <p className="text-sm text-body-secondary">1200+ Reviews</p>
            </div>
            <p className="text-sm text-body-secondary">1200+ Student</p>
          </div>
          <p className="text-white font-normal ">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="font-semibold">Fee 1000 BDT</p>
          <button className="bg-action-primary py-2 px-4 text-sm font-semibold rounded-md">
            Click For Discount
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
