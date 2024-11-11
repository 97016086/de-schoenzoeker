import React, { useState } from "react";
import Logo from "../images/Schoen(4).svg";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
          className="mt-10 h-40 "
        />
        {/* Desktop Navigation (hidden on small screens) */}
        <ul className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "font-display p-2 bg-[#91ca6b] rounded"
                : "hover:bg-[#8fc76a] p-2 rounded"
            }
          >
            Homepage
          </NavLink>

          <NavLink
            to="/over-ons"
            className={(navData) =>
              navData.isActive
                ? "font-display p-2 bg-[#91ca6b] rounded"
                : "hover:bg-[#8fc76a] p-2 rounded"
            }
          >
            Uitleg Schoenzoeker
          </NavLink>

          <NavLink
            to="/wijdtematen"
            className={(navData) =>
              navData.isActive
                ? "font-display p-2 bg-[#91ca6b] rounded"
                : "hover:bg-[#8bd15c] p-2 rounded"
            }
          >
            Wijdtematen
          </NavLink>

          <NavLink
            to="/de-schoenzoeker"
            className={(navData) =>
              navData.isActive
                ? "font-display p-2 bg-[#91ca6b] rounded"
                : "hover:bg-[#8fc76a] p-2 rounded"
            }
          >
            De Schoenzoeker
          </NavLink>
        </ul>
        {/* Mobile Navigation Icon (only visible on small screens) */}
        <div onClick={handleNav} className="lg:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        {/* Mobile Navigation Menu */}
        <div
          className={
            nav
              ? "fixed	lg:hidden left-0 top-0 w-[60%] h-full bg-[#A6D4C9] ease-in-out duration-500"
              : "fixed top-0 left-[-100%] w-[60%] h-full ease-in-out duration-500"
          }
        >
          {/* Mobile Logo */}
          <div className="p-4">
            <img
              src={Logo}
              alt="de schoenzoeker voor alle andere wijdtematen"
              className="cursor-pointer h-16 "
            />
          </div>

          {/* Mobile Navigation Items */}
          <ul className="flex flex-col space-y-4 p-4">
            <li className="hover:bg-[#91ca6b] p-2 rounded	font-display active:bg-[#91ca6b]">
              <NavLink to="/" onClick={handleNav}>
                Homepage
              </NavLink>
            </li>
            <li className="hover:bg-[#91ca6b] p-2 rounded	font-display active:bg-[#91ca6b]">
              <NavLink to="/over-ons" onClick={handleNav}>
                Over Ons
              </NavLink>
            </li>
            <li className="hover:bg-[#91ca6b] p-2 rounded	font-display">
              <NavLink to="/wijdtematen" onClick={handleNav}>
                Wijdtematen
              </NavLink>
            </li>
            <li className="hover:bg-[#91ca6b] p-2 rounded	font-display">
              <NavLink to="/de-schoenzoeker" onClick={handleNav}>
                De Schoenzoeker
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
