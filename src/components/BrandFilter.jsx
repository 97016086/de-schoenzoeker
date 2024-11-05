import React from "react";

const BrandFilter = ({ toggleFilter, brands, setBrands }) => {
  return (
    <div className="flex	flex-col">
      <h3>Merk</h3>

      <label>
        <input
          type="checkbox"
          value="gabor"
          checked={brands.includes("gabor")}
          onChange={() => toggleFilter(brands, setBrands, "gabor")}
        />
        Gabor
      </label>

      <label>
        <input
          type="checkbox"
          value="rieker"
          checked={brands.includes("rieker")}
          onChange={() => toggleFilter(brands, setBrands, "rieker")}
        />
        Rieker
      </label>
      <label>
        <input
          type="checkbox"
          value="durea"
          checked={brands.includes("durea")}
          onChange={() => toggleFilter(brands, setBrands, "durea")}
        />
        Durea
      </label>
    </div>
  );
};

export default BrandFilter;
