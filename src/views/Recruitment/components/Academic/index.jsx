import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));
function Academic(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h4">
          学术论文
        </Typography>
        <Grid container spacing={2} className={classes.content}>
          <Grid item xs={12}>
            <TextField
              multiline
              fullWidth
              size="small"
              label="论文及学术科研情况"
              placeholder="最多输入1500字"
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.content}>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel>是否在学术组织担任现职务(提供聘书原件、复印件)</InputLabel>
              <Select
                label="是否在学术组织担任现职务(提供聘书原件、复印件)"
              >
                <MenuItem value="yes">是</MenuItem>
                <MenuItem value="no">否</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel>是否获得省级以上人才称号(提供证书原件、复印件)</InputLabel>
              <Select
                label="是否获得省级以上人才称号(提供证书原件、复印件)"
              >
                <MenuItem value="yes">是</MenuItem>
                <MenuItem value="no">否</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={2} className={classes.content}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextField
                multiline
                fullWidth
                size="small"
                label="学术组织名称、现担任职务名称"
                placeholder="最多输入200字"
                rows={3}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextField
                multiline
                fullWidth
                size="small"
                label="人才称号名称"
                rows={3}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.content}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="其它获奖情况及需要说明的事项"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

Academic.propTypes = {

};

export default Academic;
