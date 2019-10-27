import CartActionTypes from "./cartTypes";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: cartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export interface cartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}
