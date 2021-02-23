import { CustomError } from "../../utils/api-helper";

export interface Auth {
  _id: string;
  isAdmin: boolean;
  token: string;
}

export interface Errors {
  results: CustomError | null;
}

export interface AuthState {
  isLoading: boolean;
  errors: Errors;
  auth: Auth | null;
}

export enum AuthActionTypes {
  LOGIN_AUTH_REQUEST = "@@auth/LOGIN_AUTH_REQUEST",
  LOGIN_AUTH_SUCCESS = "@@auth/LOGIN_AUTH_SUCCESS",
  LOGIN_AUTH_ERROR = "@@auth/LOGIN_AUTH_ERROR",
  REGISTER_AUTH_REQUEST = "@@auth/REGISTER_AUTH_REQUEST",
  REGISTER_AUTH_SUCCESS = "@@auth/REGISTER_AUTH_SUCCESS",
  REGISTER_AUTH_ERROR = "@@auth/REGISTER_AUTH_ERROR",
  LOGOUT_USER = "@@auth/LOGOUT_USER",
  CLEAR_AUTH_ERROR = "@@auth/CLEAR_AUTH_ERROR",
}
