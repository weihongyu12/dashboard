import { v1 as uuid } from 'uuid';

const professionalTechnicalQualificationValues = [
  '高等学校教师',
  '教授',
  '副教授',
  '讲师(高校)',
  '助教(高校)',
  '中等专业学校教师',
  '高级讲师(中专)',
  '讲师(中专)',
  '助理讲师(中专)',
  '教员(中专)',
  '技工学校教师',
  '高级讲师(技校)',
  '讲师(技校)',
  '助理讲师(技校)',
  '教员(技校)',
  '技工学校教师(实习指导)',
  '高级实习指导教师',
  '一级实习指导教师',
  '二级实习指导教师',
  '三级实习指导教师',
  '中学教师',
  '高级教师(中学)',
  '一级教师(中学)',
  '二级教师(中学)',
  '三级教师(中学)',
  '实验技术人员',
  '高级实验师',
  '实验师',
  '助理实验师',
  '实验员',
  '工程技术人员',
  '高级工程师',
  '工程师',
  '助理工程师',
  '技术员',
  '农业技术人员(农艺)',
  '农业技术推广研究员(农艺)',
  '高级农艺师',
  '农艺师',
  '助理农艺师',
  '农业技术员',
  '农业技术人员(兽医)',
  '农业技术推广研究员(兽医)',
  '高级兽医师',
  '兽医师',
  '助理兽医师',
  '兽医技术员',
  '农业技术人员(畜牧)',
  '农业技术推广研究员(畜牧)',
  '高级畜牧师',
  '畜牧师',
  '助理畜牧师',
  '畜牧技术员',
  '经济专业人员',
  '高级经济师',
  '经济师',
  '助理经济师',
  '经济员',
  '会计专业人员',
  '高级会计师',
  '会计师',
  '助理会计师',
  '会计员',
  '统计专业人员',
  '高级统计师',
  '统计师',
  '助理统计师',
  '统计员',
  '出版专业人员(编审)',
  '编审',
  '副编审',
  '编辑',
  '助理编辑',
  '出版专业人员(技术编辑)',
  '技术编辑',
  '助理技术编辑',
  '技术设计员',
  '出版专业人员(校对)',
  '一级校对',
  '二级校对',
  '三级校对',
  '翻译人员',
  '译审',
  '副译审',
  '翻译',
  '助理翻译',
  '新闻专业人员〔记者)',
  '高级记者',
  '主任记者',
  '记者',
  '助理记者',
  '新闻专业人员(编辑)',
  '高级编辑',
  '主任编辑',
  '编辑(新闻)',
  '助理编辑(新闻)',
  '播音员',
  '播音指导',
  '主任播音员',
  '一级播音员',
  '二级播音员',
  '三级播音员',
  '卫生技术人员(医师)',
  '主任医师',
  '副主任医师',
  '主治医师',
  '医师',
  '医士',
  '卫生技术人员(药剂)',
  '主任药师',
  '副主任药师',
  '主管药师',
  '药师',
  '药士', '卫生技术人员(护理)',
  '主任护师',
  '副主任护师',
  '主管护师',
  '护师',
  '护士',
  '卫生技术人员(技师)',
  '主任技师',
  '副主任技师', ''
  + '主管技师',
  '技师',
  '技士',
  '工艺美术人员',
  '高级工艺美术师',
  '工艺美术师',
  '助理工艺美术师',
  '工艺美术员',
  '艺术人员(演员)',
  '一级演员',
  '二级演员',
  '三级演员',
  '四级演员',
  '艺术人员(演奏员)',
  '一级演奏员',
  '二级演奏员',
  '三级演奏员',
  '四级演奏员',
  '艺术人员(编剧)',
  '一级编剧',
  '二级编剧',
  '三级编剧',
  '四级编剧',
  '艺术人员(导演)',
  '一级导演',
  '二级导演',
  '三级导演',
  '船长(大副)',
  '二副',
  '三副',
  '船舶技术人员(轮机)',
  '高级轮机长',
  '轮机长(大管轮)',
  '二管轮',
  '三管轮',
  '船舶技术人员(电机)',
  '二等电机员',
  '高级电机员',
  '通用电机员(一等电机员)',
  '船舶技术人员(报务)',
  '高级报务员',
  '通用报务员',
  '二等报务员',
  '限用报务员',
  '飞行技术人员(驾驶)',
  '一级飞行员',
  '二级飞行员',
  '三级飞行员',
  '四级飞行员',
  '飞行技术人员(领航)',
  '一级领航员',
  '二级领航员',
  '三级领航员',
  '四级领航员',
  '飞行技术人员(通信)',
  '一级飞行通信员',
  '二级飞行通信员',
  '三级飞行通信员',
  '四级飞行通信员',
  '七行技术人员(机械)',
  '一级飞行机械员',
  '二级飞行机械员',
  '三级芍行机械员',
  '四级飞行机械员',
  '船舶技术人员(引航)',
  '高级引航员',
  '一、二级引航员',
  '三、四级引航员',
  '自然科学研究人员',
  '研究员(自然科学)',
  '副研究员(自然科学)',
  '助理研究员(自然科学)',
  '研究实习员(自然科学)',
  '社会科学研究人员',
  '研究员(社会科学)',
  '副研究员(社会科学)',
  '助理研究员(社会科学)',
  '研究实习员(社会科学)',
  '图书、资料专业人员',
  '研究馆员(图书)',
  '副研究馆员(图书)',
  '馆员(图书)',
  '助理馆员(图书)',
  '管理员(图书)',
  '文博专业人员',
  '研究馆员(文博)',
  '副研究馆员(文博)',
  '馆员(文博)',
  '助理馆员(文博)',
  '管理员(文博)',
  '档案专业人员',
  '研究馆员(档案)',
  '副研究馆员(档案)',
  '馆员(档案)',
  '助理馆员(档案)',
  '管理员(档案)',
  '群众文化专业人员',
  '研究馆员(群众文化)',
  '副研究馆员(群众文化)',
  '馆员(群众文化)',
  '助理馆员(群众文化)',
  '管理员(群众文化)',
  '审计专业人员',
  '高级审计师',
  '审计师',
  '助理审计师',
  '审计员',
  '法医专业人员',
  '主任法医师',
  '副主任法医师',
  '主检法医师',
  '法医师',
  '法医士',
  '思想政治工作人员',
  '高级政工师',
  '政工师',
  '助理政工师',
  '政工员',
];

const professionalTechnicalQualification = professionalTechnicalQualificationValues
  .map((current) => ({
    id: uuid(),
    name: current,
  }));

export default professionalTechnicalQualification;
