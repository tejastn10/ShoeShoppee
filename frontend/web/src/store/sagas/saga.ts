import { all, fork } from "redux-saga/effects";
import productSaga from "./productList";

export const rootSaga = function* () {
  yield all([fork(productSaga)]);
};
