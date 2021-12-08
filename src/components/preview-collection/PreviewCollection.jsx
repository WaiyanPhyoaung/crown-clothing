import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./previewCollection.css";

function PreviewCollection({ title, items }) {
  return (
    <div className="preview-collection">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
