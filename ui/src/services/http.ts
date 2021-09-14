import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'api/v1',
};

const http: AxiosInstance = axios.create(axiosConfig);

// configure all common headers:
http.defaults.headers['Content-Type'] = 'application/json';

http.interceptors.response.use(successHandler, errorHandler);

export default http;

function successHandler(response: AxiosResponse) {
  // This can be modified based on status code if needed.
  return response;
}

function errorHandler(error: AxiosError) {
  if (!error.response) {
    return Promise.reject(error);
  }

  switch (error.response.status) {
    case 403: // Forbidden - don't log
      break;
  }

  return Promise.reject(error);
}
