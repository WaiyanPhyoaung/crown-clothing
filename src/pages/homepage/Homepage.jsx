import React from "react";
import MenuItem from "../../components/menu-item/MenuItem";
import "./homepage.css";

function Homepage() {
  return (
    <section className="home-container">
      <div className="directory-menu">
        <MenuItem title="Hats" subtitle="Shop Now" />
        <MenuItem title="Jackets" subtitle="Shop Now" />
        <MenuItem title="Mens'" subtitle="Shop Now" />
        <MenuItem title="Womens'" subtitle="Shop Now" />
        <MenuItem title="Womens'" subtitle="Shop Now" />
      </div>
    </section>
  );
}

export default Homepage;
