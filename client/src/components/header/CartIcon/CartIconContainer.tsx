import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cartActions";
import { Dispatch } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cartSelectors";
import CartIcon from "./CartIcon";

interface CartIconContainerProps {
  toggleCartHidden: typeof toggleCartHidden;
  itemCount?: number;
}

const CartIconContainer: React.FC<CartIconContainerProps> = ({
  toggleCartHidden,
  itemCount
}): JSX.Element => {
  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIconContainer);
