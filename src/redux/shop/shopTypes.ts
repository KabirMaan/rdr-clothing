import {
  FetchCollectionsFailureAction,
  FetchCollectionsSuccessAction,
  FetchCollectionsStartAction
} from "./shopActions";

export enum ShopActionTypes {
  FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE"
}

export type ShopAction =
  | FetchCollectionsFailureAction
  | FetchCollectionsSuccessAction
  | FetchCollectionsStartAction;
