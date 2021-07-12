import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { format } from 'date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { useAppSelector } from 'store';
import { AuthGuard, Page } from 'components';
import { ReactComponent as HappySvg } from './assets/undraw_happy_2021_h01d.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(8, 3),
  },
  welcome: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  svg: {
    width: 491,
    height: 297,
    maxWidth: '100%',
  },
}));

const Home: FC = () => {
  const classes = useStyles();

  const session = useAppSelector((state) => state.session);

  return (
    <AuthGuard roles={['ADMINISTRATOR']}>
      <Page title="工作台" className={classes.root}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item className={classes.welcome}>
            <Typography
              component="h1"
              variant="h3"
            >
              {format(new Date(), 'bbbb', { locale: zhHansLocale })}
              好，
              {' '}
              {session?.user?.username}
            </Typography>
            <Typography
              variant="h4"
            >
              欢迎登录
            </Typography>
          </Grid>
          <Grid item>
            <HappySvg className={classes.svg} />
          </Grid>
        </Grid>
      </Page>
    </AuthGuard>
  );
};

export default Home;
