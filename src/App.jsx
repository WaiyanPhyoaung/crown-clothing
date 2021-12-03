import React from "react";
import "./app.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HatPage from "./pages/hatpage/HatPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
