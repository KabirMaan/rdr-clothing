import React from "react";
import CustomButton from "../CustomButton";
import "./CartPreview.scss";
import { connect } from "react-redux";
import Product from "../Product";
import {
  cartItem,
  toggleCartHidden
} from "../../redux/actions/cart/cartActions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/actions/cart/cartSelectors";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface CartPreviewProps extends RouteComponentProps {
  cartItems: cartItem[];
}

const CartPreview: React.FC<CartPreviewProps> = ({
  cartItems,
  history,
  dispatch
}: any): JSX.Element => {
  console.log(cartItems);
  return (
    <div className="cart-preview">
      <div className="cart-items">
        {/* {cartItems.map((cartItem: any) => (
          <Product key={cartItem.id} item={cartItem}></Product>
        ))} */}
        {cartItems.length ? (
          cartItems.map((cartItem: any) => (
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
