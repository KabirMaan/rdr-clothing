import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { currentUser } from "../actions/user/userActions";
import cartReducer from "./cartReducer";
import { cartItem } from "../actions/cart/cartActions";

export interface StoreState {
  user: {
    currentUser: currentUser | null;
  };
  cart: {
    hidden: boolean;
    cartItems: cartItem[];
  };
}

export default combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer
});
