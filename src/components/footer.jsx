import React from "react";
import Logo from "../images/Schoen(4).svg";
import Links from "../components/links";

function Footer() {
  return (
    <footer className="bg-[#A6D4C9] py-6	 mt-auto ">
      <div className=" flex  items-center h-20 mx-auto px-4 text-[#050316] sm:text-left">
        {/* Logo */}

        <img
          src={Logo}
          alt="de schoenzoeker voor alle andere wijdtematen"
          className="cursor-pointer	h-32"
        />
        <Links isFooter={true} />
      </div>
    </footer>
  );
}

export default Footer;
