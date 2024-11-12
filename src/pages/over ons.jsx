import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Shoes from "../images/pexels-rachel-claire-5863630.webp";

function OverOns() {
  return (
    <>
      <NavBar />
      <div className="bg-[#f3f7f0]	flex flex-col min-h-screen">
        <div className="mt-16">
          <h1 className="text-[#91ca6b] md:w-1/3 px-8 mt-16 font-display  md:py-2 pt-8  lg:mx-32 ">
            Over ons en uitleg schoenzoeker
          </h1>
        </div>

        {/*Flex container for the text and the image */}
        <div className="flex flex-col md:flex-row items-start lg:mx-32 mt-4">
          <div className="md:w-1/2	px-8	py-2">
            <p className="mb-4">
              Schoenzoeker is ontstaan vanuit een probleem. Dit probleem was een
              smallere of bredere wijdtemaat hebben dan gemiddeld. Hierdoor is
              schoenen vinden erg lastig online of in het dagelijks leven. Deze
              website heb ik ontwikkeld om een oplossing voor dit probleem te
              vinden.
            </p>

            <p className="mb-4">
              De schoenzoeker is een gedeelte van de website waar u
              verschillende merken, maten, wijdtematen kunt zoeken en daar dan
              weer schoenen uit terug krijgt. u kunt
              <a className="underline px-2" href="/de-schoenzoeker">
                hier
              </a>
              klikken om naar de schoenzoeker te gaan.
            </p>

            <p className="mb-4">
              voor meer informatie over wijdtematen klikt u
              <a className="underline px-2" href="/Wijdtematen">
                hier
              </a>
            </p>
          </div>

          <div className="md:w-1/2 px-8	py-2 mb-4	flex	justify-center">
            <img
              src={Shoes}
              alt="afbeelding van schoenen op een schoenenrek"
              fetchpriority="high"
              className="hidden md:block  md:mx-8  mt-2"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OverOns;
