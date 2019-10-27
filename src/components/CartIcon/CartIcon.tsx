import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon: React.FC = (): JSX.Element => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="cart-icon__svg" />
      <span className="cart-icon__count">0</span>
    </div>
  );
};

export default CartIcon;
