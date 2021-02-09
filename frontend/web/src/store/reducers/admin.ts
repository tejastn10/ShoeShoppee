import { createReducer } from "@reduxjs/toolkit";
import {
  getUserListRequest,
  getUserListSuccess,
  getUserListError,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteError,
  updatePrivilegeRequest,
  updatePrivilegeSuccess,
  updatePrivilegeError,
  createProductRequest,
  createProductSuccess,
  createProductError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteError,
  clearAdminState,
} from "../actions/actions";
import { AdminState } from "../@types";

const initialState: AdminState = {
  isLoading: false,
  errors: {
    results: null,
  },
  messages: {
    message: null,
  },
  users: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(getUserListRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.users = null;
    })
    .addCase(getUserListSuccess, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    })
    .addCase(getUserListError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(userDeleteRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(userDeleteSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(userDeleteError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(updatePrivilegeRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(updatePrivilegeSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(updatePrivilegeError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearAdminState, (state, _action) => {
      state.isLoading = false;
      state.errors.results = null;
      state.messages.message = null;
      state.users = null;
    })
    .addCase(createProductRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(createProductSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(createProductError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(updateProductRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(updateProductSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(updateProductError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(productDeleteRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(productDeleteSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(productDeleteError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as AdminInitialState, reducer as AdminStateReducer };
