import React from "react";

// import services data
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-gradient-to-t from-primary to-primary2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[36px] font-bold py-7 text-gray-800 xl:text-[50px] lg:text-[42px] md:text-[38px]">
            Services
          </h2>
          <p className="subtitle">These are the services that I provide</p>
        </div>
        <div className="grid px-3 pb-8 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="border-2 border-text p-6 rounded-2xl" key={index}>
                <div className="text-text rounded-sm w-12 h-12 flex justify-center items-center mb-7 text-[42px]">
                  {icon}
                </div>
                <h2 className="text-3xl font-medium mb-2">{name}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
