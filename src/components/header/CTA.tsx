import React from "react";
//@ts-ignore
import CV from "../../assets/cv.pdf";
type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
