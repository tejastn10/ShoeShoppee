import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  getUserListRequest,
  getUserListSuccess,
  getUserListError,
  updatePrivilegeRequest,
  updatePrivilegeSuccess,
  updatePrivilegeError,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteError,
  createProductRequest,
  createProductSuccess,
  createProductError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteError,
  getOrderListRequest,
  getOrderListSuccess,
  getOrderListError,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderError,
} from "../actions/actions";

const getUsers = function* (action: Action) {
  try {
    if (getUserListRequest.match(action)) {
      const res = yield call(API.getUsers, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getUserListError(data.error));
      } else {
        yield put(getUserListSuccess(data));
      }
    }
  } catch (error) {
    yield put(getUserListError(getCustomError(error.response.data)));
  }
};

const updateUserPrivilege = function* (action: Action) {
  try {
    if (updatePrivilegeRequest.match(action)) {
      const res = yield call(API.updateUserPrivilege, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(updatePrivilegeError(data.error));
      } else {
        yield put(updatePrivilegeSuccess(data));
      }
    }
  } catch (error) {
    yield put(updatePrivilegeError(getCustomError(error.response.data)));
  }
};

const deleteUser = function* (action: Action) {
  try {
    if (userDeleteRequest.match(action)) {
      const res = yield call(API.deleteUser, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(userDeleteError(data.error));
      } else {
        yield put(userDeleteSuccess(data));
      }
    }
  } catch (error) {
    yield put(userDeleteError(getCustomError(error.response.data)));
  }
};

const createProduct = function* (action: Action) {
  try {
    if (createProductRequest.match(action)) {
      const res = yield call(API.createProduct, action.payload);
      const data = res.data;
      if (res.status !== 201) {
        yield put(createProductError(data.error));
      } else {
        yield put(createProductSuccess(data));
      }
    }
  } catch (error) {
    yield put(createProductError(getCustomError(error.response.data)));
  }
};

const updateProduct = function* (action: Action) {
  try {
    if (updateProductRequest.match(action)) {
      const res = yield call(API.updateProduct, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(updateProductError(data.error));
      } else {
        yield put(updateProductSuccess(data));
      }
    }
  } catch (error) {
    yield put(updateProductError(getCustomError(error.response.data)));
  }
};

const deleteProduct = function* (action: Action) {
  try {
    if (productDeleteRequest.match(action)) {
      const res = yield call(API.deleteProduct, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(productDeleteError(data.error));
      } else {
        yield put(productDeleteSuccess(data));
      }
    }
  } catch (error) {
    yield put(productDeleteError(getCustomError(error.response.data)));
  }
};

const getOrders = function* (action: Action) {
  try {
    if (getOrderListRequest.match(action)) {
      const res = yield call(API.getOrders, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getOrderListError(data.error));
      } else {
        yield put(getOrderListSuccess(data));
      }
    }
  } catch (error) {
    yield put(getOrderListError(getCustomError(error.response.data)));
  }
};

const updateOrder = function* (action: Action) {
  try {
    if (updateOrderRequest.match(action)) {
      const res = yield call(API.updateOrder, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(updateOrderError(data.error));
      } else {
        yield put(updateOrderSuccess(data));
      }
    }
  } catch (error) {
    yield put(updateOrderError(getCustomError(error.response.data)));
  }
};

const watchUsersRequest = function* () {
  yield takeLatest(getUserListRequest.type, getUsers);
};

const watchCreateProductRequest = function* () {
  yield takeLatest(createProductRequest.type, createProduct);
};

const watchUpdateUserRequest = function* () {
  yield takeLatest(updatePrivilegeRequest.type, updateUserPrivilege);
};

const watchUpdateProductRequest = function* () {
  yield takeLatest(updateProductRequest.type, updateProduct);
};

const watchDeleteUserRequest = function* () {
  yield takeLatest(userDeleteRequest.type, deleteUser);
};

const watchDeleteProductRequest = function* () {
  yield takeLatest(productDeleteRequest.type, deleteProduct);
};

const watchOrdersRequest = function* () {
  yield takeLatest(getOrderListRequest.type, getOrders);
};

const watchUpdateOrderRequest = function* () {
  yield takeLatest(updateOrderRequest.type, updateOrder);
};

export default function* adminSaga() {
  yield all([
    fork(watchUsersRequest),
    fork(watchCreateProductRequest),
    fork(watchUpdateUserRequest),
    fork(watchUpdateProductRequest),
    fork(watchDeleteUserRequest),
    fork(watchDeleteProductRequest),
    fork(watchOrdersRequest),
    fork(watchUpdateOrderRequest),
  ]);
}
