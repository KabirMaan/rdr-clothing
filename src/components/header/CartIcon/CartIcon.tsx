import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cartActions";
import { Dispatch } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cartSelectors";
import "./CartIcon.scss";
interface CartIconProps {
  toggleCartHidden: typeof toggleCartHidden;
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
