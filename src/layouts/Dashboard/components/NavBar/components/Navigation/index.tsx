/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ElementType } from 'react';
import { Typography, Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import clsx from 'clsx';
import { Pages } from 'types';
import { NavigationList } from './components';

export interface NavigationProps {
  pages: Pages[];
  className?: string;
  component?: ElementType;
  title?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const Navigation: FC<NavigationProps> = function Navigation({
  pages,
  title = '',
  className = '',
  component: Component = 'nav',
  ...rest
}) {
  const classes = useStyles();

  return (
    <Component
      {...rest}
      className={clsx(classes.root, className)}
    >
      {title && <Typography variant="overline">{title}</Typography>}
      <NavigationList
        depth={0}
        pages={pages}
      />
    </Component>
  );
};

export default Navigation;
