import axios from 'utils/axios';
import { AccountUpdateRequest, ChangePasswordRequest } from 'types';

const accountService = {
  update: async (data: AccountUpdateRequest): Promise<void> => {
    try {
      const response = await axios.put('/api/account', {
        ...data,
      });
      if (response.status === 200) {
        return await Promise.resolve();
      }
      return await Promise.reject(Error(response.data.message));
    } catch (e) {
      return Promise.reject(Error('网络故障，请检查您的网络'));
    }
  },
  changePassword: async ({
    oldPassword,
    newPassword,
  }: ChangePasswordRequest): Promise<void> => {
    try {
      const response = await axios.put('/api/account/change-password', {
        oldPassword,
        newPassword,
      });
      if (response.status === 200) {
        return await Promise.resolve();
      }
      return await Promise.reject(Error(response.data.message));
    } catch (e) {
      return Promise.reject(Error('网络故障，请检查您的网络'));
    }
  },
};

export default accountService;
