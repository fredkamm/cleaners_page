import React from "react";
import Image from "../images/cleaningHero.jpg";
import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi"

const CleanerLandingPage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-start justify-center px-4 mx-w-md md:pl-24 lg:pl-44 xl:pl-80"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        We are a small, self-employed cleaning service that provides top-quality
        cleaning services for homes and businesses. Our team is dedicated to
        delivering exceptional service and exceeding your expectations.
      </p>
      <Link to="Services" smooth={true} duration={800}>
        <button className="btn group">
          Schedule an Appointment
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CleanerLandingPage;
