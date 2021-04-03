import React from "react";

import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(ShopPage);
