import { CartItem, ShippingAddress } from ".";
import { CustomError } from "../../utils/api-helper";

export interface Order {
  _id: string;
  shippingAddress: ShippingAddress;
  paymentMethod: "PayPal" | "UPI" | "Cash";
  orderItems: CartItem[];
  totalItems: number;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
}

export interface Errors {
  results: CustomError | null;
}

export interface OrderState {
  isLoading: boolean;
  success: boolean | null;
  errors: Errors;
  listError: Errors;
  orders: Order[] | null;
}

export enum OrderActionTypes {
  CREATE_ORDER_REQUEST = "@@order/CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS = "@@order/CREATE_ORDER_SUCCESS",
  CREATE_ORDER_ERROR = "@@order/CREATE_ORDER_ERROR",
  RESET_ORDER = "@@order/RESET_ORDER",
  ORDER_LIST_REQUEST = "@@order/ORDER_LIST_REQUEST",
  ORDER_LIST_SUCCESS = "@@order/ORDER_LIST_SUCCESS",
  ORDER_LIST_ERROR = "@@order/ORDER_LIST_ERROR",
  CLEAR_ORDERS = "@@order/CLEAR_ORDERS",
}
