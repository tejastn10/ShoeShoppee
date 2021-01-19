import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  getProductRequest,
  getProductSuccess,
  getProductError,
} from "../actions/actions";

const getProductDetails = function* (action: Action) {
  try {
    if (getProductRequest.match(action)) {
      const res = yield call(API.fetchProductDetails, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getProductError(data.error));
      } else {
        yield put(getProductSuccess(data));
      }
    }
  } catch (error) {
    yield put(getProductError(getCustomError(error.response.data)));
  }
};

const watchProductDetailsRequest = function* () {
  yield takeLatest(getProductRequest.type, getProductDetails);
};

export default function* productDetailsSaga() {
  yield all([fork(watchProductDetailsRequest)]);
}
