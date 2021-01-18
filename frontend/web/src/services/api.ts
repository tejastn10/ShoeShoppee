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
  console.log({ name, email, password });

  return API.post(URL, { name, email, password });
};
