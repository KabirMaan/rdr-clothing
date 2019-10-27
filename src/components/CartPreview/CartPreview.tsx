import React from "react";
import CustomButton from "../CustomButton";
import "./CartPreview.scss";

const CartPreview: React.FC = (): JSX.Element => {
  return (
    <div className="cart-preview">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartPreview;
