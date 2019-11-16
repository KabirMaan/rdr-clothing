import { CartActionTypes } from "./cartTypes";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

export interface ToggleCartHiddenAction {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

export interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: CartItem;
}

export interface RemoveItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: CartItem;
}

export interface ClearItemFromCartAction {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: CartItem;
}

export interface ClearCartAction {
  type: CartActionTypes.CLEAR_CART;
}

export const toggleCartHidden = (): ToggleCartHiddenAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: CartItem): AddItemAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item: CartItem): RemoveItemAction => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: CartItem): ClearItemFromCartAction => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = (): ClearCartAction => ({
  type: CartActionTypes.CLEAR_CART
});
