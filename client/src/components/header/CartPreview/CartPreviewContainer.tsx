import React from "react";

import { connect } from "react-redux";

import { CartItem, toggleCartHidden } from "../../../redux/cart/cartActions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../../redux/cart/cartSelectors";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";
import CartPreview from "./CartPreview";

export interface CartPreviewContainerProps extends RouteComponentProps {
  cartItems: CartItem[];
  dispatch: Dispatch;
}

const CartPreviewContainer: React.FC<CartPreviewContainerProps> = ({
  cartItems,
  history,
  dispatch
}): JSX.Element => {
  const onCheckoutButtonClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };
  return (
    <CartPreview
      cartItems={cartItems}
      onCheckoutButtonClick={onCheckoutButtonClick}
    ></CartPreview>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartPreviewContainer));
