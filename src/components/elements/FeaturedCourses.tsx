import React from "react";
import CourseCard from "./CourseCard";
import { FeaturedCourse } from "../types/homepage";

interface Props {
  data: FeaturedCourse[];
}

const FeaturedCourses: React.FC<Props> = ({ data }) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center section-title justify-content-between">
              <h2 className="mb-0 text-nowrap mr-3">Featured Courses</h2>
              <div className="border-top w-100 border-primary d-none d-sm-block"></div>
              <div>
                <a
                  href="/courses"
                  className="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block"
                >
                  see all
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- course list --> */}
        <div className="row justify-content-center">
          {data.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </div>
        {/* <!-- mobile see all button --> */}
        <div className="row">
          <div className="col-12 text-center">
            <a
              href="/courses"
              className="btn btn-sm btn-primary-outline d-sm-none d-inline-block"
            >
              see all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
