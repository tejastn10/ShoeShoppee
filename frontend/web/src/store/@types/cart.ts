export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  count: number;
  qty: number;
}

export interface PriceSummary {
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface CartState {
  totalItems: number;
  cartList: CartItem[] | null;
  shippingAddress: ShippingAddress | null;
  paymentMethod: "PayPal" | "UPI" | "Cash";
  price: PriceSummary | null;
}

export enum CartActionTypes {
  ADD_CART_ITEM = "@@cart/ADD_CART_ITEM",
  REMOVE_CART_ITEM = "@@cart/REMOVE_CART_ITEM",
  EMPTY_CART = "@@cart/EMPTY_CART",
  SAVE_SHIPPING_ADDRESS = "@@cart/SAVE_SHIPPING_ADDRESS",
  SAVE_PAYMENT_METHOD = "@@cart/SAVE_PAYMENT_METHOD",
}
