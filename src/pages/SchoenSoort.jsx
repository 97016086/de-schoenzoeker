import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HighHeels from "../images/pexels-castorlystock-3682292.jpg";
import AnkleBoots from "../images/shoes-795707_1280.jpg";
import Sneakers from "../images/pexels-aditya-aiyar-615049-1407354.jpg";

const SchoenSoort = () => {
  return (
    <>
      <Navbar />
      <div class="min-h-screen">
        <img
          src={AnkleBoots}
          alt="a pair of blue ankle boots"
          className="max-w-80 max-h-80"
        />
        <a href>Enkel Laarzen </a>
        <img
          src={HighHeels}
          alt="a pair of red high heels"
          className="max-w-80 max-h-80"
        />
        <a href>Hoge hak schoenen</a>

        <img src={Sneakers} alt="a pair of sneakers" className="max-w-80" />
        <a href>Sneakers</a>
      </div>
      <Footer />
    </>
  );
};

export default SchoenSoort;
