import { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  user: Schema.Types.ObjectId;
  name: string;
  image: string;
  brand: string;
  category: string;
  type: string;
  description: string;
  rating: number;
  reviews: {
    user: Schema.Types.ObjectId;
    name: string;
    rating: number;
    comment: string;
  }[];
  numReviews: number;
  price: number;
  count: number;
}
