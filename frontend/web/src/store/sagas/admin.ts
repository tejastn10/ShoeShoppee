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
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,
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

const watchUsersRequest = function* () {
  yield takeLatest(getUserListRequest.type, getUsers);
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

export default function* adminSaga() {
  yield all([
    fork(watchUsersRequest),
    fork(watchUpdateUserRequest),
    fork(watchUpdateProductRequest),
    fork(watchDeleteUserRequest),
    fork(watchDeleteProductRequest),
  ]);
}
