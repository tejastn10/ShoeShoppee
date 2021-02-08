import { createAction } from "@reduxjs/toolkit";
import { AdminActionTypes } from "../@types";

export const getUserListRequest = createAction(
  AdminActionTypes.USER_LIST_REQUEST
);
export const getUserListSuccess = createAction(
  AdminActionTypes.USER_LIST_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const getUserListError = createAction(
  AdminActionTypes.USER_LIST_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userDeleteRequest = createAction(
  AdminActionTypes.USER_DELETE_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userDeleteSuccess = createAction(
  AdminActionTypes.USER_DELETE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const userDeleteError = createAction(
  AdminActionTypes.USER_DELETE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const updatePrivilegeRequest = createAction(
  AdminActionTypes.UPDATE_PRIVILEGE_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updatePrivilegeSuccess = createAction(
  AdminActionTypes.UPDATE_PRIVILEGE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updatePrivilegeError = createAction(
  AdminActionTypes.UPDATE_PRIVILEGE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const productDeleteRequest = createAction(
  AdminActionTypes.PRODUCT_DELETE_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const productDeleteSuccess = createAction(
  AdminActionTypes.PRODUCT_DELETE_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const productDeleteError = createAction(
  AdminActionTypes.PRODUCT_DELETE_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateProductRequest = createAction(
  AdminActionTypes.UPDATE_PRODUCT_REQUEST,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateProductSuccess = createAction(
  AdminActionTypes.UPDATE_PRODUCT_SUCCESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const updateProductError = createAction(
  AdminActionTypes.UPDATE_PRODUCT_ERROR,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const clearAdminState = createAction(AdminActionTypes.CLEAR_ADMIN_STATE);
