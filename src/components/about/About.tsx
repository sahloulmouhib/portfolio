import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import ME2 from "../../assets/laptop-wave.png";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About  Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Years in progamming</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Software engineer</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed projects</small>
            </article>
          </div>
          <p>
            I am Mouhib Sahloul, I am a software engineer, freshly graduated,
            and I am highly motivated to develop my skills and evolve
            professionally constantly. I am confident in my ability to come up
            with interesting ideas. I am passionate about programming and
            design. I also have experience working in a collaborative
            environment and presenting status updates to project stakeholders.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
