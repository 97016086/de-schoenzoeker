import React from "react";
import Home from "./pages/homepage";
import OverOns from "./pages/over ons";
import Wijdtematen from "./pages/wijdtematen";
import Schoenzoeker from "./pages/schoenzoeker";
import SchoenSoort from "./pages/SchoenSoort";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/wijdtematen" element={<Wijdtematen />} />
          <Route path="/schoen-soort" element={<SchoenSoort />} />
          <Route path="/de-schoenzoeker" element={<Schoenzoeker />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
