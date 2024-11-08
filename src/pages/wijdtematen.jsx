import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function WijdteMaten() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fafcf8] flex flex-col  min-h-screen">
        <h1 className="text-[#91ca6b]"> Wat zijn Wijdtematen?</h1>
        <p>
          je vraagt je vast af wat zijn wijdtematen? De maat die in je schoen
          wordt aangegeven zoals bijv. maat 39 is de lengtemaat van een schoen.
          Daarnaast heb je ook een wijdtemaat. Deze worden aangegeven met
          letters die gaan van C t/m K. Per land kan dit verschillen met hoe het
          aangegeven wordt net als lengtematen. De meeste schoenen maken gebruik
          van een standaard wijdtemaat. De standaard wijdtemaat van een schoen
          is een G. sommige merken maken ook gebruik van andere wijdtematen.
          Dit, omdat sommige mensen juist smallere of bredere voeten hebben en
          daardoor niet in een standaard wijdtemaat passen. Een verkeerde
          wijdtemaat kan zelfs voor problemen zorgen.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default WijdteMaten;
