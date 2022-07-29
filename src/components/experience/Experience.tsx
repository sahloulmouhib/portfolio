import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

type Props = {};

const data1 = [
  { id: 1, title: "React Native" },
  { id: 2, title: "TypeScript" },
  { id: 3, title: "ReactJS" },
  { id: 4, title: "HTML5 & CSS3" },
  { id: 5, title: "NodeJS" },
  { id: 6, title: "ExpressJS" },
  { id: 7, title: "MongoDB" },
  { id: 8, title: "MySQL" },
];

const data2 = [
  { id: 1, title: "Unix/Windows" },
  { id: 2, title: "Git, Github & Bitbucket" },
  { id: 3, title: "Figma" },
  { id: 4, title: "Jira" },
  { id: 5, title: "UX/UI" },
  { id: 6, title: "Microsoft tools" },
];

const Experience = (props: Props) => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Software Development</h3>
          <div className="experience__content">
            {data1.map((item) => {
              return (
                <article key={item.id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Others</h3>
          <div className="experience__content">
            {data2.map((item) => {
              return (
                <article key={item.id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
