import React from "react";
import CustomButton from "../../shared/CustomButton";
import "./CartPreview.scss";
import { connect } from "react-redux";
import Product from "../Product";
import { CartItem, toggleCartHidden } from "../../../redux/cart/cartActions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../../redux/cart/cartSelectors";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";

interface CartPreviewProps extends RouteComponentProps {
  cartItems: CartItem[];
  dispatch: Dispatch;
}

const CartPreview: React.FC<CartPreviewProps> = ({
  cartItems,
  history,
  dispatch
}): JSX.Element => {
  return (
    <div className="cart-preview">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem: CartItem) => (
            <Product key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cart-items__empty">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartPreview));
