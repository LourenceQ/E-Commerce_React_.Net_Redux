import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://localhost:7107/api/";

const responseBody = (response: AxiosResponse) => response.data;

interface ErrorResponse {
  title?: string;
}

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;

    if (response) {
      const { status } = response;
      const data = response.data as ErrorResponse;

      switch (status) {
        case 400:
          if(data) {
            const modelStateErrors: string[] = [];
            for (const key in data){
              if(data){
                modelStateErrors.push()
              }
            }
            throw modelStateErrors.flat();
          }
          toast.error(data || "Bad Request");
          break;
        case 401:
          toast.error(data.title || "Unauthorized");
          break;
        case 500:
          //history.push(pathname: "/server-error", state:{error:data})
          break;
        default:
          break;
      }

      return Promise.reject(response);
    }

    toast.error("Netwotk error or server not reachable");

    return Promise.reject(error);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => requests.get("products"),
  details: (id: number) => requests.get(`products/${id}`),
};

const TestErrors = {
  get400Error: () => requests.get("buggy/bad-request"),
  get401Error: () => requests.get("buggy/unauthorized"),
  get404Error: () => requests.get("buggy/not-found"),
  get500Error: () => requests.get("buggy/server-error"),
  getValidationError: () => requests.get("buggy/validation-error"),
};

const agent = {
  Catalog,
  TestErrors,
};

export default agent;
