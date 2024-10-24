import React from "react";

const ShoeSizeFilter = ({ SelectedSizes, handleSizeChange }) => {
  return (
    <div>
      <h3>Schoenmaat</h3>
      <label>
        <input
          type="checkbox"
          value="36"
          checked={SelectedSizes.includes("36")}
          onChange={handleSizeChange}
        />
        36
      </label>
      <label>
        <input
          type="checkbox"
          value="37"
          checked={SelectedSizes.includes("37")}
          onChange={handleSizeChange}
        />
        37
      </label>
      <label>
        <input
          type="checkbox"
          value="38"
          checked={SelectedSizes.includes("38")}
          onChange={handleSizeChange}
        />
        38
      </label>
      <label>
        <input
          type="checkbox"
          value="39"
          checked={SelectedSizes.includes("39")}
          onChange={handleSizeChange}
        />
        39
      </label>
      <label>
        <input
          type="checkbox"
          value="40"
          checked={SelectedSizes.includes("40")}
          onChange={handleSizeChange}
        />
        40
      </label>
      <label>
        <input
          type="checkbox"
          value="41"
          checked={SelectedSizes.includes("41")}
          onChange={handleSizeChange}
        />
        41
      </label>
      <label>
        <input
          type="checkbox"
          value="42"
          checked={SelectedSizes.includes("42")}
          onChange={handleSizeChange}
        />
        42
      </label>
      <label>
        <input
          type="checkbox"
          value="42"
          checked={SelectedSizes.includes("42")}
          onChange={handleSizeChange}
        />
        43
      </label>
      <label>
        <input
          type="checkbox"
          value="44"
          checked={SelectedSizes.includes("44")}
          onChange={handleSizeChange}
        />
        44
      </label>
      <label>
        <input
          type="checkbox"
          value="45"
          checked={SelectedSizes.includes("45")}
          onChange={handleSizeChange}
        />
        45
      </label>
    </div>
  );
};

export default ShoeSizeFilter;