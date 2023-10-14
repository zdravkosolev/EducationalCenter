import React from "react";
import { Testimonial } from "../types/homepage";

interface Props {
  title: string;
  content: string;
  data: Testimonial[];
}

const Testimonials: React.FC<Props> = ({ data, title, content }) => {
  return (
    <section className="section" id="section-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <div className="section-heading testimonial-heading">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 col-md-12">
            <div className="row">
              {data.map((testimonial) => {
                return (
                  <div className="col-lg-6">
                    <div className="test-inner ">
                      <div className="test-author-thumb d-flex">
                        <img
                          src={testimonial.avatar}
                          alt="Testimonial author"
                          className="img-fluid"
                        />
                        <div className="test-author-info">
                          <h4>
                            {testimonial.first_name} {testimonial.last_name}
                          </h4>
                        </div>
                      </div>
                      {testimonial.message}
                      <i className="fa fa-quote-right"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
