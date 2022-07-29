import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
type Props = {};

const data1 = [
  {
    id: 1,
    title: "Implementating new and further development of existing apps.",
  },
  { id: 2, title: "Consultating with the customer and the development team." },
  {
    id: 3,
    title:
      "Keeping up to date with the terminology, concepts and best practices for coding mobile apps.",
  },
  {
    id: 4,
    title:
      "Designing, installing and testing a website's user interface elements.",
  },
  { id: 5, title: "Optimizing the user experience." },

  { id: 6, title: "Managing software workflow." },
  { id: 7, title: "Fixing bugs and testing for usability." },
];

const data2 = [
  {
    id: 1,
    title:
      "Developing application programming interfaces (APIs) to support mobile functionality.",
  },
  {
    id: 2,
    title: "Conceptualizing and implementing solutions for data storage.",
  },
  {
    id: 3,
    title: "Building security structures.",
  },
  {
    id: 4,
    title: "Imeplemeting Security settings and hack prevents.",
  },
  { id: 5, title: "Integrating cloud computing services." },

  { id: 6, title: "Streamlining and optimizing for loading speed." },
  { id: 7, title: "Fixing bugs and testing for usability." },
];

const data3 = [
  {
    id: 1,
    title:
      "Gathering and evaluating user requirements in collaboration with product managers and engineers",
  },
  {
    id: 2,
    title:
      "Illustrating design ideas using storyboards, process flows and sitemaps",
  },
  {
    id: 3,
    title:
      "Designing graphic user interface elements, like menus, tabs and widgets",
  },
  {
    id: 4,
    title: "Developing UI mockups and prototypes ",
  },
  {
    id: 5,
    title: "Identify and troubleshoot UX problems (e.g. responsiveness)",
  },

  { id: 6, title: "Adhere to style standards on fonts, colors and images" },
  // { id: 7, title: "Fixing bugs and testing for usability" },
];
const Services = (props: Props) => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mobile development</h3>
          </div>

          <ul className="service__list">
            {data1.map((item) => {
              return (
                <li key={item.id}>
                  <BiCheck className="service__list_icon" />
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* End of UI/UX*/}

        <article className="service">
          <div className="service__head">
            <h3>UX/UI design</h3>
          </div>
          <ul className="service__list">
            {data3.map((item) => {
              return (
                <li key={item.id}>
                  <BiCheck className="service__list_icon" />
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            {data2.map((item) => {
              return (
                <li key={item.id}>
                  <BiCheck className="service__list_icon" />
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* End of Web dev*/}
      </div>
    </section>
  );
};

export default Services;
