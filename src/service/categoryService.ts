import axios from 'utils/axios';
import { CategoryIndexRequest, CategoryIndexResponse } from 'types';

const categoryService = {
  index: async ({
    page = 0,
    perPage = 10,
    ...params
  }: CategoryIndexRequest = {}): Promise<CategoryIndexResponse> => {
    try {
      const response = await axios.get('/api/categories', {
        params: {
          page,
          perPage,
          ...params,
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
};

export default categoryService;
