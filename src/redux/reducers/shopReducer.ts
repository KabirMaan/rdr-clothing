import SHOP_DATA from "./shopData";
import ShopActionTypes from "../actions/shop/shopTypes";

const INITIAL_STATE = {
  collections: {}
};

const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
