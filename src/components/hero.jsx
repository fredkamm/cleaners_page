import React from "react";
import Image from "../images/cleaningHero.jpg";
import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi";

const CleanerLandingPage = () => {
  return (
    <section className="section bg-primary" id="home">
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-start justify-center px-4 mx-w-md md:pl-24 lg:pl-44 xl:pl-80"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <h1 className="text-[36px] font-bold py-7 text-gray-800 xl:text-[50px] lg:text-[42px] md:text-[38px]">Welcome</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          We are a small, self-employed cleaning service that provides
          top-quality cleaning services for homes and businesses. Our team is
          dedicated to delivering exceptional service and exceeding your
          expectations.
        </p>
        <Link to="contact" smooth={true} duration={800}>
          <button className="btn group">
            Schedule an Appointment
            <HiArrowNarrowRight className="group-hover:rotate-90 duration-300 ml-3" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CleanerLandingPage;
