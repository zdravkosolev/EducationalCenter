import React from "react";

interface Props {
  title: string;
  content: string;
}

const HeroSection: React.FC<Props> = ({ title, content }) => {
  return (
    <section className="hero-section overlay bg-cover">
      <div className="container">
        <div className="hero-slider">
          <div className="hero-slider-item">
            <div className="row">
              <div className="col-md-8">
                <h1 className="text-white">{title}</h1>
                <p className="text-muted mb-4">{content}</p>
                <a href="#" className="btn btn-primary">
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
