import React, { useState, useEffect } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  InputLabel,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
/* import { red, blue } from '@material-ui/core/colors'; */
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
  left: {
    marginLeft: theme.spacing(3),
  },
}));

function Education(props) {
  /* const primary = blue[500];
  const secondery = red[900]; */
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [eduList, setEduList] = useState([]);
  const [degreeList, setDegreeList] = useState([]);
  const [modeList, setModeList] = useState([]);

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
    };
    fetchData();
  }, []);
  return (
    <Card className={classes.block}>
      <CardContent>
        <Typography variant="h4" className={classes.root}>
          教育经历
          <span style={{ color: '#f00' }}>*</span>
        </Typography>
        <Grid container justifyContent="flex-start" className={classes.left}>
          <Grid item>
            <Typography style={{ color: '#a9a9a9' }}>从大学起填写，时间需连续</Typography>
            <ButtonGroup variant="contained" color="primary">
              <Button style={{ background: '#007bff' }} onClick={handleClickOpen}>新增</Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>添加教育经历</DialogTitle>
                <DialogContent>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <InputLabel>开始时间</InputLabel>
                      <TextField type="date" variant="outlined" required fullWidth size="small" />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>结束时间</InputLabel>
                      <TextField type="date" variant="outlined" required fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel>毕业学校</InputLabel>
                      <TextField required variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel>专业</InputLabel>
                      <TextField required variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel>学历</InputLabel>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <Autocomplete options={eduList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} required label="请选择学历" size="small" fullWidth variant="outlined" />)} />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>学位</InputLabel>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <Autocomplete options={degreeList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} required fullWidth size="small" label="学位" variant="outlined" />)} />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>就学形势</InputLabel>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <Autocomplete options={modeList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} required fullWidth size="small" label="就学形式" variant="outlined" />)} />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>取消</Button>
                  <Button onClick={handleClose}>保存</Button>
                </DialogActions>
              </Dialog>
              <Button style={{ background: '#007bff' }}>修改</Button>
              <Button style={{ background: '#dc3545' }}>删除</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className={classes.left}>
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">开始时间</TableCell>
                    <TableCell align="center">结束时间</TableCell>
                    <TableCell align="center">毕业院校</TableCell>
                    <TableCell align="center">专业</TableCell>
                    <TableCell align="center">学历</TableCell>
                    <TableCell align="center">学位</TableCell>
                    <TableCell align="center">就学形式</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={7}>No data available in table</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Education;
