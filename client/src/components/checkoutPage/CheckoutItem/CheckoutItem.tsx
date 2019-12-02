import React from "react";
import {
  CartItem
} from "../../../redux/cart/cartActions";

import "./CheckoutItem.scss";

interface CheckoutItemProps {
  cartItem: CartItem;
  onClearItemClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onAddItemClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onRemoveItemClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem,
  onClearItemClick,
  onAddItemClick,
  onRemoveItemClick
}): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={onRemoveItemClick}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={onAddItemClick}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={onClearItemClick}
      >
        &#10005;
      </div>
    </div>
  );
};


export default CheckoutItem
