import axios, { AxiosInstance, AxiosError } from 'axios';
import qs from 'qs';

const { REACT_APP_API_HOST, REACT_APP_WEB_HOST } = process.env;

const instance: AxiosInstance = axios.create({
  baseURL: REACT_APP_API_HOST,
  validateStatus(status) {
    return status >= 200 && status < 500; // default
  },
});

instance.interceptors.request.use((config) => {
  const tokenType = localStorage.getItem('tokenType');
  const accessToken = localStorage.getItem('accessToken');

  return {
    ...config,
    paramsSerializer(params) {
      return qs.stringify(params, { arrayFormat: 'brackets', format: 'RFC3986' });
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      Authorization: (tokenType && accessToken) && `${tokenType} ${accessToken}`,
      ...config.headers,
    },
  };
}, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => {
  if (response.status === 401) {
    if (REACT_APP_WEB_HOST) {
      const router = window.location.pathname.replace(REACT_APP_WEB_HOST, '');
      window.location.href = `/auth/login?redirect=${router}`;
    } else {
      window.location.href = `/auth/login?redirect=${window.location.pathname}`;
    }
  }
  return response;
}, (error: AxiosError) => {
  if (error?.response?.status === 401) {
    window.location.href = '/auth/login';
  }
  return Promise.reject(error);
});

export default instance;
