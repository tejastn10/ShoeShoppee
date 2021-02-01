import { CustomError } from "../../utils/api-helper";

export interface Order {}

export interface Errors {
  results: CustomError | null;
}

export interface OrderState {
  isLoading: boolean;
  success: boolean | null;
  errors: Errors;
  orders: Order[] | null;
}

export enum OrderActionTypes {
  CREATE_ORDER_REQUEST = "@@order/CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS = "@@order/CREATE_ORDER_SUCCESS",
  CREATE_ORDER_ERROR = "@@order/CREATE_ORDER_ERROR",
  RESET_ORDER = "@@order/RESET_ORDER",
}
