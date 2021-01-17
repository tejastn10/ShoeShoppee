import { combineReducers } from "@reduxjs/toolkit";
import {
  ProductListStateReducer,
  ProductListInitialState,
} from "./productList";
import {
  ProductDetailsStateReducer,
  ProductDetailsInitialState,
} from "./productDetails";

const reducers = {
  productList: ProductListStatereducer,
  productDetails: ProductDetailsStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export {
  ProductListInitialState,
  ProductDetailsInitialState,
};
