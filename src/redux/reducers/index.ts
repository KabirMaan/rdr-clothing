import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import { currentUser } from "../actions/user/userActions";
import cartReducer from "./cartReducer";
import { cartItem } from "../actions/cart/cartActions";

import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";

export interface StoreState {
  user: {
    currentUser: currentUser | null;
  };
  cart: {
    hidden: boolean;
    cartItems: cartItem[];
  };
  directory: any;
  shop: any;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
