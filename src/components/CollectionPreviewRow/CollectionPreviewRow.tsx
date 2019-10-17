import React from "react";
import ProductPreview from "../ProductPreview";
import "./CollectionPreviewRow.scss";

interface CollectionPreviewRowProps {
  collection: {
    id: number;
    title: string;
    routeName: string;
    items: { id: number; name: string; imageUrl: string; price: number }[];
  };
}

const CollectionPreviewRow: React.FC<CollectionPreviewRowProps> = ({
  collection
}): JSX.Element => {
  return (
    <div className="collection-preview-row">
      <h1 className="collection-preview-row__title">
        {collection.title.toUpperCase()}
      </h1>
      <div className="collection-preview-row__items">
        {collection.items
          .filter((_: any, idx: any) => idx < 4)
          .map((item: any, id: any) => (
            <ProductPreview key={id} {...item} />
            // <div>hello</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreviewRow;
