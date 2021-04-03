import React from "react";

import "./collections-overview.scss";

import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(CollectionsOverview);
