import React, { useEffect, useState } from 'react';
import {
  InputAdornment,
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'utils/axios';
import validate from 'validate.js';

const currencies = [
  {
    value: '请选择性别',
    label: '请选择性别',
  },
  {
    value: '男',
    label: '男',
  },
  {
    value: '女',
    label: '女',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(1),
  },
}));
function Basic(props) {
  const [currency, setCurrency] = React.useState('请选择性别');
  const classes = useStyles();

  const handleSexChange = (e) => {
    const { value } = e.target;
    setCurrency(value);
  };

  /* 民族列表 */
  const [nationList, setNationList] = useState([]);
  /* 政治面貌列表 */
  const [polityList, setPolityList] = useState([]);
  /* 婚姻状况列表 */
  const [maritalList, setMaritalList] = useState([]);
  /* 健康状况列表 */
  const [healthList, setHealthList] = useState([]);
  /* 籍贯、户口地址 */
  const [homeList, setHomeList] = useState([]);
  /* 表单验证 */
  const [formState, setFormState] = useState({
    inValid: false,
    values: {
      username: '',
      number: '',
      email: '',
      IDcard: '',
    },
    errors: {},
    touched: {},
  });

  const hasError = (field) => (!!(formState.touched[field] && formState.errors[field]));

  /* 表单验证规则 */
  useEffect(() => {
    const schema = {
      username: {
        presence: {
          allowEmpty: false,
          message: '姓名不能为空',
        },
      },
      number: {
        presence: {
          allowEmpty: false,
          message: '电话号码不能为空',
        },
        format: {
          pattern: /1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
          message: '请输入有效的号码',
        },
      },
      email: {
        presence: {
          allowEmpty: false,
          message: '邮箱不能为空',
        },
        format: {
          pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
          message: '请输入有效的邮箱',
        },
      },
      IDcard: {
        presence: {
          allowEmpty: false,
          message: '身份证号码不能为空',
        },
        format: {
          pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
          message: '请输入有效的身份证号',
        },
      },
    };

    const errors = validate(formState.values, schema, { fullMessages: false });

    setFormState((prevState) => ({
      ...prevState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  /* 请求接口 */
  useEffect(() => {
    const fetchData = async () => {
      const NationResponse = await axios.get('/api/demo/nationality');
      if (NationResponse.status === 200) {
        setNationList(NationResponse.data);
      }
      const PolityResponse = await axios.get('/api/demo/polity');
      if (PolityResponse.status === 200) {
        setPolityList(PolityResponse.data);
      }
      const maritalResponse = await axios.get('/api/demo/marital');
      if (maritalResponse.status === 200) {
        setMaritalList(maritalResponse.data);
        console.log(maritalResponse.data);
      }
      const healthResponse = await axios.get('/api/demo/health');
      if (healthResponse.status === 200) {
        setHealthList(healthResponse.data);
      }
      const homeResponse = await axios.get('/api/demo/region');
      if (homeResponse.status === 200) {
        setHomeList(homeResponse.data);
      }
    };
    fetchData();
  }, []);

  /* 自动补齐组件 */
  const defaultProps = {
    options: nationList,
    getOptionLabel: (option) => option.name,
  };

  /* 保存到state里 */
  const handleSetFormState = (key, value) => {
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [key]: value,
      },
      touched: {
        ...prevState.touched,
        [key]: true,
      },
    }));
  };

  /* 获取表单字段和值 */
  const handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    handleSetFormState(name, value);
  };

  return (
    <Card>
      <CardContent className={classes.content}>
        <form>
          <Typography variant="h4" component="h1" className={classes.root}>
            基本信息
            <span style={{ color: '#f00' }}>*</span>
          </Typography>
          <Grid container spacing={2} className={classes.root}>

            <Grid item xs={12} md={4} lg={4}>
              <TextField error={hasError('username')} helperText={hasError('username') ? formState.errors.username[0] : null} value={formState.values.username} onChange={handleChange} name="username" fullWidth size="small" required label="姓名" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextField select value={currency} onChange={handleSexChange} fullWidth size="small" required variant="outlined">
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextField size="small" fullWidth required type="date" variant="outlined" />
            </Grid>

            <Grid item xs={12} md={2} lg={2}>
              <TextField
                label="年龄"
                size="small"
                fullWidth
                required
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="start">岁</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete {...defaultProps} id="debug" debug renderInput={(params) => <TextField {...params} size="small" fullWidth required label="民族" variant="outlined" />} />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={polityList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} fullWidth size="small" required label="请选择政治面貌" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={maritalList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} fullWidth size="small" required label="婚姻状况" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextField
                fullWidth
                size="small"
                required
                label="身高"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextField
                fullWidth
                size="small"
                required
                label="体重"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={healthList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} fullWidth size="small" required label="请选择健康状况" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField fullWidth size="small" required label="既往病史" variant="outlined" />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={homeList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} fullWidth size="small" required label="籍贯" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField value={formState.values.number} error={hasError('number')} helperText={hasError('number') ? formState.errors.number[0] : null} onChange={handleChange} name="number" fullWidth size="small" required label="联系电话" variant="outlined" />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <TextField fullWidth value={formState.values.IDcard} error={hasError('IDcard')} helperText={hasError('IDcard') ? formState.errors.IDcard[0] : null} name="IDcard" onChange={handleChange} size="small" required label="身份证号" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField fullWidth value={formState.values.email} error={hasError('email')} helperText={hasError('email') ? formState.errors.email[0] : null} onChange={handleChange} size="small" name="email" required label="邮箱地址" variant="outlined" />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Autocomplete options={homeList.map((item) => item.name)} renderInput={(params) => (<TextField {...params} fullWidth size="small" required label="请选择户口地址" variant="outlined" />)} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField fullWidth size="small" required label="现住地址" variant="outlined" />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default Basic;
