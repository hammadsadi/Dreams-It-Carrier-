import React from "react";

const MyContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-2 lg:px-0 bg-red-800">
      {children}
    </div>
  );
};

export default MyContainer;
