import React from "react";
import "./menuItem.css";

function MenuItem(props) {
  const { title, subtitle } = props;

  return (
    <section className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subTitle">{subtitle}</span>
      </div>
    </section>
  );
}

export default MenuItem;
