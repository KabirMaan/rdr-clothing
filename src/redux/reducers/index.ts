import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { currentUser } from "../actions/user/userActions";

export interface StoreState {
  user: {
    currentUser: currentUser | null;
  };
}

export default combineReducers<StoreState>({
  user: userReducer
});
