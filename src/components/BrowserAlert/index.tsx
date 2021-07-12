import React, { FC } from 'react';
import { Link } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';

export interface BrowserAlertProps {
  /**
   * 组件样式
   */
  className?: string;
}

const useStyles = makeStyles(() => createStyles({
  root: {},
  link: {
    fontWeight: 700,
  },
}));

const BrowserAlert: FC<BrowserAlertProps> = ({ className = '' }) => {
  const classes = useStyles();

  const isMsIE = /MSIE|Trident/i.test(navigator.userAgent);

  return isMsIE ? (
    <Alert
      severity="warning"
      className={clsx(classes.root, className)}
    >
      <AlertTitle>提示</AlertTitle>
      为了获得更好的浏览体验和安全性，建议您升级或安装最新版的
      {' '}
      <Link
        href="https://www.microsoft.com/zh-cn/edge"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Microsoft Edge
      </Link>
      、
      <Link
        href="https://www.google.cn/intl/zh-CN/chrome/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Google Chrome
      </Link>
      {' '}
      或
      {' '}
      <Link
        href="https://www.mozilla.org/zh-CN/firefox/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Mozilla Firefox
      </Link>
      浏览器
    </Alert>
  ) : null;
};

export default BrowserAlert;
