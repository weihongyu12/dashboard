import React, { FC, ReactNode } from 'react';
import { Typography, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import hexToRgba from 'utils/hexToRgba';

export interface TagProps {
  children: ReactNode;
  /**
   * 颜色
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    cursor: 'default',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    flexGrow: 0,
    borderRadius: 2,
    minWidth: 20,
    height: 20,
    padding: theme.spacing(0.5, 1),
    fontSize: 12,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  primary: {
    color: theme.palette.primary.main,
    backgroundColor: hexToRgba(theme.palette.primary.main, 0.08),
  },
  secondary: {
    color: theme.palette.secondary.main,
    backgroundColor: hexToRgba(theme.palette.secondary.main, 0.08),
  },
  success: {
    color: theme.palette.success.main,
    backgroundColor: hexToRgba(theme.palette.success.main, 0.08),
  },
  warning: {
    color: theme.palette.warning.main,
    backgroundColor: hexToRgba(theme.palette.warning.main, 0.08),
  },
  error: {
    color: theme.palette.error.main,
    backgroundColor: hexToRgba(theme.palette.error.main, 0.08),
  },
  info: {
    color: theme.palette.info.main,
    backgroundColor: hexToRgba(theme.palette.info.main, 0.08),
  },
}));

const Tag: FC<TagProps> = ({
  color = 'primary',
  children,
}) => {
  const classes = useStyles();

  return (
    <Typography
      component="span"
      className={clsx(classes.root, classes[color])}
      data-testid="tag"
    >
      {children}
    </Typography>
  );
};

export default Tag;
