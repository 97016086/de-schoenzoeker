import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const ShoeSearch = () => {
  const [SelectedSizes, setSelectedSizes] = useState([]);
  const [SelectedTypes, setSelectedType] = useState([]);
  const [SelectedWidths, setSelectedWidth] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [filters, setFilters] = useState({
    size: "",
    type: "",
    width: "",
    color: "",
  });
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    //Initialize Socket.IO client connection when the compnonent mounts
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    //Cleanup on unmount
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      //listening for shoe result from the server
      socket.on("shoeResult", (shoe) => {
        setShoes((prevShoes) => [...prevShoes, shoe]);
      });

      //Optionally listen for errors or other events
      socket.on("error", (message) => {
        console.error("Eroor:", message);
      });
    }
  }, [socket]);

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(value)
        ? prevSizes.filter((size) => size !== value)
        : [...prevSizes, value]
    );
  };

  //Handle changes to the type checkboxes
  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedType((prevTypes) =>
      prevTypes.includes(value)
        ? prevTypes.filter((type) => type !== value)
        : [...prevTypes, value]
    );
  };

  const handleWidthChange = (event) => {
    const value = event.target.value;
    setSelectedWidth((prevWidth) =>
      prevWidth.includes(value)
        ? prevWidth.filter((width) => width !== value)
        : [...prevWidth, value]
    );
  };
  //Handle changes to the color checkboxes
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
      sizes: SelectedSizes,
      type: SelectedTypes,
      width: SelectedWidths,
      colors: selectedColors,
    };

    socket.emit("searchShoes", filters);

    //Clear old results
    setShoes([]);
  };

  return (
    <div>
      <h1>Shoenenzoeker</h1>

			{/*Size	Filter*/}
			<ShoeSizeFilter	SelectedSizes={SelectedSizes}	handleSizeChange={handleSizeChange}
    </div>
  );
};

export default ShoeSearch;
