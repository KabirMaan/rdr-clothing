import React from "react";
import {
  clearItemFromCart,
  removeItem,
  addItem,
  CartItem
} from "../../../redux/cart/cartActions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import "./CheckoutItem.scss";

interface CheckoutItemProps {
  cartItem: CartItem;
  clearItemFromCart: typeof clearItemFromCart;
  addItem: typeof addItem;
  removeItem: typeof removeItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem,
  clearItemFromCart,
  addItem,
  removeItem
}): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItemFromCart: (item: CartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
