import { v1 as uuid } from 'uuid';

// 学制
const studyModeValues = [
  '全日制',
  '非全日制',
];

const studyMode = studyModeValues.map((current) => ({
  id: uuid(),
  name: current,
}));

export default studyMode;
