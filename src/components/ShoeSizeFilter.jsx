import React from "react";

const ShoeSizeFilter = ({ toggleFilter, sizes, setSizes }) => {
  const shoeSize = [
    { value: "36", label: "36" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
    { value: "39", label: "39" },
    { value: "40", label: "40" },
    { value: "41", label: "41" },
    { value: "42", label: "42" },
    { value: "43", label: "43" },
    { value: "44", label: "44" },
    { value: "45", label: "45" },
    { value: "46", label: "46" },
  ];
  return (
    <div className="flex flex-col mx-8">
      <h3 className="text-[#33a4b7]	font-display	text-base font-semibold pt-4">
        Schoenmaat
      </h3>
      {shoeSize.map((size) => (
        <label key={size.value}>
          <input
            type="checkbox"
            value={size.value}
            checked={sizes.includes(size.value)}
            onChange={() => toggleFilter(sizes, setSizes, size.value)}
            className="accent-[#33a4b7] font-display"
          />
          {size.label}
        </label>
      ))}
    </div>
  );
};
export default ShoeSizeFilter;
