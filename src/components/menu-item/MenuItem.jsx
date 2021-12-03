import React from "react";
import { useNavigate } from "react-router-dom";
import "./menuItem.css";

function MenuItem(props) {
  const navigate = useNavigate();

  const { title, imageUrl, size } = props;

  return (
    <section className={`menu-item ${size}`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="menu-bg">
        <div className="content" onClick={() => navigate(`${title}`)}>
          <h1 className="title">{title}</h1>
          <span className="subTitle">Shop Now</span>
        </div>
      </div>
    </section>
  );
}

export default MenuItem;
