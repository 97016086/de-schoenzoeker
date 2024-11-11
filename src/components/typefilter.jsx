import React from "react";

const TypeFilter = ({ toggleFilter, types, setTypes }) => {
  const shoeTypes = [
    { value: "sneakers", label: "Sneakers" },
    { value: "sandals", label: "Sandalen" },
    { value: "ankle boots", label: "Enkellaarzen" },
    { value: "boots", label: "Laarzen" },
    { value: "lace-up	shoes", label: "Veterschoenen" },
    { value: "loafers", label: "Loafers" },
    { value: "high heels", label: "Hakken" },
  ];
  return (
    <div className="flex flex-col mx-8">
      <h3 className="text-[#33a4b7]	font-display	text-base font-semibold	pt-4">
        Type schoen
      </h3>
      {shoeTypes.map((type) => (
        <label key={type.value}>
          <input
            type="checkbox"
            value={type.value}
            checked={types.includes(type.value)}
            onChange={() => toggleFilter(types, setTypes, type.value)}
            className="accent-[#33a4b7] font-display"
          />
          {type.label}
        </label>
      ))}
    </div>
  );
};

export default TypeFilter;
