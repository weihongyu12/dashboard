import React, { FC, ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

export interface LabelProps {
  children: ReactNode;
  /**
   * 组件样式
   */
  className?: string;
  /**
   * 颜色
   */
  color?: string;
  /**
   * 形状
   *
   * - `square` 方形
   * - `rounded` 圆角矩形
   */
  shape?: 'square' | 'rounded';
  /**
   * @ignore
   */
  style?: CSSProperties;
  /**
   * 变体
   *
   * - `contained` 实心
   * - `outlined` 空心
   */
  variant?: 'contained' | 'outlined';
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    lineHeight: '10px',
    fontSize: '10px',
    height: 20,
    minWidth: 20,
    whiteSpace: 'nowrap',
    padding: theme.spacing(0.5, 1),
  },
  rounded: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5),
  },
}));

const Label: FC<LabelProps> = ({
  className = '',
  variant = 'contained',
  color = grey[600],
  shape = 'rounded',
  children = null,
  style = {},
}) => {
  const classes = useStyles();

  const rootClassName = clsx(
    {
      [classes.root]: true,
      [classes.rounded]: shape === 'rounded',
    },
    className,
  );

  const finalStyle = { ...style };

  if (variant === 'contained') {
    finalStyle.backgroundColor = color;
    finalStyle.color = '#fff';
  } else {
    finalStyle.border = `1px solid ${color}`;
    finalStyle.color = color;
  }

  return (
    <Typography
      className={rootClassName}
      style={finalStyle}
      variant="overline"
      data-testid="label"
    >
      {children}
    </Typography>
  );
};

export default Label;
