import React from "react";
import Search from "./search";

const ShoeSizeFilter = ({ toggleFilter, sizes, setSizes }) => {
  return (
    <div className="flex flex-col">
      <h3>Schoenmaat</h3>

      <label>
        <input
          type="checkbox"
          value="36"
          checked={sizes.includes("36")}
          onChange={() => toggleFilter(sizes, setSizes, "36")}
        />
        36
      </label>

      <label>
        <input
          type="checkbox"
          value="37"
          checked={sizes.includes("37")}
          onChange={() => toggleFilter(sizes, setSizes, "37")}
        />
        37
      </label>

      <label>
        <input
          type="checkbox"
          value="38"
          checked={sizes.includes("38")}
          onChange={() => toggleFilter(sizes, setSizes, "38")}
        />
        38
      </label>

      <label>
        <input
          type="checkbox"
          value="39"
          checked={sizes.includes("39")}
          onChange={() => toggleFilter(sizes, setSizes, "39")}
        />
        39
      </label>

      <label>
        <input
          type="checkbox"
          value="40"
          checked={sizes.includes("40")}
          onChange={() => toggleFilter(sizes, setSizes, "42")}
        />
        40
      </label>

      <label>
        <input
          type="checkbox"
          value="41"
          checked={sizes.includes("41")}
          onChange={() => toggleFilter(sizes, setSizes, "41")}
        />
        41
      </label>

      <label>
        <input
          type="checkbox"
          value="42"
          checked={sizes.includes("42")}
          onChange={() => toggleFilter(sizes, setSizes, "42")}
        />
        42
      </label>

      <label>
        <input
          type="checkbox"
          value="43"
          checked={sizes.includes("43")}
          onChange={() => toggleFilter(sizes, setSizes, "42")}
        />
        43
      </label>

      <label>
        <input
          type="checkbox"
          value="44"
          checked={sizes.includes("44")}
          onChange={() => toggleFilter(sizes, setSizes, "42")}
        />
        44
      </label>
      <label>
        <input
          type="checkbox"
          value="45"
          checked={sizes.includes("45")}
          onChange={() => toggleFilter(sizes, setSizes, "42")}
        />
        45
      </label>

      <label>
        <input
          type="checkbox"
          value="46"
          checked={sizes.includes("46")}
          onChange={() => toggleFilter(sizes, setSizes, "42")}
        />
        46
      </label>
    </div>
  );
};
export default ShoeSizeFilter;
