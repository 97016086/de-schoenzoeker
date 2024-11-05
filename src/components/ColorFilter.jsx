import React from "react";

const ColorFilter = ({ toggleFilter, colors, setColors }) => {
  return (
    <div className="flex flex-col">
      <h3>Kleur:</h3>
      <label>
        <input
          type="checkbox"
          value="black"
          checked={colors.includes("black")}
          onChange={() => toggleFilter(colors, setColors, "black")}
        />
        Zwart
      </label>
      <label>
        <input
          type="checkbox"
          value="white"
          checked={colors.includes("white")}
          onChange={() => toggleFilter(colors, setColors, "white")}
        />
        Wit
      </label>

      <label>
        <input
          type="checkbox"
          value="brown"
          checked={colors.includes("brown")}
          onChange={() => toggleFilter(colors, setColors, "brown")}
        />
        Bruin
      </label>

      <label>
        <input
          type="checkbox"
          value="multi"
          checked={colors.includes("multi")}
          onChange={() => toggleFilter(colors, setColors, "multi")}
        />
        Diverse Kleuren
      </label>
    </div>
  );
};

export default ColorFilter;
