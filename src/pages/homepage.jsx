import React from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="bg-[#f3f7f0]">
      <NavBar />
      <div className="flex flex-col min-h-screen ">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
