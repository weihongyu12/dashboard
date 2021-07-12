import { isArray } from 'lodash';
import axios from 'utils/axios';
import {
  PaginationResponse,
  PersonResponse,
  PersonRequest,
  StatusType,
} from 'types';

const personService = {
  index: async ({
    page = 0,
    size = 10,
    ...args
  }: PersonRequest = {}): Promise<PaginationResponse<PersonResponse[]>> => {
    try {
      const response = await axios.get('/api/person', {
        params: {
          page,
          size,
          ...args,
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
  destroy: async (id: string | string[]): Promise<void> => {
    try {
      let params = id;
      if (isArray(id)) {
        params = id.join(',');
      }
      const response = await axios.delete(`/api/person/${params}`);
      if (response.status === 204) {
        return await Promise.resolve();
      }
      return await Promise.reject(Error(response.data.message));
    } catch (e) {
      return Promise.reject(Error('网络故障，请检查您的网络'));
    }
  },
  mark: async (ids: string[], status: StatusType): Promise<void> => {
    try {
      const response = await axios.post('/api/person', {
        ids,
        status,
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

export default personService;
