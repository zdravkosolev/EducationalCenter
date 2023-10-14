import React from "react";
import { AboutpageProps } from "../types/homepage";

type Props = Partial<AboutpageProps>;

const AboutBlock: React.FC<Props> = ({
  title,
  first_content_block,
  first_image,
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h2 className="section-title">{title}</h2>
            <p>{first_content_block}</p>

            <a href="/about" className="btn btn-primary-outline">
              Learn more
            </a>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <img
              className="img-fluid w-100"
              src={first_image}
              alt="about image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
