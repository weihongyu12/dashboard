import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import axios from 'utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  block: {
    marginTop: theme.spacing(2),
  },
}));

function Highest(props) {
  const classes = useStyles();

  const [eduList, setEduList] = useState([]);
  const [degreeList, setDegreeList] = useState([]);
  const [modeList, setModeList] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const eduResponse = await axios.get('/api/demo/education');
      if (eduResponse.status === 200) {
        setEduList(eduResponse.data);
      }
      const degreeResopnse = await axios.get('/api/demo/degree');
      if (degreeResopnse.status === 200) {
        setDegreeList(degreeResopnse.data);
      }
      const modeResponse = await axios.get('/api/demo/studymode');
      if (modeResponse.status === 200) {
        setModeList(modeResponse.data);
      }
      const postResopnse = await axios.get('/api/demo/titletechpost');
      if (postResopnse.status === 200) {
        setPostList(postResopnse.data);
      }
    };
    fetchData();
  }, []);
  return (
    <Card className={classes.block}>
      <CardContent>
        <Typography variant="h4" className={classes.root}>最高学历</Typography>
        <form>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={6} lg={6}>
              <TextField required label="毕业院校" fullWidth variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={eduList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} required label="请选择学历" size="small" fullWidth variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <TextField required fullWidth size="small" variant="outlined" label="学制" />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField required fullWidth size="small" variant="outlined" label="专业" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={degreeList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} required fullWidth size="small" label="学位" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={modeList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} required fullWidth size="small" label="就学形式" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField fullWidth size="small" variant="outlined" label="导师姓名(硕士以上填写)" />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField fullWidth size="small" variant="outlined" label="导师工作单位(硕士以上填写)" />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={postList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} required fullWidth size="small" label="专业技术资格" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField type="date" variant="outlined" size="small" fullWidth />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default Highest;
