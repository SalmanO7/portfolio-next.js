import React from "react";
import Works from "./Works";
import "./work.css";

const Portfolio = () => {
  return (
    <section
      className="work section w-full flex justify-center items-center flex-col"
     id="portfolio" >
      <div className="portfolio-head">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold xl:text-4xl text-center mt-40 ">
          PortFolio
        </h2>
        <span className="text-sm pl-2 sm:pl-2 md:pl-2 xl:pl-4 text-center mb-10">Most Recent Works</span>
      </div>
      <Works />
    </section>
  );
};

export default Portfolio;
