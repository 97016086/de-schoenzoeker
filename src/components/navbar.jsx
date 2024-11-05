import React, { useState } from "react";
import Logo from "../images/Schoen(4).svg";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Route } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="bg-[#A6D4C9] flex justify-between items-center h-20 mx-auto px-4 text-[#050316]">
        {/* Logo */}
        <img
          src={Logo}
          alt="de schoenzoeker voor alle andere wijdtematen"
          className="cursor-pointer h-16"
        />

        {/* Desktop Navigation (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:bg-[#91ca6b] p-2 rounded active:bg-[#91ca6b]">
            <Link to="/">Homepage</Link>
          </li>
          <li className="hover:bg-[#91ca6b] p-2 rounded active:bg-[#91ca6b]">
            <Link to="/over-ons">Over Ons</Link>
          </li>
          <li className="hover:bg-[#91ca6b] p-2 rounded">
            <Link to="/wijdtematen">Wijdtematen</Link>
          </li>
          <li className="hover:bg-[#91ca6b] p-2 rounded">
            <Link to="/schoen-soort">Schoen soort</Link>
          </li>
          <li className="hover:bg-[#91ca6b] p-2 rounded">
            <Link to="/de-schoenzoeker">De Schoenzoeker</Link>
          </li>
        </ul>

        {/* Mobile Navigation Icon (only visible on small screens) */}
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#A6D4C9] ease-in-out duration-500"
              : "fixed top-0 left-[-100%] w-[60%] h-full ease-in-out duration-500"
          }
        >
          {/* Mobile Logo */}
          <div className="p-4">
            <img
              src={Logo}
              alt="de schoenzoeker voor alle andere wijdtematen"
              className="cursor-pointer h-16"
            />
          </div>

          {/* Mobile Navigation Items */}
          <ul className="flex flex-col space-y-4 p-4">
            <li className="hover:bg-[#91ca6b] p-2 rounded active:bg-[#91ca6b]">
              <Link to="/" onClick={handleNav}>
                Homepage
              </Link>
            </li>
            <li className="hover:bg-[#91ca6b] p-2 rounded active:bg-[#91ca6b]">
              <Link to="/over-ons" onClick={handleNav}>
                Over Ons
              </Link>
            </li>
            <li className="hover:bg-[#91ca6b] p-2 rounded">
              <Link to="/wijdtematen" onClick={handleNav}>
                Wijdtematen
              </Link>
            </li>
            <li className="hover:bg-[#91ca6b] p-2 rounded">
              <Link to="/schoen-soort" onClick={handleNav}>
                Schoen soort
              </Link>
            </li>
            <li className="hover:bg-[#91ca6b] p-2 rounded">
              <Link to="/de-schoenzoeker" onClick={handleNav}>
                De Schoenzoeker
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
