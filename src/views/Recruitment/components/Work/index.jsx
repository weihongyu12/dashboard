import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  ButtonGroup,
  Button,
  Card,
  CardContent,
  Typography,
  CheckBox,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));
const Work = (props) => {
  const classes = useStyles();
  const { className } = props;
  // 表格数据
  const [tableList, setTableList] = useState([]);
  // 对话框
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      const response = axios.get();
      if (response.status === 200) setTableList(response.data);
    };
    fetchData();
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h4">
          工作经历
        </Typography>
        <Typography variant="subtitle2" className={classes.content}>
          行政管理、国外工作都可填，时间需连续
        </Typography>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className={classes.content}>
          <Button style={{ background: '#007bff' }} onClick={handleOpen}>新增</Button>
          <Dialog open={open}>
            <DialogTitle>添加工作经历</DialogTitle>
            <Divider />
            <DialogContent>
              <Grid container spacing={4}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="开始时间"
                    required
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="结束时间"
                    required
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="工作单位"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="担任职务"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    fullWidth
                    size="small"
                    label="主要职责"
                    required
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <Divider />
            <DialogActions>
              <Button onClick={handleClose}>取消</Button>
              <Button onClick={handleClose} style={{ background: '#28a745', color: '#fff' }}>保存</Button>
            </DialogActions>
          </Dialog>
          <Button style={{ background: '#007bff' }}>修改</Button>
          <Button style={{ background: '#dc3545' }}>删除</Button>
        </ButtonGroup>
        <TableContainer className={classes.content}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"><CheckBox /></TableCell>
                <TableCell align="center">开始时间</TableCell>
                <TableCell align="center">结束时间</TableCell>
                <TableCell align="center">工作单位</TableCell>
                <TableCell align="center">工作职务</TableCell>
                <TableCell align="center">主要职责</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                tableList.length !== 0 ? tableList.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell padding="checkbox"><CheckBox /></TableCell>
                    <TableCell align="center">{e.startTime}</TableCell>
                    <TableCell align="center">{e.endTime}</TableCell>
                    <TableCell align="center">{e.unit}</TableCell>
                    <TableCell align="center">{e.job}</TableCell>
                    <TableCell align="center">{e.duty}</TableCell>
                  </TableRow>
                ))
                  : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">No data available in table</TableCell>
                    </TableRow>
                  )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

Work.propTypes = {
  className: PropTypes.string,
};
Work.defaultProps = {
  className: '',
};

export default Work;
