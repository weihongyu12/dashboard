import React from 'react';
import PropTypes from 'prop-types';
/* import {
  Card,
  CardActions,
  Typography,
  CardContent,
} from '@material-ui/core'; */
import { makeStyles } from '@material-ui/styles';
import Page from '../../components/Page';

function Cardlist(props) {
  return (
    <Page title="卡片列表">
      <h1>hello</h1>
      {/* <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
      </Card> */}
    </Page>
  );
}

Cardlist.propTypes = {

};

export default Cardlist;
