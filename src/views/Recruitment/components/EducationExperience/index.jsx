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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
const EudcationExperience = (props) => {
  const classes = useStyles();
  const { className } = props;
  // 表格数据
  const [tableList, setTableList] = useState([]);
  // 对话框
  const [open, setOpen] = useState(false);
  // 学历
  const [education, setEducation] = useState([]);
  // 学位
  const [degree, setDegree] = useState([]);
  // 就业形式
  const [employment, setEmployment] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const response = axios.get();
      if (response.status === 200) setTableList(response.data);
    };
    fetchData();
    const fetchEducation = async () => {
      const response = await axios.get('/api/demo/education');
      if (response.status === 200) setEducation(response.data);
    };
    fetchEducation();
    const fetchDegree = async () => {
      const response = await axios.get('/api/demo/degree');
      if (response.status === 200) setDegree(response.data);
    };
    fetchDegree();
    const fetchEmployment = async () => {
      const response = await axios.get('/api/demo/degree');
      if (response.status === 200) setEmployment(response.data);
    };
    fetchEmployment();
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
          教育经历
        </Typography>
        <Typography variant="subtitle2" className={classes.content}>
          从大学起填写,时间需连续
        </Typography>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className={classes.content}>
          <Button style={{ background: '#007bff' }} onClick={handleOpen}>新增</Button>
          <Dialog open={open}>
            <DialogTitle>添加教育经历</DialogTitle>
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
                <Grid xs={12} item>
                  <TextField
                    fullWidth
                    required
                    label="毕业学校"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    fullWidth
                    required
                    label="专业"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid xs={12} item>
                  <FormControl variant="outlined" size="small" required fullWidth>
                    <InputLabel>请选择学历</InputLabel>
                    <Select value={education.name} label="请选择学历">
                      {education.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" size="small" required fullWidth>
                    <InputLabel>请选择学位</InputLabel>
                    <Select value={degree.name} label="请选择学位">
                      {degree.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" size="small" required fullWidth>
                    <InputLabel>请选择就业形式</InputLabel>
                    <Select value={employment.name} label="请选择就业形式">
                      {employment.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                <TableCell padding="checkbox" align="center"><CheckBox /></TableCell>
                <TableCell align="center">开始时间</TableCell>
                <TableCell align="center">结束时间</TableCell>
                <TableCell align="center">毕业院校</TableCell>
                <TableCell align="center">专业</TableCell>
                <TableCell align="center">学历</TableCell>
                <TableCell align="center">学位</TableCell>
                <TableCell align="center">就业形式</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                tableList.length !== 0 ? tableList.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell padding="checkbox" align="center"><CheckBox /></TableCell>
                    <TableCell align="center">{e.startTime}</TableCell>
                    <TableCell align="center">{e.endTime}</TableCell>
                    <TableCell align="center">{e.school}</TableCell>
                    <TableCell align="center">{e.profession}</TableCell>
                    <TableCell align="center">{e.education}</TableCell>
                    <TableCell align="center">{e.degree}</TableCell>
                    <TableCell align="center">{e.employment}</TableCell>
                  </TableRow>
                ))
                  : (
                    <TableRow>
                      <TableCell colSpan={7} align="center">No data available in table</TableCell>
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

EudcationExperience.propTypes = {
  className: PropTypes.string,
};
EudcationExperience.defaultProps = {
  className: '',
};

export default EudcationExperience;
