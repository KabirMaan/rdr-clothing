import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreviewRow from "../CollectionPreviewRow";
//const CollectionPreviewRow = lazy(() => import("../CollectionPreviewRow"));

import "./CollectionPreviews.scss";

interface CollectionPreviewsProps {}
interface CollectionPreviewsState {
  collections: {
    id: number;
    title: string;
    routeName: string;
    items: { id: number; name: string; imageUrl: string; price: number }[];
  }[];
}

class CollectionPreviews extends Component<
  CollectionPreviewsProps,
  CollectionPreviewsState
> {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const collectionPreviews = this.state.collections.map(collection => {
      return <CollectionPreviewRow collection={collection} />;
    });
    return <div>{collectionPreviews}</div>;
  }
}

export default CollectionPreviews;
