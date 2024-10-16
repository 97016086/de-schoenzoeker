import React, { useState } from "react";
import Logo from "../images/Schoen(4).svg";
import Links from "../components/links";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "over ons" },
    { id: 3, text: "Schoen soort" },
    { id: 4, text: "De Schoenzoeker" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="bg-[#A6D4C9] flex justify-between items-center h-20 mx-auto px-4 text-[#050316]">
      {/* Logo */}
      <img
        src={Logo}
        alt="de schoenzoeker voor alle andere wijdtematen"
        className="cursor-pointer	h-40"
      />

      <Links isFooter={false} />

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full  bg-[#A6D4C9] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <img
          src={Logo}
          alt="de schoenzoeker voor alle andere wijdtematen"
          className="cursor-pointer	h-28"
        />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="m-2 p-3 rounded hover:bg-[#91ca6b] duration-300 hover:text-white cursor-pointer border-[#91ca6b]"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
