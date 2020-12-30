import { Document, Schema } from "mongoose";

interface IOrderItem extends Document {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: Schema.Types.ObjectId;
}

export interface IOrder extends Document {
  user: Schema.Types.ObjectId;
  orderItems: [IOrderItem];
  shippingAddress: {
    address: string;
    city: string;
    zipCode: string;
    state: string;
  };
  paymentMethod: string;
  paymentResult: {
    id: string;
    status: string;
    update_time: string;
    email_address: string;
  };
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidOn: Date;
  isDelivered: boolean;
  deliveredOn: Date;
}
