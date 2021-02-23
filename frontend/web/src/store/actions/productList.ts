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

export const searchProductRequest = createAction(
  ProductListActionTypes.SEARCH_PRODUCT_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const searchProductSuccess = createAction(
  ProductListActionTypes.SEARCH_PRODUCT_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const searchProductError = createAction(
  ProductListActionTypes.SEARCH_PRODUCT_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const clearProductListError = createAction(
  ProductListActionTypes.CLEAR_PRODUCT_LIST_ERROR
);
export const clearProductList = createAction(
  ProductListActionTypes.CLEAR_PRODUCT_LIST
);
