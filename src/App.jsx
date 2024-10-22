import React from "react";
import Home from "../src/pages/homepage";
import OverOns from "../src/pages/over ons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Over-ons" element={<OverOns />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
