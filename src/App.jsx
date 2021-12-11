import React from "react";
import "./app.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignIn from "./components/sign-in/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
