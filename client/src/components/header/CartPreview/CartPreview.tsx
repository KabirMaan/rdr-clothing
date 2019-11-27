import React from "react";
import CustomButton from "../../shared/CustomButton";
import "./CartPreview.scss";
import Product from "../Product";
import { CartItem } from "../../../redux/cart/cartActions";

export interface CartPreviewProps {
  cartItems: CartItem[];
  onCheckoutButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CartPreview: React.FC<CartPreviewProps> = ({
  cartItems,
  onCheckoutButtonClick
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
      <CustomButton onClick={onCheckoutButtonClick}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartPreview;
