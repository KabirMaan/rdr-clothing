import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cart/cartActions";
import { Dispatch } from "redux";

interface CartIconProps {
  toggleCartHidden: typeof toggleCartHidden;
}

const CartIcon: React.FC<CartIconProps> = ({
  toggleCartHidden
}): JSX.Element => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="cart-icon__svg" />
      <span className="cart-icon__count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
