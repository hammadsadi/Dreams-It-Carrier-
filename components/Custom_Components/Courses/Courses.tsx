import CourseItem from "@/components/Shared/CourseItem";
import MyContainer from "@/components/Shared/MyContainer";
import MySection from "@/components/Shared/MySection";
import SectionHeading from "@/components/Shared/SectionHeading";
import React from "react";

const Courses = () => {
  return (
    <div>
      <MyContainer>
        <MySection>
          {/* Section Title */}
          <SectionHeading
            title="Popular Courses"
            subTitle="We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market. From the list below you can enroll to any online or offline courses at any time."
          />
        </MySection>
        {/* Course Area */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </MyContainer>
    </div>
  );
};

export default Courses;
