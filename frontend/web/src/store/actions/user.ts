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
