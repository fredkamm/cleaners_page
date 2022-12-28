import React from "react";
import Image from "../images/cleaningHero.jpg";

const CleanerLandingPage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Welcome to Our Cleaning Service
      </h1>
      <p className="text-gray-600 mb-8">
        We are a small, self-employed cleaning service that provides top-quality
        cleaning services for homes and businesses. Our team is dedicated to
        delivering exceptional service and exceeding your expectations.
      </p>
      <p
        to="/services"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Learn More About Our Services
      </p>
    </div>
  );
};

export default CleanerLandingPage;
