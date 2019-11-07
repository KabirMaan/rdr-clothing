import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { currentUser } from "./user/userActions";
import { cartItem } from "./cart/cartActions";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

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
