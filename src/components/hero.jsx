import React from "react";
import shoeImage from "../images/jaclyn-moy-ugZxwLQuZec-unsplash-removebg.png";

const hero = () => {
  return (
    <section className="flex flex-col	md:flex-row	justify-between	items-center	py-12	px-6	md:px-24  ">
      <div className="md:w-1/2	text-left	mb-8	min-w-1	md:mb-0">
        <h1 className="text-7xl font-display	text-[#91ca6b] 	mb-4	max-w-72  ">
          Vind Jouw Passende schoen
        </h1>
      </div>
      <div className="md:block hidden">
        <img
          fetchpriority="high"
          src={shoeImage}
          alt="een afbeelding met verschillende soort schoenen erop."
          className="max-w-full	h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default hero;
