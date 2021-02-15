import { createReducer } from "@reduxjs/toolkit";
import {
  createOrderRequest,
  createOrderSuccess,
  createOrderError,
  orderRequest,
  orderSuccess,
  orderError,
  resetOrder,
  ordersListRequest,
  ordersListSuccess,
  ordersListError,
  clearOrders,
} from "../actions/actions";
import { OrderState } from "../@types";

const initialState: OrderState = {
  isLoading: false,
  success: null,
  errors: {
    results: null,
  },
  listError: {
    results: null,
  },
  orders: null,
  order: null,
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
    .addCase(orderRequest, (state, _action) => {
      state.isLoading = true;
    })
    .addCase(orderSuccess, (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    })
    .addCase(orderError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(resetOrder, (state, _action) => {
      state.success = null;
    })
    .addCase(ordersListRequest, (state, _action) => {
      state.isLoading = true;
    })
    .addCase(ordersListSuccess, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase(ordersListError, (state, action) => {
      state.isLoading = false;
      state.listError = action.payload;
    })
    .addCase(clearOrders, (state, _action) => {
      state.orders = null;
      state.success = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as OrderInitialState, reducer as OrderStateReducer };
