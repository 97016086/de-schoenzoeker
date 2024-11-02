import React from "react";

const TypeFilter = ({ selectedTypes, handleTypeChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="sneakers"
          checked={selectedTypes.includes("sneakers")}
          onChange={handleTypeChange}
        />
        Sneakers
      </label>
      <label>
        <input
          type="checkbox"
          value="ankle boots"
          checked={selectedTypes.includes("ankle boots")}
          onChange={handleTypeChange}
        />
        enkellaarzen
      </label>
    </div>
  );
};

export default TypeFilter;
