import React from "react";
import { FeaturedCourse } from "../types/homepage";

const CourseDetailPage: React.FC<FeaturedCourse> = (course) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            {/* <!-- course thumb --> */}
            <img src={course.image} className="img-fluid w-100" />
          </div>
        </div>
        {/* <!-- course info --> */}
        <div className="row align-items-center mb-5">
          <div className="col-xl-3 order-1 col-sm-6 mb-4 mb-xl-0">
            <h2>{course.category}</h2>
          </div>
          <div className="col-xl-5 order-sm-3 order-xl-2 col-12 order-2">
            <ul className="list-inline text-xl-center">
              <li className="list-inline-item mr-5 mb-3 mb-sm-0">
                <div className="d-flex align-items-center">
                  <i className="ti-alarm-clock text-primary icon-md mr-2"></i>
                  <div className="text-left">
                    <h6 className="mb-0">DURATION</h6>
                    <p className="mb-0">{course.duration}</p>
                  </div>
                </div>
              </li>
              <li className="list-inline-item mr-5 mb-3 mb-sm-0">
                <div className="d-flex align-items-center">
                  <i className="ti-wallet text-primary icon-md mr-2"></i>
                  <div className="text-left">
                    <h6 className="mb-0">FEE</h6>
                    <p className="mb-0">From: {course.fee}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 text-sm-right text-left order-sm-2 order-3 order-xl-3 col-sm-6 mb-4 mb-xl-0">
            <a href="#" className="btn btn-primary">
              Apply now
            </a>
          </div>
          {/* <!-- border --> */}
          <div className="col-12 mt-4 order-4">
            <div className="border-bottom border-primary"></div>
          </div>
        </div>
        {/* <!-- course details --> */}
        <div className="row">
          <div className="col-12 mb-4">
            <p>{course.content}</p>
          </div>
          {/* <!-- social media --> */}
          <div className="col-12">
            <div className="social-link">
              <h6 className="d-none d-sm-block">Social Link</h6>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="d-inline-block text-light p-1" href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="d-inline-block text-light p-1" href="#">
                    <i className="ti-twitter-alt"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="d-inline-block text-light p-1" href="#">
                    <i className="ti-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="d-inline-block text-light p-1" href="#">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-bottom border-primary mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailPage;
