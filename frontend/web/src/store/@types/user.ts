import { CustomError } from "../../utils/api-helper";

export interface Profile {
  _id: string;
  name: string;
  email: string;
  isAdmin: string;
}

export interface Errors {
  results: CustomError | null;
}

export interface UserProfileState {
  isLoading: boolean;
  errors: Errors;
  profile: Profile | null;
}

export enum UserProfileActionTypes {
  USER_PROFILE_REQUEST = "@@user/USER_PROFILE_REQUEST",
  USER_PROFILE_SUCCESS = "@@user/USER_PROFILE_SUCCESS",
  USER_PROFILE_ERROR = "@@user/USER_PROFILE_ERROR",
  CLEAR_PROFILE = "@@user/CLEAR_PROFILE",
  UPDATE_USER_PROFILE_REQUEST = "@@user/UPDATE_USER_PROFILE_REQUEST",
  UPDATE_USER_PROFILE_SUCCESS = "@@user/UPDATE_USER_PROFILE_SUCCESS",
  UPDATE_USER_PROFILE_ERROR = "@@user/UPDATE_USER_PROFILE_ERROR",
  CLEAR_USER_ERROR = "@@user/CLEAR_USER_ERROR",
}
