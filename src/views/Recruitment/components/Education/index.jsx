import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import axios from 'utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));
const Education = (props) => {
  const classes = useStyles();
  const { className } = props;
  // 学历
  const [education, setEducation] = useState([]);
  // 学位
  const [degree, setDegree] = useState([]);
  // 就业形式
  const [employment, setEmployment] = useState([]);
  // 学制
  const [system, setSystem] = useState([]);
  // 专业技术资格
  const [titletechpost, setTitletechpost] = useState([]);
  // 取得时间
  const [getDate, setGetDate] = useState([]);
  const handleGetDate = (date) => {
    setGetDate(date);
  };
  useEffect(() => {
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
    const fetchSystem = async () => {
      const response = await axios.get('/api/demo/studymode');
      if (response.status === 200) setSystem(response.data);
    };
    fetchSystem();
    const fetchTitletechpost = async () => {
      const response = await axios.get('/api/demo/titletechpost');
      if (response.status === 200) setTitletechpost(response.data);
    };
    fetchTitletechpost();
  }, []);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h4">
          最高学历
        </Typography>
        <Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                label="毕业学校"
                required
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
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
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>请选择学制</InputLabel>
                <Select value={system.name} label="请选择专业技术学制">
                  {system.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                label="专业"
                required
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
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
            <Grid item lg={3} md={6} sm={12} xs={12}>
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
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                label="导师姓名"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                label="导师工作单位"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>请选择专业技术资格</InputLabel>
                <Select value={titletechpost.name} label="请选择专业技术资格">
                  {titletechpost.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                type="date"
                fullWidth
                variant="outlined"
                size="small"
                label="取得时间"
                InputLabelProps={{
                  shrink: true,
                }}
                value={getDate}
                onChange={handleGetDate}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Education.propTypes = {
  className: PropTypes.string,
};
Education.defaultProps = {
  className: '',
};

export default Education;
