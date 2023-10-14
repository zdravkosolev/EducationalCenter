import React from "react";
import CourseCard from "./CourseCard";

const RelatedCourses: React.FC = () => {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Related Courses</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
