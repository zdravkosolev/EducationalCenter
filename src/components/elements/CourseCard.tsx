import React from "react";
import { FeaturedCourse } from "../types/homepage";
import Link from "next/link";

const CourseCard: React.FC<FeaturedCourse> = (course) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-5">
      <div className="card p-0 border-primary rounded-0 hover-shadow">
        <img
          className="card-img-top rounded-0"
          src={course.image}
          alt="course thumb"
        />
        <div className="card-body">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <i className="ti-calendar mr-1 text-color"></i>
              {course.start_time}
            </li>
            <li className="list-inline-item">
              <p className="text-color">{course.category}</p>
            </li>
            <li className="list-inline-item">
              if {course.is_full} show this paragraph -{" "}
              <p className="text-color text-danger">Filled out</p>
            </li>
          </ul>
          <a href="course-single.html">
            <h4 className="card-title">{course.title}</h4>
          </a>
          <p className="card-text mb-4">{course.excerpt}</p>

          <Link href={`/courses/${course.id}`}>
            <a className="btn btn-primary btn-sm">See details</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
