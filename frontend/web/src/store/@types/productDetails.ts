import { CustomError } from "../../utils/api-helper";

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
  }[];
  numReviews: number;
  price: number;
  count: number;
}

export interface Errors {
  results: CustomError | null;
}

export interface ProductDetailsState {
  isLoading: boolean;
  errors: Errors;
  productDetail: Product | null;
}

export enum ProductDetailsActionTypes {
  GET_PRODUCT_DETAILS_REQUEST = "@@productDetails/GET_PRODUCT_DETAIL_REQUEST",
  GET_PRODUCT_DETAILS_SUCCESS = "@@productDetails/GET_PRODUCT_DETAIL_SUCCESS",
  GET_PRODUCT_DETAILS_ERROR = "@@productDetails/GET_PRODUCT_DETAIL_ERROR",
}
