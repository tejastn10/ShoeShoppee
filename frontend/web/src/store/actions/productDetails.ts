import { createAction } from "@reduxjs/toolkit";
import { ProductDetailsActionTypes } from "../@types";

export const getProductRequest = createAction(
  ProductDetailsActionTypes.GET_PRODUCT_DETAILS_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getProductSuccess = createAction(
  ProductDetailsActionTypes.GET_PRODUCT_DETAILS_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getProductError = createAction(
  ProductDetailsActionTypes.GET_PRODUCT_DETAILS_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const createProductReviewRequest = createAction(
  ProductDetailsActionTypes.CREATE_PRODUCT_REVIEW_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const createProductReviewSuccess = createAction(
  ProductDetailsActionTypes.CREATE_PRODUCT_REVIEW_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const createProductReviewError = createAction(
  ProductDetailsActionTypes.CREATE_PRODUCT_REVIEW_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
