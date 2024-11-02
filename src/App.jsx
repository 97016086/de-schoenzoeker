import React from "react";
import Home from "./pages/homepage";
import OverOns from "./pages/over ons";
import Schoenzoeker from "./pages/schoenzoeker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Over-ons" element={<OverOns />} />
          <Route path="/De-SchoenZoeker" element={<Schoenzoeker />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
