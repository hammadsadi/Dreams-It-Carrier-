import React from "react";

const SectionHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-1 md:mb-9 mb-6">
      <h2 className="font-bold md:text-4xl text-2xl">{title}</h2>
      <p className="text-sm md:text-base">{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
