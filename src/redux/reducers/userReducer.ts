import { UserActionTypes } from "../actions/userTypes";
import { currentUser, setCurrentUserAction } from "../actions/userActions";

const INITIAL_STATE = {
  currentUser: null
};

interface UserState {
  currentUser: currentUser | null;
}

const userReducer = (
  state: UserState = INITIAL_STATE,
  action: setCurrentUserAction
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      console.log(action);
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
