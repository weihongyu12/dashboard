import { v1 as uuid } from 'uuid';

// 政治面貌
const polityValues = [
  '中国共产党党员',
  '中国共产党预备党员',
  '中国共产主义青年团团员',
  '中国国民党革命委员会会员',
  '中国民主同盟盟员',
  '中国民主建国会会员',
  '中国民主促进会会员',
  '中国农工民主党党员',
  '中国致公党党员',
  '九三学社社员',
  '台湾民主自治同盟盟员',
  '无党派民主人士',
  '群众',
];

const polity = polityValues.map((current) => ({
  id: uuid(),
  name: current,
}));

export default polity;
