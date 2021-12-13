import React from "react";
import "./cartDropdown.css";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="card-items"></div>
      <button className="dropdown-btn">go to checkout</button>
    </div>
  );
}
export default CartDropdown;
