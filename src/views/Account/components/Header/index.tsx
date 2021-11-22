import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Breadcrumbs,
  Link,
  Typography,
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import clsx from 'clsx';

export interface HeaderProps {
  className?: string,
}

const useStyles = makeStyles(() => createStyles({
  root: {},
}));

const Header: FC<HeaderProps> = function Header({ className = '' }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="hover"
        >
          首页
        </Link>
        <Typography
          color="textPrimary"
        >
          个人中心
        </Typography>
      </Breadcrumbs>
      <Typography
        component="h1"
        variant="h3"
      >
        个人中心
      </Typography>
    </div>
  );
};

export default Header;
