import React from "react";
import { allServices, machinelearning } from "../../../constant";
import Testimonials from "../../common/Testimonials";

const MachineLearning = () => {
  const details = allServices[6];

  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={machinelearning}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        {/* Service Title */}
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {details.title}
        </h2>

        {/* Service Description */}
        <p data-aos="fade-up" className="description">
          {details.detailContent}
        </p>

        {/* Points List */}
        {/* <div data-aos="fade-up" className="pt-4">
          <h3 className="text-xl font-semibold">{details.points.heading}</h3>
          <ul className="w-full flex flex-wrap justify-between gap-3  sm:pl-6 mt-5">
            {details.points.list.map((item, index) => (
              <li
                key={index}
                className="text-base w-full rounded-lg  bg-primary hover:bg-opacity-30 p-6 hover:scale-105 transition-all duration-700"
              >
                <h3 className="text-lg font-semibold">{item.heading}</h3>
                <p> {item.desc}</p>
              </li>
            ))}
          </ul>
        </div> */}
        <Testimonials />
      </div>
    </div>
  );
};

export default MachineLearning;