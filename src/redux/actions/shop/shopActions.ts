import ShopActionTypes from "./shopTypes";

export const updateCollections = (collectionsMap: any) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
