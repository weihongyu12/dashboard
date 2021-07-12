import axios from 'utils/axios';
import {
  BaseResponse,
  MessageResponse,
  MessageIndexRequest,
  MessageUpdateRequest,
} from 'types';

const messageService = {
  index: async ({
    page = 1,
    perPage = 10,
  }: MessageIndexRequest = {}): Promise<MessageResponse> => {
    try {
      const response = await axios.get('/api/message', {
        params: {
          page,
          perPage,
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
  update: async (id: string, data: MessageUpdateRequest): Promise<BaseResponse> => {
    try {
      const response = await axios.put(`/api/message/${id}`, data);
      if (response.status === 200) {
        return await Promise.resolve(response.data);
      }
      return await Promise.reject(Error(response.data.message));
    } catch (e) {
      return Promise.reject(Error('网络故障，请检查您的网络'));
    }
  },
};

export default messageService;
