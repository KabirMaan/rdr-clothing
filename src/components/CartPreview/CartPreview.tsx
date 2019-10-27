import React from "react";
import CustomButton from "../CustomButton";
import "./CartPreview.scss";
import { connect } from "react-redux";
import Product from "../Product";
import { StoreState } from "../../redux/reducers";
import { cartItem } from "../../redux/actions/cart/cartActions";

interface CartPreviewProps {
  cartItems: cartItem[];
}

const CartPreview: React.FC<CartPreviewProps> = ({
  cartItems
}: any): JSX.Element => {
  console.log(cartItems);
  return (
    <div className="cart-preview">
      <div className="cart-items">
        {cartItems.map((cartItem: any) => (
          <Product key={cartItem.id} item={cartItem}></Product>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartPreview);
