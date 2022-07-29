import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

import evertek from "../../assets/portfolio/evertekMockup.png";
import newsily from "../../assets/portfolio/newsilyMockup.png";
import mizi from "../../assets/portfolio/miziMockup.png";
import lockify from "../../assets/portfolio/lockifyMockup.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    id: 1,
    title: "MiZi the auction app",
    image: mizi,
    github: "https://bitbucket.org/anypli/anyauction-mobile/src/master/",
  },
  {
    id: 4,
    title: "Evertek e-commerce website",
    image: evertek,
    github: "https://github.com/sahloulmouhib",
  },
  {
    id: 2,
    title: "Newsily the news app",
    image: newsily,
    github: "https://github.com/sahloulmouhib/mvvmNewsApp",
  },
  {
    id: 3,
    title: "Lockify secure your home",
    image: lockify,
    github: "https://github.com/sahloulmouhib/lockify",
  },

  // { id: 5, title: "This is a portfolio item title", image: IMG5 },
  // { id: 6, title: "This is a portfolio item title", image: IMG6 },
];

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item, index) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt="" />
              </div>

              <h3>{item.title}</h3>

              <div className="portfolio__item-cta">
                <a
                  href={item.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href="https://github.com/sahloulmouhib"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
