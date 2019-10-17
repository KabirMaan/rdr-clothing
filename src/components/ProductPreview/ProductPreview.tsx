import React from "react";
import "./ProductPreview.scss";

interface ProductPreviewProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  name,
  price,
  imageUrl
}) => {
  return (
    <div className="product-preview">
      <div
        className="product-preview__image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="product-preview__footer">
        <div className="product-preview__name">{name}</div>
        <div className="product-preview__price">{price}</div>
      </div>
    </div>
  );
};

export default ProductPreview;
