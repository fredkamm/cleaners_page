import React from "react";

// import services data
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-gradient-to-t from-primary to-primary2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">These are the services that I provide</p>
        </div>
        <div className="grid pb-8 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="border-2 border-text p-6 rounded-2xl" key={index}>
                <div className="text-text rounded-sm w-12 h-12 flex justify-center items-center mb-14 text-[42px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
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
