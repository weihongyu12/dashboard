import { v1 as uuid } from 'uuid';

// 学位
const degreeValues = [
  '无学位',
  '名誉博士',
  '博士',
  '硕士',
  '学士',
  '境外学位',
];

const degree = degreeValues.map((current) => ({
  id: uuid(),
  name: current,
}));

export default degree;
