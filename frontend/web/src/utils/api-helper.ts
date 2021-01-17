import axios from "axios";
import requestConfig from "../config/request";

export type CustomError = {
  code?: number;
  message: string;
};

export const getCustomError = (err: any) => {
  let error: CustomError = {
    message: "An unknown error occured",
  };

  if (
    err.response &&
    err.response.data &&
    err.response.data.error &&
    err.response.data.message
  ) {
    error.code = err.response.data.error;
    error.message = err.response.data.message;
  } else if (!err.response && err.message) {
    error.message = err.message;
  }

  return error;
};

export const getFromLocalStorage = async (key: string) => {
  try {
    const serializedState = await localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveToLocalStorage = async (key: string, value: any) => {
  try {
    const serializedState = JSON.stringify(value);
    await localStorage.setItem(key, serializedState);
  } catch (err) {
    // Ignoring write error as of now
  }
};

export const clearFromLocalStorage = async (key: string) => {
  try {
    await localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

async function getRequestConfig(apiConfig?: any) {
  let config = Object.assign({}, requestConfig);
  // const session = await getFromLocalStorage("user");
  if (apiConfig) {
    config = Object.assign({}, requestConfig, apiConfig);
  }
  // if (session) {
  //   config.headers["Authorization"] = `${JSON.parse(session).token}`;
  // }
  return config;
}

export const get = async (url: string, params?: string, apiConfig?: any) => {
  const config = await getRequestConfig(apiConfig);
  config.params = params;
  const request = axios.get(url, config);
  return request;
};

export const post = async (url: string, data: any, apiConfig?: any) => {
  const config = await getRequestConfig(apiConfig);
  let postData = {};
  if (
    apiConfig &&
    apiConfig.headers &&
    apiConfig.headers["Content-Type"] &&
    apiConfig.headers["Content-Type"] !== "application/json"
  ) {
    postData = data;
    axios.defaults.headers.post["Content-Type"] =
      apiConfig.headers["Content-Type"];
  } else {
    postData = JSON.stringify(data);
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }
  const request = axios.post(url, postData, config);
  return request;
};

export const put = async (url: string, data: any) => {
  const config = await getRequestConfig();
  config.headers["Content-Type"] = "application/json";
  const request = axios.put(url, JSON.stringify(data), config);
  return request;
};

export const patch = async (url: string, data: any) => {
  const config = await getRequestConfig();
  config.headers["Content-Type"] = "application/json";
  const request = axios.patch(url, JSON.stringify(data), config);
  return request;
};

export const deleteResource = async (url: string) => {
  const config = await getRequestConfig();
  const request = axios.delete(url, config);
  return request;
};
