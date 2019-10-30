import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreviewRow from "../CollectionPreviewRow";

import "./CollectionPreviews.scss";
import { selectCollectionsForPreview } from "../../redux/actions/shop/shopSelectors";

const CollectionPreviews = ({ collections }: any) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }: any) => (
      <CollectionPreviewRow key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionPreviews);
