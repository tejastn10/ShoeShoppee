import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  removeFromCart,
  emptyCart,
  saveAddress,
  savePaymentMethod,
  clearCart,
} from "../actions/actions";
import { CartState } from "../@types";
import {
  clearFromLocalStorage,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/api-helper";

const getTotalItems = () => {
  if (getFromLocalStorage("cart") === undefined) {
    return 0;
  } else {
    return getFromLocalStorage("cart").reduce(
      (acc: any, item: any) => acc + item.qty,
      0
    );
  }
};

const getPrice = () => {
  if (getFromLocalStorage("cart") === undefined) {
    return null;
  } else {
    const cartList = getFromLocalStorage("cart");
    const itemsPrice: number = cartList.reduce(
      (acc: number, item: any) => acc + item.qty * item.price,
      0
    );
    const taxPrice: number = cartList.reduce(
      (acc: number, item: any) => acc + item.qty * 50,
      0
    );
    const shippingPrice: number = cartList.reduce(
      (acc: number, item: any) => acc + item.qty * 10,
      0
    );
    const totalPrice: number = itemsPrice + taxPrice + shippingPrice;
    return { itemsPrice, taxPrice, shippingPrice, totalPrice };
  }
};

const initialState: CartState = {
  totalItems: getTotalItems(),
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
  price: getPrice(),
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(addToCart, (state, action) => {
      if (state.cartList === null) {
        state.cartList = [action.payload];
      } else {
        const item = action.payload;
        const existingItem = state.cartList?.find((i) => i.id === item.id);
        if (existingItem) {
          state.cartList = state.cartList.map((i) =>
            i.id === existingItem.id ? item : i
          );
        } else {
          state.cartList = [...state.cartList, action.payload];
        }
      }
      state.totalItems = state.cartList.reduce(
        (acc, item) => acc + item.qty,
        0
      );
      saveToLocalStorage("cart", state.cartList);
      state.price = getPrice();
    })
    .addCase(removeFromCart, (state, action) => {
      state.cartList = state.cartList!.filter(
        (i) => i.id !== action.payload.id
      );
      state.totalItems = state.cartList.reduce(
        (acc, item) => acc + item.qty,
        0
      );
      saveToLocalStorage("cart", state.cartList);
      state.price = getPrice();
    })
    .addCase(emptyCart, (state, _action) => {
      state.cartList = [];
      state.totalItems = 0;
      state.price = null;
      clearFromLocalStorage("cart");
    })
    .addCase(saveAddress, (state, action) => {
      state.shippingAddress = action.payload;
      saveToLocalStorage("shippingAddress", state.shippingAddress);
    })
    .addCase(savePaymentMethod, (state, action) => {
      state.paymentMethod = action.payload;
      saveToLocalStorage("paymentMethod", state.paymentMethod);
    })
    .addCase(clearCart, (state, _action) => {
      state.cartList = null;
      state.price = null;
      state.shippingAddress = null;
      state.totalItems = 0;
      clearFromLocalStorage("cart");
      clearFromLocalStorage("paymentMethod");
      clearFromLocalStorage("shippingAddress");
    });
});

export { initialState as CartInitialState, reducer as CartStateReducer };
