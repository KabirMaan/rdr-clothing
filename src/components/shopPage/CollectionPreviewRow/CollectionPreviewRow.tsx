import React from "react";

import "./CollectionPreviewRow.scss";
import ProductPreview from "../../shared/ProductPreview";

const CollectionPreviewRow = ({ title, items }: any) => (
  <div className="collection-preview-row">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="collection-preview-row__items">
      {items
        .filter((item: any, idx: any) => idx < 4)
        .map((item: any) => (
          <ProductPreview key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreviewRow;
