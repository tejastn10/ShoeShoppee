import { createReducer } from "@reduxjs/toolkit";
import {
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  logoutUser,
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
  clearAuthError,
} from "../actions/actions";
import { AuthState } from "../@types";
import {
  clearFromLocalStorage,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/api-helper";

const initialState: AuthState = {
  isLoading: false,
  errors: {
    results: null,
  },
  auth:
    getFromLocalStorage("user") === undefined
      ? null
      : getFromLocalStorage("user"),
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(loginAuthRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.auth = null;
    })
    .addCase(loginAuthSuccess, (state, action) => {
      saveToLocalStorage("user", action.payload);
      state.isLoading = false;
      state.auth = action.payload;
    })
    .addCase(loginAuthError, (state, action) => {
      clearFromLocalStorage("user");
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(registerAuthRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.auth = null;
    })
    .addCase(registerAuthSuccess, (state, action) => {
      saveToLocalStorage("user", action.payload);
      state.isLoading = false;
      state.auth = action.payload;
    })
    .addCase(registerAuthError, (state, action) => {
      clearFromLocalStorage("user");
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(logoutUser, (state, _action) => {
      clearFromLocalStorage("user");
      state.isLoading = false;
      state.auth = null;
    })
    .addCase(clearAuthError, (state, _action) => {
      state.errors.results = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as AuthInitialState, reducer as AuthStateReducer };
