import React from "react";
import { AboutpageProps } from "../types/homepage";

type Props = {
  data: Omit<AboutpageProps, "title" | "first_content_block">;
};

const AboutPage: React.FC<Props> = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              className="img-fluid w-100 mb-4"
              src={data.first_image}
              alt="about image"
            />
            <p className="mb-5">{data.second_content_block}</p>
            <img
              className="img-fluid w-100 mb-4"
              src={data.second_image}
              alt="about image"
            />
            <p>{data.third_content_block}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
