import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-in">SignIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
