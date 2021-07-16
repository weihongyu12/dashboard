import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AuthGuard, Page } from 'components';
import Basic from './components/Basic';
import Education from './components/Education';
import EudcationExperience from './components/EducationExperience';
import Work from './components/Work';
import Academic from './components/Academic';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));
const Recruitment = () => {
  const classes = useStyles();
  return (
    <form>
      <AuthGuard roles={['ADMINISTRATOR']}>
        <Page title="招聘表" className={classes.root}>
          <Basic className={classes.content} />
          <Education className={classes.content} />
          <EudcationExperience />
          <Work />
          <Academic />
          <Grid container justify="center">
            <Grid item>
              <Button className={classes.content} variant="contained" color="primary">提交表单</Button>
            </Grid>
          </Grid>
        </Page>
      </AuthGuard>
    </form>
  );
};
export default Recruitment;
