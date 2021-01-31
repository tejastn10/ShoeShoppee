import { createReducer } from "@reduxjs/toolkit";
import {
  createOrderRequest,
  createOrderSuccess,
  createOrderError,
} from "../actions/actions";
import { OrderState } from "../@types";

const initialState: OrderState = {
  isLoading: false,
  success: null,
  errors: {
    results: null,
  },
  orders: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(createOrderRequest, (state, _action) => {
      state.isLoading = true;
      state.success = null;
      state.errors.results = null;
    })
    .addCase(createOrderSuccess, (state, action) => {
      state.isLoading = false;
      state.success = true;
      if (state.orders === null) {
        state.orders = [action.payload];
      } else {
        state.orders = [...state.orders!, action.payload];
      }
    })
    .addCase(createOrderError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as OrderInitialState, reducer as OrderStateReducer };
