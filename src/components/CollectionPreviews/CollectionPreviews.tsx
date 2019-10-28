import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreviewRow from "../CollectionPreviewRow";
//const CollectionPreviewRow = lazy(() => import("../CollectionPreviewRow"));

import "./CollectionPreviews.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/actions/shop/shopSelectors";

interface CollectionPreviewsProps {
  // collections: any;
  collections: {
    id: number;
    title: string;
    routeName: string;
    items: { id: number; name: string; imageUrl: string; price: number }[];
  }[];
}
interface CollectionPreviewsState {}

class CollectionPreviews extends Component<
  CollectionPreviewsProps,
  CollectionPreviewsState
> {
  
  render() {
    const collectionPreviews = this.props.collections.map((collection:any, id:any) => {
      return <CollectionPreviewRow key={id} collection={collection} />;
    });
    return <div>{collectionPreviews}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionPreviews);
