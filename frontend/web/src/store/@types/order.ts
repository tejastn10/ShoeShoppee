import { CartItem, Errors, Profile, ShippingAddress } from ".";

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
  user: Profile | null;
}

export interface OrderState {
  isLoading: boolean;
  success: boolean | null;
  errors: Errors;
  listError: Errors;
  orders: Order[] | null;
  order: Order | null;
}

export enum OrderActionTypes {
  CREATE_ORDER_REQUEST = "@@order/CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS = "@@order/CREATE_ORDER_SUCCESS",
  CREATE_ORDER_ERROR = "@@order/CREATE_ORDER_ERROR",
  ORDER_REQUEST = "@@order/ORDER_REQUEST",
  ORDER_SUCCESS = "@@order/ORDER_SUCCESS",
  ORDER_ERROR = "@@order/ORDER_ERROR",
  RESET_ORDER = "@@order/RESET_ORDER",
  ORDER_LIST_REQUEST = "@@order/ORDER_LIST_REQUEST",
  ORDER_LIST_SUCCESS = "@@order/ORDER_LIST_SUCCESS",
  ORDER_LIST_ERROR = "@@order/ORDER_LIST_ERROR",
  CLEAR_ORDERS_ERROR = "@@order/CLEAR_ORDERS_ERROR",
  CLEAR_ORDERS = "@@order/CLEAR_ORDERS",
}
