import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { currentUser } from "../actions/user/userActions";
import cartReducer from "./cartReducer";

export interface StoreState {
  user: {
    currentUser: currentUser | null;
  };
  cart: {
    hidden: boolean;
  };
}

export default combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer
});
