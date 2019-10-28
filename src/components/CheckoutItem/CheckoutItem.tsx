import React from "react";

import "./CheckoutItem.scss";
import {
  clearItemFromCart,
  removeItem,
  addItem,
  cartItem
} from "../../redux/actions/cart/cartActions";
import { Dispatch } from "redux";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: any) => {
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
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: cartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: cartItem) => dispatch(addItem(item)),
  removeItem: (item: cartItem) => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
