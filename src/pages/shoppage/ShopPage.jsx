import React from "react";
import "./shopPage.css";
import SHOP_DATA from "../../shopData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

function ShopPage() {
  return (
    <div className="shop-page">
      {SHOP_DATA.map((col) => (
        <PreviewCollection key={col.id} {...col} />
      ))}
    </div>
  );
}

export default ShopPage;
