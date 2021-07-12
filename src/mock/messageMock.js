import { v1 as uuid } from 'uuid';
import mock from 'utils/mock';

mock.onGet('/api/message').reply(200, {
  data: [],
  meta: {
    total: 0,
    pages: 0,
  },
});

mock.onPut(/\/api\/message\/d+/).reply(200, {
  id: uuid(),
});
