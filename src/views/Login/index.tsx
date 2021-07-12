import React, { useEffect, FC } from 'react';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
  Theme,
} from '@material-ui/core';
import { Lock as LockIcon } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import qs from 'qs';
import { format } from 'date-fns';
import { Page, BrowserAlert } from 'components';
import gradients from 'utils/gradients';
import LoginForm from './components/LoginForm';
import ImageAuth from './assets/auth.png';

const { REACT_APP_TITLE } = process.env;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5, 2),
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  icon: {
    backgroundImage: gradients.green,
    color: '#fff',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32,
  },
  loginForm: {
    marginTop: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  copyright: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
}));

const Login: FC = () => {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { search } = location;

    if (search) {
      const querystring = search.replace('?', '');
      const { redirect } = qs.parse(querystring);
      if (redirect === '/auth/login') {
        history.replace('/auth/login');
      }
    }
  }, [history, location, location.search]);

  return (
    <Page
      className={classes.root}
      title="登录"
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography
            gutterBottom
            variant="h3"
          >
            登录
          </Typography>
          <Typography variant="subtitle2">
            {REACT_APP_TITLE}
          </Typography>
          <BrowserAlert />
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/register"
            underline="always"
            variant="subtitle2"
          >
            还没有帐号？
          </Link>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={ImageAuth}
        >
          <div className={classes.copyright}>
            <div>
              <Typography
                color="inherit"
                variant="body2"
              >
                Copyright &copy;
                {' '}
                {format(new Date(), 'yyyy')}
                {' '}
                weihongyu12 保留所有权利
              </Typography>
            </div>
          </div>
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Login;
