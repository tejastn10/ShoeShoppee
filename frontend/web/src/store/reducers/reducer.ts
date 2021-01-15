import { combineReducers } from "@reduxjs/toolkit";
import { ProductListStatereducer } from "./productList";
import { ProductDetailsStateReducer } from "./productDetails";

const reducers = {
  productList: ProductListStatereducer,
  productDetails: ProductDetailsStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};
