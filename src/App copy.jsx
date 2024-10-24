import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const [filters, setFilters] = useState({
    size: "39",
    width: "E",
    color: "multiple colors",
  });

  const [shoes, setShoes] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to the Socket.IO server (ensure the URL is correct)
    const newSocket = io("http://localhost:3000"); // Your backend server address
    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      // Listen for incoming shoe results
      socket.on("shoeResult", (shoe) => {
        setShoes((prevShoes) => [...prevShoes, shoe]);
      });

      // Listen for any error messages
      socket.on("error", (message) => {
        console.error(message);
      });
    }
  }, [socket]);

  const handleSearch = () => {
    // Emit the search event with filters
    socket.emit("searchShoes", filters);

    // Clear previous results
    setShoes([]);
  };

  return (
    <div className="App">
      <div className="filters">
        <h3>Filteren</h3>
        <label>
          Schoenmaat:
          <select
            value={filters.size}
            onChange={(e) => setFilters({ ...filters, size: e.target.value })}
          >
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
          </select>
        </label>
        <label>
          Wijdtemaat:
          <select
            value={filters.width}
            onChange={(e) => setFilters({ ...filters, width: e.target.value })}
          >
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </label>
        <label>
          Kleur:
          <select
            value={filters.color}
            onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          >
            <option value="black">Zwart</option>
            <option value="brown">Bruin</option>
            <option value="multiple colors">Meerdere kleuren</option>
          </select>
        </label>
        <button onClick={handleSearch}>Zoeken</button>
      </div>

      <div className="results">
        <h3>Resultaten</h3>
        <div className="shoe-list">
          {shoes.map((shoe, index) => (
            <div key={index} className="shoe-item">
              <img src={shoe.image} alt={shoe.name} />
              <p>{shoe.name}</p>
              <p>Prijs: {shoe.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
