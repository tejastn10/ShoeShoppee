import { CustomError } from "../../utils/api-helper";

export interface Product {
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

export interface ProductListState {
  isLoading: boolean;
  errors: Errors;
  products: Product[] | null;
}

export enum ProductListActionTypes {
  GET_PRODUCT_LIST_REQUEST = "@@productList/GET_PRODUCT_LIST_REQUEST",
  GET_PRODUCT_LIST_SUCCESS = "@@productList/GET_PRODUCT_LIST_SUCCESS",
  GET_PRODUCT_LIST_ERROR = "@@productList/GET_PRODUCT_LIST_ERROR",
}
