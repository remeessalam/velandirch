import React from "react";
import { appPortfolio, webPortfolio } from "../../constant";

const Portfolio = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = isWebDevelopment ? webPortfolio : appPortfolio;
  return (
    <div
      data-aos="fade-up"
      id="portfolio"
      className="text-black py-[2rem] relative"
    >
      {/* <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div> */}
      {/* <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div> */}
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-black">
          <p className="gradient-text uppercase gradient-rounded-text-box">
            Portfolio
          </p>
          <h2 className="heading text-center mb-5">Our Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="flex flex-col gap-3 rounded-md overflow-hidden relative group w-full"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-fit h-fit object-contain group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-2 bg-primary/80 text-black flex flex-col gap-2">
                  <h3 className="font-medium text-center">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;