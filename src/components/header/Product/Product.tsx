import React from "react";
import "./Product.scss";
import { CartItem } from "../../../redux/cart/cartActions";

interface ProductProps {
  item: CartItem;
}

const Product: React.FC<ProductProps> = ({ item }): JSX.Element => {
  return (
    <div className="product">
      <img src={item.imageUrl} alt="item" />
      <div className="product__details">
        <span className="product__name">{item.name}</span>
        <span className="product__price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
};

export default Product;
