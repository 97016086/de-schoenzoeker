import React from "react";

const ColorFilter = ({ selectedColors, handleColorChange }) => {
  return (
    <div className="flex flex-col">
      <h3>Select Colors:</h3>
      <label>
        <input
          type="checkbox"
          value="black"
          checked={selectedColors.includes("black")}
          onChange={handleColorChange}
        />
        Black
      </label>
      <label>
        <input
          type="checkbox"
          value="brown"
          checked={selectedColors.includes("brown")}
          onChange={handleColorChange}
        />
        Brown
      </label>
      <label>
        <input
          type="checkbox"
          value="multi"
          checked={selectedColors.includes("multi")}
          onChange={handleColorChange}
        />
        Multiple Colors
      </label>
    </div>
  );
};

export default ColorFilter;
