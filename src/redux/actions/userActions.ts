import { userTypes } from "./userTypes";

export const setCurrentUser = (user: any) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
});
