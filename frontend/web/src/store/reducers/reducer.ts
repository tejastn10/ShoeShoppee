import { combineReducers } from "@reduxjs/toolkit";
import {
  ProductListStateReducer,
  ProductListInitialState,
} from "./productList";
import {
  ProductDetailsStateReducer,
  ProductDetailsInitialState,
} from "./productDetails";
import { UserStateReducer, UserInitialState } from "./user";

const reducers = {
  productList: ProductListStateReducer,
  productDetails: ProductDetailsStateReducer,
  user: UserStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export {
  ProductListInitialState,
  ProductDetailsInitialState,
  UserInitialState,
};
