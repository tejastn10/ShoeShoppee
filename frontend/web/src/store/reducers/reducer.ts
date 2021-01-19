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
import { UserProfileStateReducer, UserProfileInitialState } from "./user";

const reducers = {
  productList: ProductListStateReducer,
  productDetails: ProductDetailsStateReducer,
  authState: AuthStateReducer,
  userProfile: UserProfileStateReducer,
};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};

export {
  ProductListInitialState,
  ProductDetailsInitialState,
  AuthInitialState,
  UserProfileInitialState,
};
