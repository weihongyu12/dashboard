import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  InputLabel,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import validate from 'validate.js';
import axios from 'utils/axios';
import PropTypes from 'prop-types';

const sexs = [
  {
    id: '1',
    value: 'male',
    name: '男',
  },
  {
    id: '0',
    value: 'female',
    name: '女',
  },
];
const useStyles = makeStyles(() => ({
  root: {},
}));

const Basic = (props) => {
  const classes = useStyles();
  // 性别
  const [sex, setSex] = useState([...sexs]);
  const handleSex = (event) => {
    setSex(event.target.value);
  };
  // 民族
  const [nation, setNation] = useState([]);
  // 政治面貌
  const [polity, setPolity] = useState([]);
  // 婚姻状况
  const [marriage, setMarriage] = useState([]);
  // 健康状况
  const [health, setHealth] = useState([]);
  // 籍贯
  const [hometown, setHometown] = useState([]);
  // 户口地址
  const [address, setAddress] = useState([]);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      phone: '',
      IDcard: '',
      email: '',
    },
    errors: {},
    touched: {},
  });
  const hasError = (field) => (!!(formState.touched[field] && formState.errors[field]));
  const handleSetFormState = (key, value) => {
    setFormState((preState) => ({
      ...preState,
      values: {
        ...preState.values,
        [key]: value,
      },
      touched: {
        ...preState.touched,
        [key]: true,
      },
    }));
  };
  useEffect(() => {
    const schema = {
      phone: {
        presence: {
          allowEmpty: false,
          message: '请输入电话号码',
        },
        format: {
          pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
          message: '你输入的格式不对',
        },
      },
      IDcard: {
        presence: {
          allowEmpty: false,
          message: '请输入身份证号',
        },
        format: {
          pattern: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
          message: '你输入的格式不对',
        },
      },
      email: {
        presence: {
          allowEmpty: false,
          message: '请输入邮箱地址',
        },
        email: true,
      },
    };
    const errors = validate(formState.values, schema, { fullMessages: false });
    setFormState((prevState) => ({
      ...prevState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    const { name } = event.target;
    handleSetFormState(name, event.target.value);
  };

  useEffect(() => {
    const fetchNationality = async () => {
      const response = await axios.get('/api/demo/nationality');
      if (response.status === 200) setNation(response.data);
    };
    fetchNationality();
    const fetchPolity = async () => {
      const response = await axios.get('/api/demo/polity');
      if (response.status === 200) setPolity(response.data);
    };
    fetchPolity();
    const fetchMarriage = async () => {
      const response = await axios.get('/api/demo/marital');
      if (response.status === 200) setMarriage(response.data);
    };
    fetchMarriage();
    const fetchHealth = async () => {
      const response = await axios.get('/api/demo/health');
      if (response.status === 200) setHealth(response.data);
    };
    fetchHealth();
    const fetchHometown = async () => {
      const response = await axios.get('/api/demo/region');
      if (response.status === 200) setHometown(response.data);
    };
    fetchHometown();
    const fetchAddress = async () => {
      const response = await axios.get('/api/demo/region');
      if (response.status === 200) setAddress(response.data);
    };
    fetchAddress();
  }, []);
  // 日期
  const [selectedDate, setSelectedDate] = useState([]);
  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };
  const { className } = props;
  // console.log(className, props);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h4">
          基本信息
          <span style={{ color: '#f00' }}>*</span>
        </Typography>
        <Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextField
                label="姓名"
                required
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={2} md={6} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>请选择性别</InputLabel>
                <Select
                  value={sexs.name}
                  label="请选择性别"
                  onChange={handleSex}
                >
                  {sexs.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                // value={selectedDate}
                // onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider> */}
              <TextField
                id="date"
                fullWidth
                variant="outlined"
                required
                label="出生日期"
                size="small"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={selectedDate}
                onChange={handleSelectedDate}
              />
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                label="年龄"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: <InputAdornment position="start">岁</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>请选择民族</InputLabel>
                <Select
                  value={nation.name}
                  label="请选择民族"
                >
                  {nation.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>请选择政治面貌</InputLabel>
                <Select
                  value={polity.name}
                  label="请选择政治面貌"
                >
                  {polity.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={2} md={12} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>请选择婚姻状况</InputLabel>
                <Select
                  value={marriage.name}
                  label="请选择婚姻状况"
                >
                  {marriage.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                label="身高"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: <InputAdornment position="start">CM</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                label="体重"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: <InputAdornment position="start">KG</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>请选择健康状况</InputLabel>
                <Select
                  value={health.name}
                  label="请选择健康状况"
                >
                  {health.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                variant="outlined"
                size="small"
                label="既往病史"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>请选择籍贯</InputLabel>
                <Select
                  value={hometown.name}
                  label="请选择籍贯"
                >
                  {hometown.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                value={formState.values.phone}
                variant="outlined"
                size="small"
                name="phone"
                error={hasError('phone')}
                helperText={hasError('phone') ? formState.errors.phone[0] : null}
                onChange={handleChange}
                label="联系电话"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                value={formState.values.IDcard}
                name="IDcard"
                error={hasError('IDcard')}
                helperText={hasError('IDcard') ? formState.errors.IDcard[0] : null}
                onChange={handleChange}
                variant="outlined"
                size="small"
                label="身份证号"
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextField
                required
                value={formState.values.email}
                name="email"
                error={hasError('email')}
                helperText={hasError('email') ? formState.errors.email[0] : null}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                label="邮箱地址"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={className}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel id="address">请选择户口地址</InputLabel>
                <Select
                  value={address.name}
                  labelId="address"
                  label="请选择户口地址"
                >
                  {address.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                variant="outlined"
                size="small"
                label="现住地址"
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Basic.propTypes = {
  className: PropTypes.string,
};
Basic.defaultProps = {
  className: '',
};

export default Basic;
