import React, { useState } from "react";
import "./shopPage.css";
import SHOP_DATA from "../../shopData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map((col) => (
        <PreviewCollection key={col.id} {...col} />
      ))}
    </div>
  );
}

export default ShopPage;
