import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Shoes from "../images/pexels-rachel-claire-5863630.jpg";

function overOns() {
  return (
    <>
      <NavBar />
      <div className="	bg-[#fafcf8]	flex flex-col min-h-screen ">
        <h1 className="text-[#91ca6b]">Over ons</h1>
        <div className="md:flex">
          <div className="md:shrink-0">
            <p>
              Schoenzoeker is ontstaan, omdat ik zelf tegen een probleem
              aanliep. Het probleem waar ik tegenaan liep is dat als je een
              smallere of bredere wijdtemaat dan de gemiddelde wijdtemaat hebt
              dat dan informatie overal en nergens staat op het internet. Dit
              wilde ik veranderen door een plek te maken waar je informatie kan
              vinden en ook kan vinden waar je schoenen kan kopen.
            </p>

            <img
              src={Shoes}
              alt="afbeelding van schoenen op een schoenenrek"
              className="max-w-96	h-auto"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default overOns;
