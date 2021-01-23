import { createAction } from "@reduxjs/toolkit";
import { CartActionTypes } from "../@types";

export const addToCart = createAction(
  CartActionTypes.ADD_CART_ITEM,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const removeFromCart = createAction(
  CartActionTypes.REMOVE_CART_ITEM,
  (data: any) => {
    return {
      payload: data,
    };
  }
);
export const emptyCart = createAction(CartActionTypes.EMPTY_CART);
