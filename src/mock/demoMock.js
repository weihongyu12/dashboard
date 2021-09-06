import mock from 'utils/mock';
import job from './data/job';
import nationality from './data/nationality';
import polity from './data/polity';
import marital from './data/marital';
import health from './data/health';
import region from './data/region.json';
import education from './data/education';
import degree from './data/degree';
import studyMode from './data/studyMode';
import professionalTechnicalQualification from './data/professionalTechnicalQualification';
import relation from './data/relation';
import language from './data/language';

// 申请职位
mock.onGet('/api/demo/job').reply(200, job);

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
mock.onGet('/api/demo/studyMode').reply(200, studyMode);

// 专业技术资格
mock.onGet('/api/demo/professionalTechnicalQualification').reply(200, professionalTechnicalQualification);

// 关系
mock.onGet('/api/demo/relation').reply(200, relation);

// 语种
mock.onGet('/api/demo/language').reply(200, language);
