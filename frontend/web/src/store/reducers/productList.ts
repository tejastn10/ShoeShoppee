import { createReducer } from "@reduxjs/toolkit";
import {
  getProductListRequest,
  getProductListSuccess,
  getProductListError,
  searchProductRequest,
  searchProductSuccess,
  searchProductError,
  clearProductListError,
  clearProductList,
} from "../actions/actions";
import { ProductListState } from "../@types";

const initialState: ProductListState = {
  isLoading: false,
  errors: { results: null },
  products: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(getProductListRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.products = null;
    })
    .addCase(getProductListSuccess, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(getProductListError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(searchProductRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.products = null;
    })
    .addCase(searchProductSuccess, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(searchProductError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearProductList, (state, _action) => {
      state.isLoading = false;
      state.products = null;
    })
    .addCase(clearProductListError, (state, _action) => {
      state.errors.results = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export {
  initialState as ProductListInitialState,
  reducer as ProductListStateReducer,
};
