import { createAction } from "@reduxjs/toolkit";
import { UserProfileActionTypes } from "../@types";

export const getUserProfileRequest = createAction(
  UserProfileActionTypes.USER_PROFILE_REQUEST
);
export const getUserProfileSuccess = createAction(
  UserProfileActionTypes.USER_PROFILE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getUserProfileError = createAction(
  UserProfileActionTypes.USER_PROFILE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const clearUserProfile = createAction(
  UserProfileActionTypes.CLEAR_PROFILE
);

export const updateUserProfileRequest = createAction(
  UserProfileActionTypes.UPDATE_USER_PROFILE_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateUserProfileSuccess = createAction(
  UserProfileActionTypes.UPDATE_USER_PROFILE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateUserProfileError = createAction(
  UserProfileActionTypes.UPDATE_USER_PROFILE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const clearUserError = createAction(
  UserProfileActionTypes.CLEAR_USER_ERROR
);
