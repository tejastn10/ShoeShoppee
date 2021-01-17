import { createReducer } from "@reduxjs/toolkit";
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userLogoutRequest,
} from "../actions/actions";
import { UserState } from "../@types";
import {
  clearFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/api-helper";

const initialState: UserState = {
  isLoading: false,
  errors: {
    results: null,
  },
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(userLoginRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.user = null;
    })
    .addCase(userLoginSuccess, (state, action) => {
      saveToLocalStorage("user", action.payload);
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(userLoginError, (state, action) => {
      clearFromLocalStorage("user");
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(userLogoutRequest, (state, _action) => {
      clearFromLocalStorage("user");
      state.isLoading = false;
      state.user = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as UserInitialState, reducer as UserStateReducer };
