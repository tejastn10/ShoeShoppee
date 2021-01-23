import { CustomError } from "../../utils/api-helper";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  count: number;
  qty: number;
}

export interface Errors {
  results: CustomError | null;
}

export interface CartState {
  cartList: CartItem[] | null;
}

export enum CartActionTypes {
  ADD_CART_ITEM = "@@cart/ADD_CART_ITEM",
  REMOVE_CART_ITEM = "@@cart/REMOVE_CART_ITEM",
  EMPTY_CART = "@@cart/EMPTY_CART",
}
