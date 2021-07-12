import React, {
  useEffect,
  useMemo,
  useState,
  FC,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from 'react';
import {
  Button,
  Collapse,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
  Theme,
} from '@material-ui/core';
import {
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/lab';
import {
  Close as CloseIcon,
  DeleteOutlined as DeleteIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import accounting from 'accounting';
import { format } from 'date-fns';
import { throttle } from 'lodash';
import { departmentService } from 'service';
import { DepartmentResponse } from 'types';

type FieldChangeEvent =
  ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?:string, value: unknown } | unknown>
  | MouseEvent<HTMLElement>
  | null;

export interface FilterValue {
  name: string;
  mobile: string;
  email: string;
  gender: '男' | '女' | '';
  job: string;
  department: DepartmentResponse | null;
  amount: number[];
  status: string[];
  startDate: MaterialUiPickersDate | null;
  endDate: MaterialUiPickersDate | null;
}

export interface FilterResult {
  name?: string;
  mobile?: string;
  email?: string;
  gender?: '男' | '女';
  job?: string,
  departmentId?: string,
  minAmount?: number,
  maxAmount?: number,
  status?: string[],
  startDate?: string,
  endDate?: string,
}

type CloseHandler = () => void;
export type FilterHandler = (filter: FilterResult) => void;

export interface FilterProps {
  open: boolean;
  className?: string;
  onClose?: CloseHandler;
  onFilter?: FilterHandler;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    width: 420,
    maxWidth: '100%',
  },
  header: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1,
  },
  contentSection: {
    padding: theme.spacing(2, 0),
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0),
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  field: {
    marginTop: 0,
    marginBottom: 0,
  },
  flexGrow: {
    flexGrow: 1,
  },
  horizontalDivider: {
    margin: theme.spacing(0, 1),
  },
  minAmount: {
    marginRight: theme.spacing(3),
  },
  maxAmount: {
    marginLeft: theme.spacing(3),
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Filter: FC<FilterProps> = ({
  open,
  className = '',
  onClose = () => {},
  onFilter = () => {},
}) => {
  const classes = useStyles();

  const initialValues: FilterValue = {
    name: '',
    mobile: '',
    email: '',
    gender: '',
    job: '',
    department: null,
    amount: [1200, 1500],
    status: [],
    startDate: null,
    endDate: null,
  };

  const [expandUser, setExpandUser] = useState<boolean>(true);
  const [expandCustomer, setExpandCustomer] = useState<boolean>(false);
  const [values, setValues] = useState<FilterValue>({ ...initialValues });
  const [departmentInput, setDepartmentInput] = useState<string>('');
  const [departmentOptions, setDepartmentOptions] = useState<DepartmentResponse[]>([]);

  const fetchDepartment = useMemo(() => throttle(async (keyword: string) => {
    const response = await departmentService.index({
      page: 1,
      size: -1,
      keyword,
    });
    setDepartmentOptions([...response.data]);
  }, 300), []);

  const handleClear = () => {
    setValues({ ...initialValues });
  };

  const handleFieldChange = (
    event: FieldChangeEvent,
    field: string,
    value: unknown,
  ) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleToggleProject = () => {
    setExpandUser((prevState) => !prevState);
  };

  const handleToggleCustomer = () => {
    setExpandCustomer((prevState) => !prevState);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      ...values,
      minAmount: values.amount?.[0],
      maxAmount: values.amount?.[1],
      departmentId: values.department?.id,
      status: values.status.join(','),
      startDate: values.startDate && format(values.startDate, 'yyyy-MM-dd'),
      endDate: values.endDate && format(values.endDate, 'yyyy-MM-dd'),
    };
    const filter = Object.entries(data).filter(([key, value]) => !!value);
    onFilter(Object.fromEntries(filter));
  };

  useEffect(() => {
    fetchDepartment(departmentInput);
  }, [departmentInput, fetchDepartment]);

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <form
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}
      >
        <div className={classes.header}>
          <Button
            onClick={onClose}
            size="small"
          >
            <CloseIcon className={classes.buttonIcon} />
            关闭
          </Button>
        </div>
        <div className={classes.content}>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              aria-expanded={expandUser}
              aria-hidden="true"
              onClick={handleToggleProject}
            >
              <Typography variant="h5">用户</Typography>
              {expandUser ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandUser}>
              <div className={classes.contentSectionContent}>
                <div className={classes.formGroup}>
                  <Autocomplete
                    value={values.department}
                    inputValue={departmentInput}
                    getOptionLabel={(option) => option.name}
                    autoHighlight
                    renderInput={(params) => (
                      <>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        <TextField {...params} label="部门" variant="outlined" margin="dense" />
                      </>
                    )}
                    options={departmentOptions}
                    onChange={(event, value) => {
                      handleFieldChange(event, 'department', value);
                    }}
                    onInputChange={(event, value) => {
                      setDepartmentInput(value);
                    }}
                  />
                </div>
                <div className={classes.formGroup}>
                  <div className={classes.fieldGroup}>
                    <DatePicker
                      value={values.startDate}
                      className={classes.flexGrow}
                      name="startDate"
                      variant="inline"
                      inputVariant="outlined"
                      label="开始时间"
                      margin="dense"
                      format="PPP"
                      autoOk
                      onChange={(date) => {
                        handleFieldChange(null, 'startDate', date);
                      }}
                    />
                    <Divider className={classes.horizontalDivider} orientation="horizontal" flexItem />
                    <DatePicker
                      value={values.endDate}
                      className={classes.flexGrow}
                      name="endDate"
                      variant="inline"
                      inputVariant="outlined"
                      label="结束时间"
                      margin="dense"
                      format="PPP"
                      autoOk
                      onChange={(date) => {
                        handleFieldChange(null, 'endDate', date);
                      }}
                    />
                  </div>
                </div>
                <div className={classes.formGroup}>
                  <FormLabel>报销标准</FormLabel>
                  <div className={classes.fieldGroup}>
                    <Typography
                      className={classes.minAmount}
                      variant="body1"
                    >
                      {accounting.formatMoney(values.amount[0], '¥', 0)}
                    </Typography>
                    <Slider
                      className={classes.flexGrow}
                      max={3000}
                      min={0}
                      step={100}
                      onChange={(event, value) => handleFieldChange(event, 'amount', value)}
                      value={values.amount}
                      valueLabelDisplay="auto"
                    />
                    <Typography
                      className={classes.maxAmount}
                      variant="body1"
                    >
                      {accounting.formatMoney(values.amount[1], '¥', 0)}
                    </Typography>
                  </div>
                </div>

                <div className={classes.formGroup}>
                  <FormLabel>状态</FormLabel>
                  <div className={classes.fieldGroup}>
                    <ToggleButtonGroup
                      value={values.status}
                      color="primary"
                      size="small"
                      onChange={(event, value) => {
                        console.log(value);
                        handleFieldChange(event, 'status', value);
                      }}
                      className={classes.flexGrow}
                    >
                      <ToggleButton value="内勤" className={classes.flexGrow}>内勤</ToggleButton>
                      <ToggleButton value="外勤" className={classes.flexGrow}>外勤</ToggleButton>
                      <ToggleButton value="出差" className={classes.flexGrow}>出差</ToggleButton>
                      <ToggleButton value="休假" className={classes.flexGrow}>休假</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              aria-expanded={expandCustomer}
              aria-hidden="true"
              onClick={handleToggleCustomer}
            >
              <Typography variant="h5">人员</Typography>
              {expandCustomer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandCustomer}>
              <div className={classes.contentSectionContent}>
                <div className={classes.contentSectionContent}>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="姓名"
                      margin="dense"
                      name="name"
                      onChange={(event) => handleFieldChange(
                        event,
                        'name',
                        event.target.value,
                      )}
                      value={values.name}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <FormControl margin="dense">
                      <FormLabel>性别</FormLabel>
                      <RadioGroup aria-label="gender" name="gender" row>
                        <FormControlLabel value="" control={<Radio />} label="全部" />
                        <FormControlLabel value="男" control={<Radio />} label="男" />
                        <FormControlLabel value="女" control={<Radio />} label="女" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="电子邮件"
                      margin="dense"
                      name="email"
                      type="email"
                      onChange={(event) => handleFieldChange(
                        event,
                        'email',
                        event.target.value,
                      )}
                      value={values.email}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="手机号码"
                      margin="dense"
                      name="mobile"
                      type="tel"
                      onChange={(event) => handleFieldChange(
                        event,
                        'mobile',
                        event.target.value,
                      )}
                      value={values.mobile}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      margin="dense"
                    >
                      <InputLabel htmlFor="job">岗位</InputLabel>
                      <Select
                        value={values.job}
                        native
                        label="岗位"
                        inputProps={{
                          name: 'job',
                          id: 'job',
                        }}
                        onChange={(event) => handleFieldChange(
                          event,
                          'job',
                          event.target.value,
                        )}
                      >
                        <option aria-label="全部" value="" />
                        <option value="高级开发工程师">高级开发工程师</option>
                        <option value="开发工程师">开发工程师</option>
                        <option value="助理开发工程师">助理开发工程师</option>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            fullWidth
            onClick={handleClear}
            variant="contained"
          >
            <DeleteIcon className={classes.buttonIcon} />
            清除
          </Button>
          <Button
            color="primary"
            fullWidth
            type="submit"
            variant="contained"
          >
            搜索
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

export default Filter;
