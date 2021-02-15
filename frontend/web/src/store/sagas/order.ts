import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  createOrderRequest,
  createOrderSuccess,
  createOrderError,
  orderRequest,
  orderSuccess,
  orderError,
  ordersListRequest,
  ordersListSuccess,
  ordersListError,
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

const getOrder = function* (action: Action) {
  try {
    if (orderRequest.match(action)) {
      const res = yield call(API.getOrder, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(orderError(data.error));
      } else {
        yield put(orderSuccess(data));
      }
    }
  } catch (error) {
    yield put(orderError(getCustomError(error.response.data)));
  }
};

const orderList = function* (action: Action) {
  try {
    if (ordersListRequest.match(action)) {
      const res = yield call(API.getOrderList, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(ordersListError(data.error));
      } else {
        yield put(ordersListSuccess(data));
      }
    }
  } catch (error) {
    yield put(ordersListError(getCustomError(error.response.data)));
  }
};

const watchCreateOrderRequest = function* () {
  yield takeLatest(createOrderRequest.type, createOrder);
};

const watchOrderRequest = function* () {
  yield takeLatest(orderRequest.type, getOrder);
};

const watchOrderListRequest = function* () {
  yield takeLatest(ordersListRequest.type, orderList);
};

export default function* orderSaga() {
  yield all([
    fork(watchCreateOrderRequest),
    fork(watchOrderListRequest),
    fork(watchOrderRequest),
  ]);
}
