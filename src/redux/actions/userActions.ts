import { UserActionTypes } from "./userTypes";

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
  type: UserActionTypes.SET_CURRENT_USER;
  payload: currentUser | null;
}

export const setCurrentUser = (
  currentUser: currentUser | null
): SetCurrentUserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: currentUser
});
