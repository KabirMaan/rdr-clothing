import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import "./CartIcon.scss";
interface CartIconProps {
  toggleCartHidden: (event: React.MouseEvent<HTMLDivElement>) => void;
  itemCount?: number;
}

const CartIcon: React.FC<CartIconProps> = ({
  toggleCartHidden,
  itemCount
}): JSX.Element => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="cart-icon__svg" />
      <span className="cart-icon__count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
