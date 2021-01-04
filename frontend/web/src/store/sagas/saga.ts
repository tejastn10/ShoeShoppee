import { all, fork } from "redux-saga/effects";
import productSaga from "./product";

export const rootSaga = function* () {
  yield all([fork(productSaga)]);
};
