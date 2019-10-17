import React, { Component } from "react";
import "./CollectionPreviews.scss";
import CollectionPreviewRow from "../CollectionPreviewRow";
import SHOP_DATA from "./shopData";

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
    return (
      <div>
        {this.state.collections.map(collection => {
          return <CollectionPreviewRow collection={collection} />;
        })}
      </div>
    );
  }
}

export default CollectionPreviews;
