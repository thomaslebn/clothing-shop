import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const collections = SHOP_DATA;

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

export default ShopPage;
