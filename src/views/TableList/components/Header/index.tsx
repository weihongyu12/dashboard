import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Typography,
  Theme,
} from '@material-ui/core';
import { AddCircleOutline as AddCircleOutlineIcon } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';

export interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

const Header: FC<HeaderProps> = ({ className = '' }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Grid container justify="space-between">
        <Grid item>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
            >
              首页
            </Link>
            <Link
              component={RouterLink}
              to="/table-list"
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
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
          >
            创建用户
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
