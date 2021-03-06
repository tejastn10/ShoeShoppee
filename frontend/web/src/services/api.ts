import config from "../config/app";
import * as API from "../utils/api-helper";

const { isProd } = config;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

export const fetchProductList: any = () => {
  const URL = `${API_ENDPOINT}/api/products`;

  return API.get(URL);
};

export const searchProduct: any = ({ keyword = "" }: any) => {
  const URL = `${API_ENDPOINT}/api/products/search?keyword=${keyword}`;

  return API.get(URL);
};

export const fetchProductDetails: any = (id: string) => {
  const URL = `${API_ENDPOINT}/api/products/${id}`;

  return API.get(URL);
};

export const loginUser: any = ({ email, password }: any) => {
  const URL = `${API_ENDPOINT}/api/users/login`;

  return API.post(URL, { email, password });
};

export const registerUser: any = ({ name, email, password }: any) => {
  const URL = `${API_ENDPOINT}/api/users`;

  return API.post(URL, { name, email, password });
};

export const fetchUserProfile: any = () => {
  const URL = `${API_ENDPOINT}/api/users/profile`;

  return API.get(URL);
};

export const updateUserProfile: any = ({ name, email, password }: any) => {
  const URL = `${API_ENDPOINT}/api/users/profile`;

  return API.put(URL, { name, email, password });
};

export const createOrder: any = (order: any) => {
  const URL = `${API_ENDPOINT}/api/orders`;

  return API.post(URL, order);
};

export const getOrder: any = (id: any) => {
  const URL = `${API_ENDPOINT}/api/orders/${id}`;

  return API.get(URL);
};

export const getOrderList: any = () => {
  const URL = `${API_ENDPOINT}/api/orders/all`;

  return API.get(URL);
};

export const getUsers: any = () => {
  const URL = `${API_ENDPOINT}/api/users`;

  return API.get(URL);
};

export const createProduct: any = (product: any) => {
  const URL = `${API_ENDPOINT}/api/products`;

  return API.post(URL, product);
};

export const updateUserPrivilege: any = ({ id, isAdmin }: any) => {
  const URL = `${API_ENDPOINT}/api/users/${id}`;

  return API.put(URL, { isAdmin });
};

export const updateProduct: any = ({ id, count, price }: any) => {
  const URL = `${API_ENDPOINT}/api/products/${id}`;

  return API.put(URL, { count, price });
};

export const deleteUser: any = (id: string) => {
  const URL = `${API_ENDPOINT}/api/users/${id}`;

  return API.deleteResource(URL);
};

export const deleteProduct: any = (id: string) => {
  const URL = `${API_ENDPOINT}/api/products/${id}`;

  return API.deleteResource(URL);
};

export const getOrders: any = () => {
  const URL = `${API_ENDPOINT}/api/orders`;

  return API.get(URL);
};

export const updateOrder: any = (id: string) => {
  const URL = `${API_ENDPOINT}/api/orders/${id}/p&d`;

  return API.put(URL, {});
};

export const createReview: any = ({ id, rating, comment }: any) => {
  const URL = `${API_ENDPOINT}/api/products/${id}/review`;

  return API.post(URL, { rating, comment });
};
