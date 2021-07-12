import axios from 'utils/axios';
import {
  UserInfo,
  LoginParams,
  LoginResponse,
  LogoutResponse,
} from 'types';

const authService = {
  login: async ({
    username,
    password,
  }: LoginParams): Promise<LoginResponse> => {
    try {
      const data = JSON.stringify({
        username,
        password,
      });
      const token = window.btoa(data);
      const response = await axios.post('/api/auth/login', { token }, {
        headers: {
          Authorization: 'Basic c2VydmljZS1oaToxMjM0NTY=',
        },
      });
      if (response.status === 200) {
        return await Promise.resolve(response.data);
      }
      return await Promise.reject(Error(response.data.message));
    } catch (e) {
      return Promise.reject(Error('网络故障，请检查您的网络'));
    }
  },
  logout: async (): Promise<LogoutResponse> => {
    try {
      const response = await axios.post('/api/auth/login');
      if (response.status === 200) {
        return await Promise.resolve(response.data.message);
      }
      return await Promise.reject(Error(response.data.message));
    } catch (e) {
      return Promise.reject(Error('网络故障，请检查您的网络'));
    }
  },
  register: () => {},
  user: async (): Promise<UserInfo> => {
    try {
      const response = await axios.get('/api/auth/user');
      if (response.status === 200) {
        return await Promise.resolve(response.data);
      }
      return await Promise.reject();
    } catch (e) {
      return Promise.reject();
    }
  },
};

export default authService;
