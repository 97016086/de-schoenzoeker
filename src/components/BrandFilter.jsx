import React from "react";

const BrandFilter = ({ toggleFilter, brands, setBrands }) => {
  const shoeBrands = [
    { value: "ara", label: "Ara" },
    { value: "christiandietz", label: "Christian Dietz" },
    { value: "crockett-jones", label: "Crockett	&	Jones" },
    { value: "durea", label: "Durea" },
    { value: "florisvanbommel", label: "Floris	van	Bommel" },
    { value: "footnotes", label: "Footnotes" },
    { value: "gabor", label: "Gabor" },
    { value: "hartjes", label: "Hartjes" },
    { value: "hassia", label: "Hassia" },
    { value: "magnanni", label: "Magnanni" },
    { value: "mephisto", label: "Mephisto" },
    { value: "muoviti", label: "Muoviti" },
    { value: "piedinudi", label: "Piedi	Nudi" },
    { value: "rieker", label: "Rieker" },
    { value: "santoni", label: "Santoni" },
    { value: "sioux", label: "Sioux" },
    { value: "solidus", label: "Solidus" },
    { value: "vanbommel", label: "Van Bommel" },
    { value: "verschuren", label: "Verschuren" },
    { value: "waldläufer", label: "Waldläufer" },
    { value: "xsensible stretchwalker", label: "Xsensible Stretchwalker" },
  ];
  return (
    <div className=" flex	flex-col mx-8">
      <h3 className="font-display  text-[#33a4b7] text-base font-semibold pt-4">
        Merk
      </h3>
      {shoeBrands.map((brand) => (
        <label key={brand.value}>
          <input
            type="checkbox"
            value={brand.value}
            checked={brands.includes(brand.value)}
            onChange={() => toggleFilter(brands, setBrands, brand.value)}
            className="font-display accent-[#33a4b7] 	"
          />
          {brand.label}
        </label>
      ))}
    </div>
  );
};

export default BrandFilter;
