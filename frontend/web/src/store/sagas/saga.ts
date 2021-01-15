import { all, fork } from "redux-saga/effects";
import productListSaga from "./productList";
import productSaga from "./productDetail";

export const rootSaga = function* () {
  yield all([fork(productListSaga), fork(productSaga)]);
};
