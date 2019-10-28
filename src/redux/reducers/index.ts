import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
