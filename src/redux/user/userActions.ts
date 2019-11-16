import { UserActionTypes } from "./userTypes";
import { User } from "firebase";

export interface currentUser {
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  displayName?: string;
  email: string;
}

export interface EmailSignInCredentials {
  email: string;
  password: string;
}

export interface SignUpUserObject {
  user: User;
  additionalData: {
    displayName?: string;
  };
}

export interface SignUpUserCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface SetCurrentUserAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: currentUser | null;
}

export interface GoogleSignInStartAction {
  type: UserActionTypes.GOOGLE_SIGN_IN_START;
}

export const setCurrentUser = (
  currentUser: currentUser | null
): SetCurrentUserAction => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: currentUser
  };
};

export const googleSignInStart = (): GoogleSignInStartAction => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export interface SignInSuccessAction {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: currentUser;
}

export const signInSuccess = (user: currentUser): SignInSuccessAction => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export interface SignInFailureAction {
  type: UserActionTypes.SIGN_IN_FAILURE;
  payload: Error;
}

export const signInFailure = (error: Error): SignInFailureAction => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export interface EmailSignInStartAction {
  type: UserActionTypes.EMAIL_SIGN_IN_START;
  payload: EmailSignInCredentials;
}

export const emailSignInStart = (
  emailAndPassword: EmailSignInCredentials
): EmailSignInStartAction => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export interface CheckUserSessionAction {
  type: UserActionTypes.CHECK_USER_SESSION;
}

export const checkUserSession = (): CheckUserSessionAction => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export interface SignOutStartAction {
  type: UserActionTypes.SIGN_OUT_START;
}

export const signOutStart = (): SignOutStartAction => ({
  type: UserActionTypes.SIGN_OUT_START
});

export interface SignOutSuccessAction {
  type: UserActionTypes.SIGN_OUT_SUCCESS;
}

export const signOutSuccess = (): SignOutSuccessAction => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export interface SignOutFailureAction {
  type: UserActionTypes.SIGN_OUT_FAILURE;
  payload: Error;
}

export const signOutFailure = (error: Error): SignOutFailureAction => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export interface SignUpStartAction {
  type: UserActionTypes.SIGN_UP_START;
  payload: SignUpUserCredentials;
}

export const signUpStart = (
  userCredentials: SignUpUserCredentials
): SignUpStartAction => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export interface SignUpSucessAction {
  type: UserActionTypes.SIGN_UP_SUCCESS;
  payload: SignUpUserObject;
}

export const signUpSuccess = (
  userObj: SignUpUserObject
): SignUpSucessAction => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user: userObj.user, additionalData: userObj.additionalData }
});

export interface SignUpFailureAction {
  type: UserActionTypes.SIGN_UP_FAILURE;
  payload: Error;
}

export const signUpFailure = (error: Error): SignUpFailureAction => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
