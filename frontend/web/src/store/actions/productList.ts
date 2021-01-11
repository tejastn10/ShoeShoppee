import { createAction } from "@reduxjs/toolkit";
import { ProductListActionTypes } from "../@types";

export const getProductListRequest = createAction(
  ProductListActionTypes.GET_PRODUCT_LIST_REQUEST
);
export const getProductListSuccess = createAction(
  ProductListActionTypes.GET_PRODUCT_LIST_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getProductListError = createAction(
  ProductListActionTypes.GET_PRODUCT_LIST_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
