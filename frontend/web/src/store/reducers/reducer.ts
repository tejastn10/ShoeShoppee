import { combineReducers } from "@reduxjs/toolkit";
import { ProductListStatereducer } from "./product";

const reducers = {
  productList: ProductListStatereducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};
