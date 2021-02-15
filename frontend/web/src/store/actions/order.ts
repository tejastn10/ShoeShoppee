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
export const orderRequest = createAction(
  OrderActionTypes.ORDER_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const orderSuccess = createAction(
  OrderActionTypes.ORDER_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const orderError = createAction(
  OrderActionTypes.ORDER_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const resetOrder = createAction(OrderActionTypes.RESET_ORDER);

export const ordersListRequest = createAction(
  OrderActionTypes.ORDER_LIST_REQUEST
);
export const ordersListSuccess = createAction(
  OrderActionTypes.ORDER_LIST_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const ordersListError = createAction(
  OrderActionTypes.ORDER_LIST_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const clearOrders = createAction(OrderActionTypes.CLEAR_ORDERS);
