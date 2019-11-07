import React from "react";
import { connect } from "react-redux";

import "./CollectionPage.scss";
import ProductPreview from "../../components/shared/ProductPreview";
import { selectCollection } from "../../redux/shop/shopSelectors";

const CollectionPage = ({ collection }: any) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <ProductPreview key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
