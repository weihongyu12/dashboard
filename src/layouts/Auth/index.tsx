import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    height: '100%',
  },
}));

const Auth: FC = function Auth() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Suspense fallback={<LinearProgress />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Auth;
