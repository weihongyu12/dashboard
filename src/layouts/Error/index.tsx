import React, { FC, Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { LinearProgress } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    height: '100%',
  },
}));

const Error: FC<RouteConfigComponentProps> = ({ route }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Suspense fallback={<LinearProgress />}>
        {route?.routes && renderRoutes(route.routes)}
      </Suspense>
    </main>
  );
};

export default Error;
