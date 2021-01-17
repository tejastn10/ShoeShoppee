import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
} from "../actions/actions";

const getUser = function* (action: Action) {
  try {
    if (userLoginRequest.match(action)) {
      const res = yield call(API.fetchUser, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(userLoginError(data.error));
      } else {
        yield put(userLoginSuccess(data));
      }
    }
  } catch (error) {
    yield put(userLoginError(getCustomError(error.response.data)));
  }
};

const registerUser = function* (action: Action) {
  try {
    if (userRegisterRequest.match(action)) {
      const res = yield call(API.registerUser, action.payload);
      const data = res.data;
      console.log(res.status);
      if (res.status !== 201) {
        yield put(userRegisterError(data.error));
      } else {
        yield put(userRegisterSuccess(data));
      }
    }
  } catch (error) {
    yield put(userRegisterError(getCustomError(error.response.data)));
  }
};

const watchUserRequest = function* () {
  yield takeLatest(userLoginRequest.type, getUser);
};

const watchRegisterUserRequest = function* () {
  yield takeLatest(userRegisterRequest.type, registerUser);
};

export default function* userSaga() {
  yield all([fork(watchUserRequest), fork(watchRegisterUserRequest)]);
}
