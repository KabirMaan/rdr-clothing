import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Product from "../../components/Product";

import "./CheckoutPage.scss";
import {
  selectCartTotal,
  selectCartItems
} from "../../redux/actions/cart/cartSelectors";
import CartIcon from "../../components/CartIcon";
import CheckoutItem from "../../components/CheckoutItem";

const CheckoutPage = ({ cartItems, total }: any) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem: any) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
