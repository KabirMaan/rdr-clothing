import { createSelector } from "reselect";
import { CartItem } from "./cartActions";

const selectCart = (state: any) => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity: number, cartItem: CartItem) =>
        accumalatedQuantity + (cartItem.quantity || 0),
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity: number, cartItem: CartItem) =>
      accumalatedQuantity + (cartItem.quantity || 0) * cartItem.price,
    0
  )
);
