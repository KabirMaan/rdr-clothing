import CartActionTypes from "./cartTypes";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: cartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem =(item: cartItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: cartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export interface cartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}
