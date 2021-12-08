import React, { useState } from "react";
import "./app.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import SHOP_DATA from "./shopData";

function App() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
