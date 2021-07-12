import { v1 as uuid } from 'uuid';
import mock from 'utils/mock';
import rmjob from './data/rmjob.json';
import nationality from './data/nationality.json';
import polity from './data/polity.json';
import marital from './data/marital.json';
import health from './data/health.json';
import region from './data/region.json';
import education from './data/education.json';
import degree from './data/degree.json';
import studymode from './data/studymode.json';
import titletechpost from './data/titletechpost.json';
import relation from './data/relation.json';
import clagsort from './data/clagsort.json';

mock.onGet('/api/demo')
  .reply(200, [
    {
      id: uuid(),
      regJob: 'web前端工程师',
      name: '魏宏裕',
      gender: '男',
      birthdate: '1992-01-09',
      school: '广东科学技术职业学院',
      major: '软件工程',
      education: '大专',
      studymode: '全日制',
      degree: '无学位',
    },
  ]);

// 申请职位
mock.onGet('/api/demo/rmjob').reply(200, rmjob);

// 民族
mock.onGet('/api/demo/nationality').reply(200, nationality);

// 政治面貌
mock.onGet('/api/demo/polity').reply(200, polity);

// 婚姻情况
mock.onGet('/api/demo/marital').reply(200, marital);

// 健康状况
mock.onGet('/api/demo/health').reply(200, health);

// 籍贯
mock.onGet('/api/demo/region').reply(200, region);

// 学历
mock.onGet('/api/demo/education').reply(200, education);

// 学位
mock.onGet('/api/demo/degree').reply(200, degree);

// 学制
mock.onGet('/api/demo/studymode').reply(200, studymode);

// 专业技术资格
mock.onGet('/api/demo/titletechpost').reply(200, titletechpost);

// 关系
mock.onGet('/api/demo/relation').reply(200, relation);

// 语种
mock.onGet('/api/demo/clagsort').reply(200, clagsort);
