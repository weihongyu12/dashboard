import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Page from '../../components/Page';
import AuthGuard from '../../components/AuthGuard';
import Basic from './components/Basic';
import Highest from './components/Highest';
import Education from './components/Education';
import Job from './components/Job';
import Academic from './components/Academic';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  top: {
    marginTop: theme.spacing(2),
  },
}));

function Formpage(props) {
  const classes = useStyles();
  return (
    <AuthGuard roles={['ADMINISTRATOR']}>
      <Page title="应聘信息" className={classes.root}>
        <Basic />
        <Highest />
        <Education />
        <Job />
        <Academic />
        <Grid container justify="center" direction="row">
          <Grid item>
            <Button className={classes.top} color="primary" variant="contained">提交表单</Button>
          </Grid>
        </Grid>
      </Page>
    </AuthGuard>

  );
}

Formpage.propTypes = {

};

export default Formpage;
