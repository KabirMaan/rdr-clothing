import { ShopActionTypes } from "./shopTypes";

interface Item {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

interface Category {
  id: string;
  items: Item[];
  routeName: string;
  title: string;
}

export interface CollectionsMap {
  hats: Category;
  mens: Category;
  womens: Category;
  jackets: Category;
  sneakers: Category;
}

export interface FetchCollectionsStartAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_START;
}

export interface FetchCollectionsFailureAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export interface FetchCollectionsSuccessAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: CollectionsMap;
}

export const fetchCollectionsStart = (): FetchCollectionsStartAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (
  collectionsMap: CollectionsMap
): FetchCollectionsSuccessAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (
  errorMessage: string
): FetchCollectionsFailureAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});
