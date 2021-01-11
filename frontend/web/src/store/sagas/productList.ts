import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  getProductListRequest,
  getProductListSuccess,
  getProductListError,
} from "../actions/actions";

const getProductList = function* (action: Action) {
  try {
    if (getProductListRequest.match(action)) {
      const res = yield call(API.fetchProductList, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getProductListError(data.error));
      } else {
        yield put(getProductListSuccess(data));
      }
    } else {
    }
  } catch (error) {
    yield put(getProductListError(getCustomError(error)));
  }
};

const watchProductListRequest = function* () {
  yield takeLatest(getProductListRequest.type, getProductList);
};

export default function* productListSaga() {
  yield all([fork(watchProductListRequest)]);
}
