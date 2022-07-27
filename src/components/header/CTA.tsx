import React from "react";
// import CV from "../../assets/cv.pdf";
type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="cta">
      <a href="#contact" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
