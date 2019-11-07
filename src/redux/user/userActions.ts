import UserActionTypes from "./userTypes";

export interface currentUser {
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  displayName?: string;
  email: string;
}

export interface SetCurrentUserAction {
  type: any;
  payload: currentUser | null;
}

export const setCurrentUser = (
  currentUser: currentUser | null
): SetCurrentUserAction => {
  console.log(UserActionTypes);
  console.log(UserActionTypes.SET_CURRENT_USER);
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: currentUser
  };
};
