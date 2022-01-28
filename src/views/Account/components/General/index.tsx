import React, { FC } from 'react';
import { Grid, GridProps } from '@mui/material';
import { ProfileDetails, GeneralDetails } from './components';

const General: FC<GridProps> = function General({ sx = {} }) {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        ...sx,
      }}
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
