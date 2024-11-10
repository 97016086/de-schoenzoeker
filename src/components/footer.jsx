import React from "react";
import Logo from "../images/Schoen(4).svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#A6D4C9] pb-2	 mt-auto ">
      <div className=" flex  items-center  mx-auto px-4 text-[#050316] sm:text-left">
        {/* Logo */}

        <img
          src={Logo}
          alt="de schoenzoeker voor alle andere wijdtematen"
          className="h-48 mb-3"
        />

        <ul className="mx-5">
          <li className="hover:bg-[#91ca6b]	font-display	text-sm p-2 rounded active:bg-[#91ca6b] :border-b-2">
            <Link to="/">Homepage</Link>
          </li>
          <li className="hover:bg-[#91ca6b]	font-display	text-sm p-2 rounded active:bg-[#91ca6b]">
            <Link to="/over-ons">Over Ons</Link>
          </li>
          <li className="hover:bg-[#91ca6b]	font-display	text-sm p-2 rounded">
            <Link to="/wijdtematen">Wijdtematen</Link>
          </li>
          <li className="hover:bg-[#91ca6b]	font-display	text-sm p-2 rounded">
            <Link to="/de-schoenzoeker">De Schoenzoeker</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
