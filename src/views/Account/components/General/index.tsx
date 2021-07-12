import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { ProfileDetails, GeneralDetails } from './components';

export interface GeneralProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {},
}));

const General: FC<GeneralProps> = ({ className = '' }) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <ProfileDetails />
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={12}
      >
        <GeneralDetails />
      </Grid>
    </Grid>
  );
};

export default General;
