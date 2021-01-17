import { createAction } from "@reduxjs/toolkit";
import { UserActionTypes } from "../@types";

export const userLoginRequest = createAction(
  UserActionTypes.USER_LOGIN_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userLoginSuccess = createAction(
  UserActionTypes.USER_LOGIN_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userLoginError = createAction(
  UserActionTypes.USER_LOGIN_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const logoutUser = createAction(UserActionTypes.LOGOUT_USER);

export const userRegisterRequest = createAction(
  UserActionTypes.USER_REGISTER_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userRegisterSuccess = createAction(
  UserActionTypes.USER_REGISTER_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userRegisterError = createAction(
  UserActionTypes.USER_REGISTER_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
