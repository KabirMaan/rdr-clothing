import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shopSaga";
import { userSagas } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";

export default function* rootSaga() {
  yield all([call(cartSagas), call(shopSagas), call(userSagas)]);
}
