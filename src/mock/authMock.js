import { v1 as uuid } from 'uuid';
import mock from 'utils/mock';
import avatar from './images/avatar.jpg';

mock.onPost('/api/auth/login').reply(200, {
  accessToken: 'wtwXBuSNYvYiZPLQZAuTOucsZQx5My',
});

mock.onGet('/api/auth/user').reply(200, {
  id: uuid(),
  username: '魏宏裕',
  mobile: '13553377972',
  avatar,
  email: 'weihongyu12@126.com',
  role: 'ADMINISTRATOR',
  sex: '男',
  position: '高级Web前端工程师',
  github: 'https://github.com/weihongyu12',
  website: 'https://weihongyu.com',
});
