import React, { FC, Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { LinearProgress } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    height: '100%',
  },
}));

const Auth: FC<RouteConfigComponentProps> = function Auth({ route }) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Suspense fallback={<LinearProgress />}>
        {route?.routes && renderRoutes(route.routes)}
      </Suspense>
    </main>
  );
};

export default Auth;
