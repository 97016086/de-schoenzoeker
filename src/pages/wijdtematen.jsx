import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import SchoenMaker from "../images/raoul-ortega-2JtF6pYAOOI-unsplash.webp";

function Wijdtematen() {
  return (
    <>
      <NavBar />
      <div className="bg-[#f3f7f0]	flex flex-col min-h-screen">
        <div className="mt-16">
          <h1 className="text-[#91ca6b] md:w-1/3 px-8 mt-16 font-display  md:py-2 pt-8  lg:mx-32 ">
            Wat zijn wijdtematen?
          </h1>
        </div>

        {/*Flex container for the text and the image */}
        <div className="flex flex-col md:flex-row items-start lg:mx-32 mt-4">
          <div className="md:w-1/2	px-8	py-2">
            <p className="mb-4">
              je vraagt je vast af wat zijn wijdtematen? De maat die in je
              schoen wordt aangegeven zoals bijv. maat 39 is de lengtemaat van
              een schoen. Daarnaast heb je ook een wijdtemaat. Deze worden
              aangegeven met letters die gaan van C t/m K. Per land kan dit
              verschillen met hoe het aangegeven wordt net als lengtematen. De
              meeste schoenen maken gebruik van een standaard wijdtemaat. De
              standaard wijdtemaat van een schoen is een G. sommige merken maken
              ook gebruik van andere wijdtematen. Dit, omdat sommige mensen
              juist smallere of bredere voeten hebben en daardoor niet in een
              standaard wijdtemaat passen. Een verkeerde wijdtemaat kan zelfs
              voor problemen zorgen, omdat je dan te smalle schoenen aan hebt of
              te brede schoenen.
            </p>
          </div>

          <div className="md:w-1/2 px-8	py-2 mb-5	flex	justify-center">
            <img
              src={SchoenMaker}
              alt="afbeelding van een schoenenmaker die een schoen aan het maken is."
              fetchpriority="high"
              className="hidden md:block  md:mx-8  mb-2 h-1/2"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wijdtematen;
