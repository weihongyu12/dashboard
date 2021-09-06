import { v1 as uuid } from 'uuid';

// 关系
const relationValues = [
  '丈夫',
  '妻子',
  '儿子',
  '女儿',
  '父亲',
  '母亲',
  '哥哥',
  '弟弟',
  '姐姐',
  '妹妹',
  '公公',
  '婆婆',
  '岳父',
  '岳母',
  '祖父',
  '祖母',
  '外祖父',
  '外祖母',
  '曾祖父',
  '曾祖母',
  '姨父',
  '姨母',
  '舅父',
  '叔父',
  '嫂子',
  '妹夫',
  '姐夫',
  '孙子',
  '孙女',
  '继母或者养女',
  '姑母',
  '继父或养父',
  '姑父',
  '其他',
];

const relation = relationValues.map((current) => ({
  id: uuid(),
  name: current,
}));

export default relation;
