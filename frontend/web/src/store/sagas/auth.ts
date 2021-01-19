import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
} from "../actions/actions";

const loginAuth = function* (action: Action) {
  try {
    if (loginAuthRequest.match(action)) {
      const res = yield call(API.loginUser, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(loginAuthError(data.error));
      } else {
        yield put(loginAuthSuccess(data));
      }
    }
  } catch (error) {
    yield put(loginAuthError(getCustomError(error.response.data)));
  }
};

const registerAuth = function* (action: Action) {
  try {
    if (registerAuthRequest.match(action)) {
      const res = yield call(API.registerUser, action.payload);
      const data = res.data;
      console.log(res.status);
      if (res.status !== 201) {
        yield put(registerAuthError(data.error));
      } else {
        yield put(registerAuthSuccess(data));
      }
    }
  } catch (error) {
    yield put(registerAuthError(getCustomError(error.response.data)));
  }
};

const watchLoginRequest = function* () {
  yield takeLatest(loginAuthRequest.type, loginAuth);
};

const watchRegisterRequest = function* () {
  yield takeLatest(registerAuthRequest.type, registerAuth);
};

export default function* authSaga() {
  yield all([fork(watchLoginRequest), fork(watchRegisterRequest)]);
}
