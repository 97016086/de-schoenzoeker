import React from "react";

// Array containing navigation items
const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Over ons" },
  { id: 3, text: "Schoen soort" },
  { id: 4, text: "De Schoenzoeker" },
  { id: 5, text: "Contact" },
];

// Desktop Navigation
function Links({ isFooter }) {
  return (
    <ul
      className={
        isFooter ? "flex	flex-col	text-sm leading-2 pl-8" : "hidden md:flex"
      }
    >
      {navItems.map((item) => (
        <li
          key={item.id}
          className={
            isFooter
              ? "cursor-pointer duration-300 hover:text-white"
              : "p-4	hover:bg-[#91ca6b] rounded-xl m-2	cursor-pointer duration-300 hover:text-white"
          }
        >
          <a
            href={
              item.text === "Home" ? "/" : `/${item.text.replace(/\s+/g, "-")}`
            }
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Links;
