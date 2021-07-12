import mock from 'utils/mock';
import { v1 as uuid } from 'uuid';

mock.onGet('/api/department').reply(200, {
  data: [
    {
      id: uuid(),
      code: '123456',
      name: '医疗交付ABU',
    },
  ],
  meta: {
    total: 1,
    pages: 1,
  },
});
