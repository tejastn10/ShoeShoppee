import { all, fork } from "redux-saga/effects";
import productListSaga from "./productList";
import productSaga from "./productDetail";
import authSaga from "./auth";

export const rootSaga = function* () {
  yield all([fork(productListSaga), fork(productSaga), fork(authSaga)]);
};
