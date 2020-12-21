type RequestConfig = {
  url: string;
  method:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | undefined;
  baseURL: string;
  transformRequest: any[];
  transformResponse: any[];
  headers: any;
  params: any;
  timeout: number;
  withCredentials: boolean;
  responseType:
    | "json"
    | "arraybuffer"
    | "blob"
    | "document"
    | "text"
    | "stream"
    | undefined;
  maxContentLength: number;
  validateStatus: (status: number) => boolean;
  maxRedirects: number;
};

const requestConfig: RequestConfig = {
  url: "",
  method: "get", // default
  baseURL: "",
  transformRequest: [
    function transformRequest(data: any) {
      // Do whatever you want to transform the data
      return data;
    },
  ],
  transformResponse: [
    function transformResponse(data: any) {
      // Do whatever you want to transform the data
      return data;
    },
  ],
  headers: {},
  params: {},
  timeout: 330000,
  withCredentials: false, // default
  responseType: "json", // default
  maxContentLength: 50000,
  validateStatus(status) {
    return status >= 200 && status < 300; // default
  },
  maxRedirects: 5, // default
};

export default requestConfig;
