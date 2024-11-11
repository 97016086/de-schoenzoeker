import React from "react";

const WidthFilter = ({ toggleFilter, widths, setWidths }) => {
  const shoeWidths = [
    { value: "c", label: "C" },
    { value: "d", label: "D" },
    { value: "e", label: "E" },
    { value: "f", label: "F" },
    { value: "g", label: "G" },
    { value: "h", label: "H" },
    { value: "j", label: "J" },
    { value: "k", label: "K" },
  ];
  return (
    <div className="flex flex-col mx-8">
      <h3 className="text-[#33a4b7]	text-base font-semibold pt-4">Wijdte</h3>
      {shoeWidths.map((width) => (
        <label key={width.value}>
          <input
            type="checkbox"
            value={width.value}
            checked={widths.includes(width.value)}
            onChange={() => toggleFilter(widths, setWidths, width.value)}
            className="accent-[#33a4b7] font-display"
          />
          {width.label}
        </label>
      ))}
    </div>
  );
};

export default WidthFilter;
