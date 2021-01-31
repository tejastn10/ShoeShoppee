import { createAction } from "@reduxjs/toolkit";
import { OrderActionTypes } from "../@types";

export const createOrderRequest = createAction(
  OrderActionTypes.CREATE_ORDER_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const createOrderSuccess = createAction(
  OrderActionTypes.CREATE_ORDER_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const createOrderError = createAction(
  OrderActionTypes.CREATE_ORDER_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
