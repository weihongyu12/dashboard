import { v1 as uuid } from 'uuid';
import { format } from 'date-fns';
import mock from 'utils/mock';

mock.onGet('/api/person').reply(200, {
  data: [
    {
      id: uuid(),
      code: '0000065616',
      regJob: '前端',
      name: '李坤',
      gender: '男',
      mobile: '13503037150',
      amount: 1500,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'site',
    },
    {
      id: uuid(),
      code: '0000072770',
      regJob: '前端',
      name: '陈玉萍',
      gender: '女',
      mobile: '18344266367',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'site',
    },
    {
      id: uuid(),
      code: '0000073224',
      regJob: '前端',
      name: '苏嘉成',
      gender: '男',
      mobile: '15627861359',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'site',
    },
    {
      id: uuid(),
      code: '0000078637',
      regJob: '前端',
      name: '方泽旺',
      gender: '男',
      mobile: '15766507500',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'site',
    },
    {
      id: uuid(),
      code: '0000082736',
      regJob: '前端',
      name: '孙厚爽',
      gender: '男',
      mobile: '13570484158',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'office',
    },
    {
      id: uuid(),
      code: '0000084730',
      regJob: '前端',
      name: '涂松松',
      gender: '男',
      mobile: '18779104786',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'site',
    },
    {
      id: uuid(),
      code: '0000085353',
      regJob: '前端',
      name: '曹艳林',
      gender: '男',
      mobile: '18676839846',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'site',
    },
    {
      id: uuid(),
      code: '0000087295',
      regJob: '前端',
      name: '陈伟森',
      gender: '男',
      mobile: '15915861237',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'trip',
    },
    {
      id: uuid(),
      code: '0000087491',
      regJob: '前端',
      name: '何前强',
      gender: '男',
      mobile: '18379687456',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'office',
    },
    {
      id: uuid(),
      code: '0000087820',
      regJob: '前端',
      name: '魏宏裕',
      gender: '男',
      mobile: '13553377972',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'vacation',
    },
    {
      id: uuid(),
      code: '0000093831',
      regJob: '前端',
      name: '黄航',
      gender: '男',
      mobile: '18279599507',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'trip',
    },
    {
      id: uuid(),
      code: '0000100256',
      regJob: '前端',
      name: '欧阳发家',
      gender: '男',
      mobile: '18873259375',
      amount: 1200,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status: 'office',
    },
  ],
  meta: {
    total: 12,
    pages: 2,
  },
});

mock.onPost('/api/person').reply(200);

mock.onDelete(/\/api\/person\/*/).reply(204);
