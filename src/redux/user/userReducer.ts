import { currentUser } from "./userActions";
import { UserActionTypes, UserAction } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null
};

interface UserState {
  currentUser: currentUser | null;
}

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      console.log(action);
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
