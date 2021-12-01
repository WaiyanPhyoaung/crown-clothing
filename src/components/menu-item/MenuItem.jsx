import React from "react";
import "./menuItem.css";

function MenuItem(props) {
  const { title, image, size } = props;

  return (
    <section className={`menu-item ${size}`}>
      <div style={{ backgroundImage: `url(${image})` }} className="background">
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subTitle">Shop Now</span>
        </div>
      </div>
    </section>
  );
}

export default MenuItem;
