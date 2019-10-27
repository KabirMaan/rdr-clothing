import React from "react";
import "./ProductPreview.scss";
import CustomButton from "../CustomButton";

interface ProductPreviewProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  name,
  price,
  imageUrl
}): JSX.Element => {
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
      <CustomButton invertedColors>Add To Cart</CustomButton>
    </div>
  );
};

export default ProductPreview;
