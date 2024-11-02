import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TypeFilter from "../components/typefilter";
import ShoeSizeFilter from "../components/ShoeSizeFilter";
import WidthFilter from "../components/widthfilter";
import ColorFilter from "../components/ColorFilter";
import ShoeResults from "../components/shoeresult";

const ShoeSearch = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedWidths, setSelectedWidths] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [socket, setSocket] = useState(null);

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(value)
        ? prevTypes.filter((type) => type !== value)
        : [...prevTypes, value]
    );
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(value)
        ? prevSizes.filter((size) => size !== value)
        : [...prevSizes, value]
    );
  };

  const handleWidthChange = (event) => {
    const value = event.target.value;
    setSelectedWidths((prevWidths) =>
      prevWidths.includes(value)
        ? prevWidths.filter((widths) => widths !== value)
        : [...prevWidths, value]
    );
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    setSelectedColors((prevColors) =>
      prevColors.includes(value)
        ? prevColors.filter((color) => color !== value)
        : [...prevColors, value]
    );
  };

  const handleSearch = () => {
    const filters = {
      sizes: selectedSizes,
      types: selectedTypes,
      width: selectedWidths,
      colors: selectedColors,
    };

    console.log("Sending filters:", filters);

    socket.emit("searchShoes", filters);
    setShoes([]);
  };

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("shoeResult", (shoe) => {
        console.log("Shoe result received:", shoe);
        setShoes((prevShoes) => [...prevShoes, shoe]);
      });
    }
  }, [socket]);

  return (
    <div className="bg-[#fafcf8]	">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <h1>Shoe Search</h1>
        <TypeFilter
          selectedTypes={selectedTypes}
          handleTypeChange={handleTypeChange}
        />
        <ShoeSizeFilter
          selectedSizes={selectedSizes}
          handleSizeChange={handleSizeChange}
        />

        <WidthFilter
          selectedWidths={selectedWidths}
          handleWidthChange={handleWidthChange}
        />
        <ColorFilter
          selectedColors={selectedColors}
          handleColorChange={handleColorChange}
        />
        <button
          onClick={handleSearch}
          className="rounded bg-[#a5d4c9] w-16 h-8"
        ></button>
        <ShoeResults shoes={shoes} />
      </div>
      <Footer />
    </div>
  );
};

export default ShoeSearch;
