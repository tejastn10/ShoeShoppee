import { CustomError } from "../../utils/api-helper";
import { Profile } from "./index";

export interface Errors {
  results: CustomError | null;
}

interface Message {
  message: string | null;
}

export interface AdminState {
  isLoading: boolean;
  errors: Errors;
  messages: Message;
  users: Profile[] | null;
}

export enum AdminActionTypes {
  USER_LIST_REQUEST = "@@admin/USER_LIST_REQUEST",
  USER_LIST_SUCCESS = "@@admin/USER_LIST_SUCCESS",
  USER_LIST_ERROR = "@@admin/USER_LIST_ERROR",
  USER_DELETE_REQUEST = "@@admin/USER_DELETE_REQUEST",
  USER_DELETE_SUCCESS = "@@admin/USER_DELETE_SUCCESS",
  USER_DELETE_ERROR = "@@admin/USER_DELETE_ERROR",
  UPDATE_PRIVILEGE_REQUEST = "@@admin/UPDATE_PRIVILEGE_REQUEST",
  UPDATE_PRIVILEGE_SUCCESS = "@@admin/UPDATE_PRIVILEGE_SUCCESS",
  UPDATE_PRIVILEGE_ERROR = "@@admin/UPDATE_PRIVILEGE_ERROR",
  CLEAR_ADMIN_STATE = "@@admin/CLEAR_ADMIN_STATE",
}