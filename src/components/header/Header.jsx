import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../../redux/currentUserSlice";
import cart from "../../assets/shopping-cart.svg";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { store } from "../../redux/store";
import { toggleDropdown } from "../../redux/cartDropdownSlice";

function Header() {
  console.log(store.getState());
  const currentUser = useSelector((state) => state.currentUser);
  const cartDropdown = useSelector((state) => state.cartDropdown);
  const items = useSelector((state) => state.items);

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
              <div
                className="dropdown"
                onClick={() => dispatch(toggleDropdown())}
              >
                <img src={cart} alt="shopping-cart" className="shopping-icon" />
                <span className="item-count">
                  {items.length > 0 && items.length}
                </span>
              </div>
            </div>
          ) : (
            <li className="nav-item">
              <Link to="/sign-in">SignIn</Link>
            </li>
          )}
        </ul>
      </div>
      {cartDropdown && <CartDropdown />}
    </div>
  );
}
export default Header;
