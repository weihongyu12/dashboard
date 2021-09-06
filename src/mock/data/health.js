import { v1 as uuid } from 'uuid';

// 健康状况
const healthValues = [
  '健康或良好',
  '一般或较弱',
  '有慢性病',
  '残疾',
];

const health = healthValues.map((current) => ({
  id: uuid(),
  name: current,
}));

export default health;
