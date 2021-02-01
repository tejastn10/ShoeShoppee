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

export const saveAddress = createAction(
  CartActionTypes.SAVE_SHIPPING_ADDRESS,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const savePaymentMethod = createAction(
  CartActionTypes.SAVE_PAYMENT_METHOD,
  (data: any) => {
    return {
      payload: data,
    };
  }
);

export const clearCart = createAction(CartActionTypes.CLEAR_CART);
