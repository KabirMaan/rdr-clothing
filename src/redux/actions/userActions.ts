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

export interface setCurrentUserAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: currentUser | null;
}

export const setCurrentUser = (
  currentUser: currentUser | null
): setCurrentUserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: currentUser
});
