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
