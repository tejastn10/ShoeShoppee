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
