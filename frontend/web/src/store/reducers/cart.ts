import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  removeFromCart,
  emptyCart,
  saveAddress,
  savePaymentMethod,
} from "../actions/actions";
import { CartState } from "../@types";
import {
  clearFromLocalStorage,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/api-helper";

const initialState: CartState = {
  cartList:
    getFromLocalStorage("cart") === undefined
      ? []
      : getFromLocalStorage("cart"),
  shippingAddress:
    getFromLocalStorage("shippingAddress") === undefined
      ? null
      : getFromLocalStorage("shippingAddress"),
  paymentMethod:
    getFromLocalStorage("paymentMethod") === undefined
      ? "PayPal"
      : getFromLocalStorage("paymentMethod"),
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(addToCart, (state, action) => {
      if (state.cartList === null) {
        state.cartList = [action.payload];
      } else {
        const item = action.payload;
        const existingItem = state.cartList?.find((i) => i.id === item.id);
        console.log(existingItem);
        if (existingItem) {
          state.cartList = state.cartList.map((i) =>
            i.id === existingItem.id ? item : i
          );
        } else {
          state.cartList = [...state.cartList, action.payload];
        }
      }
      saveToLocalStorage("cart", state.cartList);
    })
    .addCase(removeFromCart, (state, action) => {
      state.cartList = state.cartList!.filter(
        (i) => i.id !== action.payload.id
      );
      saveToLocalStorage("cart", state.cartList);
    })
    .addCase(emptyCart, (state, _action) => {
      state.cartList = [];
      clearFromLocalStorage("cart");
    })
    .addCase(saveAddress, (state, action) => {
      state.shippingAddress = action.payload;
      saveToLocalStorage("shippingAddress", state.shippingAddress);
    })
    .addCase(savePaymentMethod, (state, action) => {
      state.paymentMethod = action.payload;
      saveToLocalStorage("paymentMethod", state.shippingAddress);
    });
});

export { initialState as CartInitialState, reducer as CartStateReducer };
