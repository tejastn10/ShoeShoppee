import { createReducer } from "@reduxjs/toolkit";
import {
  getProductRequest,
  getProductSuccess,
  getProductError,
} from "../actions/actions";
import { ProductDetailsState } from "../@types";

const initialState: ProductDetailsState = {
  isLoading: false,
  errors: {
    results: null,
  },
  productDetail: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(getProductRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.productDetail = null;
    })
    .addCase(getProductSuccess, (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload;
    })
    .addCase(getProductError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export {
  initialState as ProductDetailsInitialState,
  reducer as ProductDetailsStateReducer,
};
