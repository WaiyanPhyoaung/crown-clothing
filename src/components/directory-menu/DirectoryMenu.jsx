import React from "react";

import { sections } from "../../data";
import MenuItem from "../menu-item/MenuItem";
import "./directoryMenu.css";

function DirectoryMenu() {
  return (
    <section className="directory-menu">
      {sections.map((data) => (
        <MenuItem key={data.id} {...data} />
      ))}
    </section>
  );
}
export default DirectoryMenu;
