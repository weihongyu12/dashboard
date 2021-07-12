import axios from 'utils/axios';
import { PaginationResponse, DepartmentParams, DepartmentResponse } from 'types';

const departmentService = {
  index: async ({
    page = 0,
    size = 10,
    ...args
  }: DepartmentParams = {}): Promise<PaginationResponse<DepartmentResponse[]>> => {
    try {
      const response = await axios.get('/api/department', {
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
};

export default departmentService;
