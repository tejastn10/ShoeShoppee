import { Document, Schema } from "mongoose";

interface IReview extends Document {
  name: string;
  rating: number;
  comment: string;
}

export interface IProduct extends Document {
  user: Schema.Types.ObjectId;
  name: string;
  image: string;
  brand: string;
  category: string;
  type: string;
  description: string;
  rating: number;
  reviews: [IReview];
  numReviews: number;
  price: number;
  count: number;
}
