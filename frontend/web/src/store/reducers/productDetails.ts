import { createReducer } from "@reduxjs/toolkit";
import {
  getProductRequest,
  getProductSuccess,
  getProductError,
  createProductReviewRequest,
  createProductReviewSuccess,
  createProductReviewError,
  clearProductDetailsError,
} from "../actions/actions";
import { ProductDetailsState } from "../@types";

const initialState: ProductDetailsState = {
  isLoading: false,
  messages: {
    message: null,
  },
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
      state.messages.message = null;
    })
    .addCase(getProductSuccess, (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload;
    })
    .addCase(getProductError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(createProductReviewRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.messages.message = null;
    })
    .addCase(createProductReviewSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(createProductReviewError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearProductDetailsError, (state, _action) => {
      state.errors.results = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export {
  initialState as ProductDetailsInitialState,
  reducer as ProductDetailsStateReducer,
};
