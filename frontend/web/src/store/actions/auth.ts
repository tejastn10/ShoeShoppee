import { createAction } from "@reduxjs/toolkit";
import { AuthActionTypes } from "../@types";

export const loginAuthRequest = createAction(
  AuthActionTypes.LOGIN_AUTH_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const loginAuthSuccess = createAction(
  AuthActionTypes.LOGIN_AUTH_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const loginAuthError = createAction(
  AuthActionTypes.LOGIN_AUTH_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const logoutUser = createAction(AuthActionTypes.LOGOUT_USER);

export const registerAuthRequest = createAction(
  AuthActionTypes.REGISTER_AUTH_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const registerAuthSuccess = createAction(
  AuthActionTypes.REGISTER_AUTH_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const registerAuthError = createAction(
  AuthActionTypes.REGISTER_AUTH_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const clearAuthError = createAction(AuthActionTypes.CLEAR_AUTH_ERROR);
