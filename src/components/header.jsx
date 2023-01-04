/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import Logo from '../images/Logo.png';
import Nav from '../components/navbar/Nav';
import NavMobile from '../components/navbar/NavMobile';

function header() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-primary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-tertiary z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="/">
          <img className="h-[250px]" src={Logo} alt="" />
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}

export default header;
