import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  getProductListRequest,
  getProductListSuccess,
  getProductListError,
  searchProductRequest,
  searchProductSuccess,
  searchProductError,
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
    }
  } catch (error) {
    yield put(getProductListError(getCustomError(error)));
  }
};

const searchProduct = function* (action: Action) {
  try {
    if (searchProductRequest.match(action)) {
      const res = yield call(API.searchProduct, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(searchProductError(data.error));
      } else {
        yield put(searchProductSuccess(data));
      }
    }
  } catch (error) {
    yield put(searchProductError(getCustomError(error.response.data)));
  }
};

const watchProductListRequest = function* () {
  yield takeLatest(getProductListRequest.type, getProductList);
};

const watchSearchProductRequest = function* () {
  yield takeLatest(searchProductRequest.type, searchProduct);
};

export default function* productListSaga() {
  yield all([fork(watchProductListRequest), fork(watchSearchProductRequest)]);
}
