import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../../redux/currentUserSlice";
import cart from "../../assets/shopping-cart.svg";

function Header() {
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

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
          {currentUser.username ? (
            <div className="signedIn-container">
              <li
                className="nav-item"
                onClick={() => dispatch(clearCurrentUser())}
              >
                <Link to="#">Sign out</Link>
              </li>
              <img src={cart} alt="shopping-cart" className="shopping-icon" />
              <span className="item-count">5</span>
            </div>
          ) : (
            <li className="nav-item">
              <Link to="/sign-in">SignIn</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Header;
