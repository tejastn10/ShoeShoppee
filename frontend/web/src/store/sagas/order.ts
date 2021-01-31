import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  createOrderRequest,
  createOrderSuccess,
  createOrderError,
} from "../actions/actions";

const createOrder = function* (action: Action) {
  try {
    if (createOrderRequest.match(action)) {
      const res = yield call(API.createOrder, action.payload);
      const data = res.data;
      if (res.status !== 201) {
        yield put(createOrderError(data.error));
      } else {
        yield put(createOrderSuccess(data));
      }
    }
  } catch (error) {
    yield put(createOrderError(getCustomError(error.response.data)));
  }
};

const watchCreateOrderRequest = function* () {
  yield takeLatest(createOrderRequest.type, createOrder);
};

export default function* orderSaga() {
  yield all([fork(watchCreateOrderRequest)]);
}
