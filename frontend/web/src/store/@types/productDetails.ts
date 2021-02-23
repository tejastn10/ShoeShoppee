import { Errors } from ".";

export interface Product {
  _id?: string;
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  type: string;
  description: string;
  rating: number;
  reviews: {
    name: string;
    rating: number;
    comment: string;
    createdAt: string;
  }[];
  numReviews: number;
  price: number;
  count: number;
}

interface Message {
  message: string | null;
}

export interface ProductDetailsState {
  isLoading: boolean;
  messages: Message;
  errors: Errors;
  productDetail: Product | null;
}

export enum ProductDetailsActionTypes {
  GET_PRODUCT_DETAILS_REQUEST = "@@productDetails/GET_PRODUCT_DETAIL_REQUEST",
  GET_PRODUCT_DETAILS_SUCCESS = "@@productDetails/GET_PRODUCT_DETAIL_SUCCESS",
  GET_PRODUCT_DETAILS_ERROR = "@@productDetails/GET_PRODUCT_DETAIL_ERROR",
  CREATE_PRODUCT_REVIEW_REQUEST = "@@productDetails/CREATE_PRODUCT_REVIEW_REQUEST",
  CREATE_PRODUCT_REVIEW_SUCCESS = "@@productDetails/CREATE_PRODUCT_REVIEW_SUCCESS",
  CREATE_PRODUCT_REVIEW_ERROR = "@@productDetails/CREATE_PRODUCT_REVIEW_ERROR",
  CLEAR_PRODUCT_DETAILS_ERROR = "@@productDetails/CLEAR_PRODUCT_DETAILS_ERROR",
}
