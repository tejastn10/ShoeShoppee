import { CustomError } from "../../utils/api-helper";

export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface Errors {
  results: CustomError | null;
}

export interface UserState {
  isLoading: boolean;
  errors: Errors;
  user: User | null;
}

export enum UserActionTypes {
  USER_LOGIN_REQUEST = "@@user/USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "@@user/USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR = "@@user/USER_LOGIN_ERROR",
  LOGOUT_USER = "@@user/LOGOUT_USER",
  USER_REGISTER_REQUEST = "@@user/USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS = "@@user/USER_REGISTER_SUCCESS",
  USER_REGISTER_ERROR = "@@user/USER_REGISTER_ERROR",
}
