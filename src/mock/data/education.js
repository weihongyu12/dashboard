import { v1 as uuid } from 'uuid';

// 学历
const educationValues = [
  '博士研究生',
  '硕士研究生',
  '大学本科',
  '专科',
  '中专',
  '职高',
  '技校',
  '高中',
  '初中',
  '小学',
  '其他',
];

const education = educationValues.map((current) => ({
  id: uuid(),
  name: current,
}));

export default education;
