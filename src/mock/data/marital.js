import { v1 as uuid } from 'uuid';

// 健康状况
const maritalValues = [
  '未婚',
  '已婚',
  '初婚',
  '再婚',
  '复婚',
  '丧偶',
  '离婚',
  '未说明的婚姻状况',
];

const marital = maritalValues.map((current) => ({
  id: uuid(),
  name: current,
}));

export default marital;
