import React from "react";
import "./CollectionPreviewRow.scss";
import ProductPreview from "../ProductPreview";

const CollectionPreviewRow: React.FC<CollectionPreviewRowProps> = ({
  collection
}): JSX.Element => {
  /* eslint-disable import/first */
  const filteredItems = collection.items
    .filter((_, idx) => idx < 4)
    .map((item, id) => <ProductPreview key={id} {...item} />);
  return (
    <div className="collection-preview-row">
      <h1 className="collection-preview-row__title">
        {collection.title.toUpperCase()}
      </h1>
      <div className="collection-preview-row__items">{filteredItems}</div>
    </div>
  );
};

interface CollectionPreviewRowProps {
  collection: {
    id: number;
    title: string;
    routeName: string;
    items: { id: number; name: string; imageUrl: string; price: number }[];
  };
}

export default CollectionPreviewRow;
