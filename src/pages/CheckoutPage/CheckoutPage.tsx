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
import StripeCheckoutButton from "../../components/StripeButton";

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
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
