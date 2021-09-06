import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'v1',
};

const http: AxiosInstance = axios.create(axiosConfig);

// configure all common headers:
http.defaults.headers['Content-Type'] = 'application/json';

export default http;
