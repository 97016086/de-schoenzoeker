import React from "react";

const ColorFilter = ({ toggleFilter, colors, setColors }) => {
  return (
    <div className="flex flex-col mx-8">
      <h3 className="text-[#33a4b7]	text-base font-semibold	font-display	pt-4 ">
        Kleur
      </h3>
      <label>
        <input
          type="checkbox"
          value="black"
          checked={colors.includes("black")}
          onChange={() => toggleFilter(colors, setColors, "black")}
          className="accent-[#33a4b7] font-display"
        />
        Zwart
      </label>
      <label>
        <input
          type="checkbox"
          value="white"
          checked={colors.includes("white")}
          onChange={() => toggleFilter(colors, setColors, "white")}
          className="accent-[#33a4b7] font-display"
        />
        Wit
      </label>

      <label>
        <input
          type="checkbox"
          value="brown"
          checked={colors.includes("brown")}
          onChange={() => toggleFilter(colors, setColors, "brown")}
          className="accent-[#33a4b7] font-display"
        />
        Bruin
      </label>

      <label>
        <input
          type="checkbox"
          value="beige"
          checked={colors.includes("beige")}
          onChange={() => toggleFilter(colors, setColors, "beige")}
          className="accent-[#33a4b7] font-display"
        />
        Beige
      </label>

      <label>
        <input
          type="checkbox"
          value="yellow"
          checked={colors.includes("yellow")}
          onChange={() => toggleFilter(colors, setColors, "yellow")}
          className="accent-[#33a4b7]"
        />
        Geel
      </label>

      <label>
        <input
          type="checkbox"
          value="red"
          checked={colors.includes("red")}
          onChange={() => toggleFilter(colors, setColors, "red")}
          className="accent-[#33a4b7] font-display"
        />
        Rood
      </label>

      <label>
        <input
          type="checkbox"
          value="blue"
          checked={colors.includes("blue")}
          onChange={() => toggleFilter(colors, setColors, "blue")}
          className="accent-[#33a4b7] font-display"
        />
        Blauw
      </label>

      <label>
        <input
          type="checkbox"
          value="purple"
          checked={colors.includes("purple")}
          onChange={() => toggleFilter(colors, setColors, "purple")}
          className="accent-[#33a4b7] font-display"
        />
        Paars
      </label>

      <label>
        <input
          type="checkbox"
          value="green"
          checked={colors.includes("green")}
          onChange={() => toggleFilter(colors, setColors, "green")}
          className="accent-[#33a4b7] font-display"
        />
        Groen
      </label>
      <label>
        <input
          type="checkbox"
          value="multicolour"
          checked={colors.includes("multicolour")}
          onChange={() => toggleFilter(colors, setColors, "multicolour")}
          className="accent-[#33a4b7] font-display"
        />
        Diverse Kleuren
      </label>
    </div>
  );
};

export default ColorFilter;
