import React, { useState, useEffect } from "react";

const ShoeResults = ({ shoes }) => {
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (shoes) setSearched(true);
  }, [shoes]);

  if (searched && (!shoes || shoes.length === 0)) {
    return (
      <p className="text-red-600 font-display font-medium mx-20 mt-10 text-center">
        Geen resultaten
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-row flex-wrap gap-6 mt-14 justify-center	px-4">
        {shoes.map((shoe, index) => (
          <a
            key={index}
            href={shoe.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline  bg-inherit w-40	p-2	hover:shadow-lg	transition-shadow duration-300"
          >
            {shoe.pagemap?.cse_image && shoe.pagemap.cse_image.length > 0 ? (
              <img
                src={shoe.pagemap.cse_image[0].src}
                alt={shoe.title}
                className="w-full h-32 object-cover	"
              />
            ) : (
              <div className="w-full	h-32	bg-gray-200	flex	items-center	justify-center	">
                <span className="text-gray-500	text-sm">Geen Afbeelding</span>
              </div>
            )}
            <h3 className="max-w-32 ml-4">{shoe.title}</h3>
          </a>
        ))}
      </div>
    </>
  );
};

export default ShoeResults;
