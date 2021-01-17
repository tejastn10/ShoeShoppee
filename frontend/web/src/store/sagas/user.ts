import { Action } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as API from "../../services/api";

import { getCustomError } from "../../utils/api-helper";

import {
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
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

const watchUserRequest = function* () {
  yield takeLatest(userLoginRequest.type, getUser);
};

export default function* userSaga() {
  yield all([fork(watchUserRequest)]);
}
