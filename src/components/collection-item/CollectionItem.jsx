import React from "react";
import "./collectionItem.css";

function CollectionItem(props) {
  const { name, imageUrl, price } = props;
  return (
    <div className="collection-item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }}>
        <span className="add-to-cart">Add to Cart</span>
      </div>
      <div className="col-btn">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default CollectionItem;
