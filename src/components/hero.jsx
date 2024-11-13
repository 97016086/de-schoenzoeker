import React from "react";
import shoeImage from "../images/jaclyn-moy-ugZxwLQuZec-unsplash-removebg.webp";

const hero = () => {
  return (
    <section className="flex flex-col	lg:flex-row	justify-between	items-center	py-12	px-6	md:px-24  ">
      <div className="w-full lg:w-1/2	text-left	mb-8	min-w-1	md:mb-0">
        <h1 className="text-6xl md:text-9xl font-display	text-[#91ca6b] 	mb-4	max-w-72  ">
          Vind Jouw Passende Schoen
        </h1>
      </div>
      <div className="md:block hidden  justify-center">
        <img
          fetchpriority="high"
          src={shoeImage}
          alt="een afbeelding met verschillende soort schoenen erop."
          className="w-3/4 lg:max-w-full	h-full object-contain m-40"
        />
      </div>
    </section>
  );
};

export default hero;
