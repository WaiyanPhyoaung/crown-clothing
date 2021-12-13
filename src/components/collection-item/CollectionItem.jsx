import React from "react";
import "./collectionItem.css";
import { useDispatch } from "react-redux";
import { setItem } from "../../redux/itemSlice";

function CollectionItem(props) {
  const { name, imageUrl, price } = props;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }}>
        <span className="add-to-cart" onClick={() => dispatch(setItem(props))}>
          Add to Cart
        </span>
      </div>
      <div className="col-btn">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default CollectionItem;
