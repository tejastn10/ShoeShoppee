import { combineReducers } from "@reduxjs/toolkit";
import {
  ProductListStateReducer,
  ProductListInitialState,
} from "./productList";
import {
  ProductDetailsStateReducer,
  ProductDetailsInitialState,
} from "./productDetails";
import { AuthStateReducer, AuthInitialState } from "./auth";

const reducers = {
  productList: ProductListStateReducer,
  productDetails: ProductDetailsStateReducer,
  authState: AuthStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export {
  ProductListInitialState,
  ProductDetailsInitialState,
  AuthInitialState,
};
