import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Breadcrumbs,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

const Header = (props) => {
  const { className } = props;
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
            <Typography color="textPrimary">Hello World</Typography>
          </Breadcrumbs>
          <Typography
            component="h1"
            variant="h3"
          >
            Hello World
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};

export default Header;
