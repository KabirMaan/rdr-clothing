import React from "react";
import {
    clearItemFromCart,
    removeItem,
    addItem,
    CartItem
} from "../../../redux/cart/cartActions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import "./CheckoutItem.scss";
import CheckoutItem from "./CheckoutItem";

interface CheckoutItemContainerProps {
    cartItem: CartItem;
    clearItemFromCart: typeof clearItemFromCart;
    addItem: typeof addItem;
    removeItem: typeof removeItem;
}

const CheckoutItemContainer: React.FC<CheckoutItemContainerProps> = ({
    cartItem,
    clearItemFromCart,
    addItem,
    removeItem
}): JSX.Element => {

    const onRemoveItemClick = () => {
        removeItem(cartItem)
    }

    const onAddItemClick = () => {
        addItem(cartItem)
    }

    const onClearItemClick = () => {
        clearItemFromCart(cartItem)
    }
    return (
        <CheckoutItem cartItem={cartItem} onRemoveItemClick={onRemoveItemClick} onAddItemClick={onAddItemClick} onClearItemClick={onClearItemClick} />
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearItemFromCart: (item: CartItem) => dispatch(clearItemFromCart(item)),
    addItem: (item: CartItem) => dispatch(addItem(item)),
    removeItem: (item: CartItem) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItemContainer);
