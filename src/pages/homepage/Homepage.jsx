import React from "react";
import DirectoryMenu from "../../components/directory-menu/DirectoryMenu";
import "./homepage.css";

function Homepage(props) {
  return (
    <section className="home-container">
      <DirectoryMenu />
    </section>
  );
}

export default Homepage;
