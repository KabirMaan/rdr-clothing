import { UserActionTypes, currentUser, UserAction } from "../actions";

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
    default:
      return state;
  }
};

export default userReducer;
