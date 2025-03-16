import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';

export const http = axios.create({
  baseURL: 'http://34.142.180.62:8080/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(async (request: InternalAxiosRequestConfig) => {
  request.headers.Authorization = `Bearer `;
  return request;
});

const handleError = (error: AxiosError) => {
  console.log(error, 'error');
  return toast.error(error.message || 'Something went wrong');
};

http.interceptors.response.use(null, async (error) => {
  return Promise.reject(handleError(error));
});
