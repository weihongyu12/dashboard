import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';
import { makeStyles, createStyles } from '@mui/styles';
import clsx from 'clsx';

export interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles(() => createStyles({
  root: {},
}));

const Header: FC<HeaderProps> = ({ className = '' }) => {
  const classes = useStyles();

  return (
    <Stack
      className={clsx(classes, className)}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            color="inherit"
          >
            首页
          </Link>
          <Link
            component={RouterLink}
            to="/table-list"
            underline="hover"
            color="inherit"
          >
            页面
          </Link>
          <Typography color="textPrimary">用户</Typography>
        </Breadcrumbs>
        <Typography
          component="h1"
          variant="h3"
        >
          用户
        </Typography>
      </div>
      <Button
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
      >
        创建用户
      </Button>
    </Stack>
  );
};

export default Header;
