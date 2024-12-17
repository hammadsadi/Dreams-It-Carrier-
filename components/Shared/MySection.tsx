import React from "react";

const MySection = ({ children }: { children: React.ReactNode }) => {
  return <section className="mt-10 md:mt-20">{children}</section>;
};

export default MySection;
