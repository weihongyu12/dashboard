import {
  HomeOutlined as HomeIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  ReceiptOutlined as ReceiptOutlinedIcon,
  DonutLargeOutlined as DonutLargeOutlinedIcon,
  EmojiPeople as EmojiPeopleIcon,
  Dashboard as DashboardIcon,
  ListAlt as ListAltIcon,
} from '@material-ui/icons';
import { NavigationConfig } from 'types';

// GENERAL_USER 普通用户
// ADMINISTRATOR 超级管理员

const navigationConfig: NavigationConfig = [
  {
    title: '',
    pages: [
      {
        title: '首页',
        href: '/home',
        icon: HomeIcon,
        permission: ['GENERAL_USER', 'ADMINISTRATOR'],
      },
      {
        title: '表格列表',
        href: '/table-list',
        icon: ReceiptOutlinedIcon,
        permission: ['GENERAL_USER', 'ADMINISTRATOR'],
      },
      {
        title: '个人中心',
        href: '/account',
        icon: AccountCircleOutlinedIcon,
        permission: ['GENERAL_USER', 'ADMINISTRATOR'],
        children: [
          {
            title: '个人信息',
            href: '/account/general',
            permission: ['GENERAL_USER', 'ADMINISTRATOR'],
          },
          {
            title: '修改密码',
            href: '/account/security',
            permission: ['GENERAL_USER', 'ADMINISTRATOR'],
          },
          {
            title: '我的消息',
            href: '/account/notice',
            permission: ['GENERAL_USER', 'ADMINISTRATOR'],
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
