import { all, call } from "redux-saga/effects";

import { onFetchCollectionsStart } from "./actions/shop/shopSaga";

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart)]);
}
