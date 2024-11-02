import React from "react";

const ShoeResults = ({ shoes }) => {
  console.log("Shoe results:", shoes);
  return (
    <div>
      <h2>Resultaat:</h2>
      <ul>
        {shoes.map((shoe, index) => (
          <li key={index}>
            Naam: {shoe.name} - Maat: {shoe.size} Soort: {shoe.type} Wijdte:
            {shoe.width} Kleur:
            {shoe.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeResults;
