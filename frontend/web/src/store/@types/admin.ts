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
  CREATE_PRODUCT_REQUEST = "@@admin/CREATE_PRODUCT_REQUEST",
  CREATE_PRODUCT_SUCCESS = "@@admin/CREATE_PRODUCT_SUCCESS",
  CREATE_PRODUCT_ERROR = "@@admin/CREATE_PRODUCT_ERROR",
  PRODUCT_DELETE_REQUEST = "@@admin/PRODUCT_DELETE_REQUEST",
  PRODUCT_DELETE_SUCCESS = "@@admin/PRODUCT_DELETE_SUCCESS",
  PRODUCT_DELETE_ERROR = "@@admin/PRODUCT_DELETE_ERROR",
  UPDATE_PRODUCT_REQUEST = "@@admin/UPDATE_PRODUCT_REQUEST",
  UPDATE_PRODUCT_SUCCESS = "@@admin/UPDATE_PRODUCT_SUCCESS",
  UPDATE_PRODUCT_ERROR = "@@admin/UPDATE_PRODUCT_ERROR",
  CLEAR_ADMIN_STATE = "@@admin/CLEAR_ADMIN_STATE",
}
