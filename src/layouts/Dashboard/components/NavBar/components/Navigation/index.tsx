/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, FC, ElementType } from 'react';
import { __RouterContext } from 'react-router';
import { Typography, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Pages } from 'types';
import NavigationList from './components/NavigationList';

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

const Navigation: FC<NavigationProps> = ({
  pages,
  title = '',
  className = '',
  component: Component = 'nav',
  ...rest
}) => {
  const classes = useStyles();
  const router = useContext(__RouterContext);

  return (
    <Component
      {...rest}
      className={clsx(classes.root, className)}
    >
      {title && <Typography variant="overline">{title}</Typography>}
      <NavigationList
        depth={0}
        pages={pages}
        router={router}
      />
    </Component>
  );
};

export default Navigation;
