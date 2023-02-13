import React from "react";
import "./Portfolio.css";

import { portfolioData } from "../data/portfolioData.js";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((portfolio) => (
          <article key={portfolio.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={portfolio.image} alt="" />
            </div>
            <h3>{portfolio.title}</h3>
            <div className="portfolio__item-cta">
              <a href={portfolio.github} className="btn">
                Github
              </a>
              <a
                href={portfolio.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
