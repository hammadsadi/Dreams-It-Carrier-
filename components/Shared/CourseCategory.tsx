import Image from "next/image";
import React from "react";

const CourseCategory = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="bg-primary flex flex-col space-y-2 items-center py-4 rounded-md">
      <Image
        src={img}
        alt="image"
        width={100}
        height={100}
        className="w-10 md:w-16 "
      />

      <h2>{title}</h2>
    </div>
  );
};

export default CourseCategory;
