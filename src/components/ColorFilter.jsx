import React from "react";

const ColorFilter = ({ selectedColors, handleColorchange }) => {
  return (
    <div>
      <h3>Kleur</h3>
      <label>
        <input
          type="checkbox"
          value="black"
          checked={selectedColors.includes("black")}
          onChange={handleColorchange}
        />
        zwart
      </label>
      <label>
        <input
          type="checkbox"
          value="white"
          checked={selectedColors.includes("white")}
          onChange={handleColorchange}
        />
        wit
      </label>
      <label>
        <input
          type="checkbox"
          value="bruin"
          checked={selectedColors.includes("bruin")}
          onChange={handleColorchange}
        />
        bruin
      </label>
    </div>
  );
};
