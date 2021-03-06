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
import { CartStateReducer, CartInitialState } from "./cart";
import { OrderStateReducer, OrderInitialState } from "./order";
import { AdminStateReducer, AdminInitialState } from "./admin";

const reducers = {
  productList: ProductListStateReducer,
  productDetails: ProductDetailsStateReducer,
  authState: AuthStateReducer,
  userProfile: UserProfileStateReducer,
  cart: CartStateReducer,
  orders: OrderStateReducer,
  admin: AdminStateReducer,
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
  CartInitialState,
  OrderInitialState,
  AdminInitialState,
};
