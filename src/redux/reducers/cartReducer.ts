import CartActionTypes from "../actions/cart/cartTypes";
import { cartItem } from "../actions/cart/cartActions";
import { addItemToCart } from "../actions/cart/cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};
interface CartState {
  hidden: boolean;
  cartItems: cartItem[];
}
const cartReducer = (state: CartState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
