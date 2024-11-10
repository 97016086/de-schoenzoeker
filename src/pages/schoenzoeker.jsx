import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BrandFilter from "../components/BrandFilter";
import TypeFilter from "../components/typefilter";
import ShoeSizeFilter from "../components/ShoeSizeFilter";
import WidthFilter from "../components/widthfilter";
import ColorFilter from "../components/ColorFilter";
import ShoeResults from "../components/shoeresult";
import { IoIosSearch } from "react-icons/io";

const ShoeSearch = () => {
  const [query, setQuery] = useState("");
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [widths, setWidths] = useState([]);
  const [colors, setColors] = useState([]);
  const [results, setResults] = useState([]);
  const [isSent, setIsSent] = useState(false);

  const toggleFilter = (filter, setFilter, value) => {
    setFilter((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSearch = async () => {
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    const CX_ID = process.env.REACT_APP_GOOGLE_CX_ID;

    let fullQuery = query;
    if (brands) fullQuery += `${brands.map((brand) => `"${brand}"`).join("")}`;
    if (types) fullQuery += `${types.map((types) => `"${types}"`).join("")}`;
    if (sizes) fullQuery += `${sizes.map((sizes) => `" ${sizes}"`).join("")}`;
    if (widths)
      fullQuery += `${widths.map((widths) => `"${widths}"`).join("")}`;
    if (colors)
      fullQuery += `${colors.map((colors) => `"${colors}"`).join("")}`;

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        fullQuery
      )}&key=${API_KEY}&cx=${CX_ID}`
    );

    const data = await response.json();
    setResults(data.items || []);
  };

  return (
    <div>
      <Navbar />
      <div className="	bg-[#fafcf8] flex min-h-screen">
        <div className="min-w-56 md:min-w-72 lg:min-w-96 bg-[#91ca6b] max-h-full overflow-auto ">
          <div className="relative py-2 "></div>
          <input
            type="text"
            placeholder="zoeken"
            className="bg-[#46762675] rounded text-white outline-none  px-1 m-4 md:mx-8"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
                setIsSent(true);
              }
            }}
          ></input>
          <IoIosSearch
            onClick={handleSearch}
            className="absolute  mx-44  md:mx-48 cursor-pointer text-white"
          />

          <BrandFilter
            brands={brands}
            setBrands={setBrands}
            toggleFilter={toggleFilter}
          />
          <TypeFilter
            types={types}
            setTypes={setTypes}
            toggleFilter={toggleFilter}
          />
          <ShoeSizeFilter
            sizes={sizes}
            setSizes={setSizes}
            toggleFilter={toggleFilter}
          />
          <WidthFilter
            widths={widths}
            setWidths={setWidths}
            toggleFilter={toggleFilter}
          />
          <ColorFilter
            colors={colors}
            setColors={setColors}
            toggleFilter={toggleFilter}
          />
          <button
            onClick={handleSearch}
            className=" rounded bg-[#a5d4c9] w-16 h-8 m-4"
          >
            Zoeken
          </button>
        </div>
        <div className="text-center">
          <p className="font-display">
            <span className="font-semibold font-display">Let op!</span> Niet
            alle merken die weergegeven worden op deze website hebben alle
            wijdtematen.
          </p>
          <ShoeResults shoes={results} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoeSearch;
