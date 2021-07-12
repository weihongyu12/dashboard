import React, {
  useEffect,
  useMemo,
  useState,
  FC,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Button,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  red,
  yellow,
  lightGreen,
  green,
  grey,
} from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useSnackbar } from 'notistack';
import { useConfirm } from 'material-ui-confirm';
import validate from 'validate.js';
import taiPasswordStrength from 'tai-password-strength';
import { useAppSelector } from 'store';
import { accountService } from 'service';

export interface SecurityProps {
  className?: string;
}

interface PasswordStrengthStyle {
  [key: string]: string;
}

interface PasswordStrengthText {
  [key: string]: string;
}

interface FormStateValues {
  [key: string]: string;
}

interface FormStateError {
  [key: string]: any[];
}

interface FormStateTouched {
  [key: string]: boolean;
}

interface FormState {
  isValid: boolean;
  values: FormStateValues;
  errors: FormStateError;
  touched: FormStateTouched;
}

const useStyles = makeStyles(() => createStyles({
  root: {},
  saveButton: {
    color: '#fff',
    backgroundColor: green[600],
    '&:hover': {
      backgroundColor: green[900],
    },
  },
  passwordStrength: {
    width: '100%',
    height: 36,
    backgroundColor: grey[200],
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordStrengthVeryWeak: {
    backgroundImage: `linear-gradient(to right, ${red[900]}, ${red[900]} 20%, ${grey[200]} 20%)`,
  },
  passwordStrengthWeak: {
    backgroundImage: `linear-gradient(to right, ${red[500]}, ${red[500]} 40%, ${grey[200]} 40%)`,
  },
  passwordStrengthReasonable: {
    backgroundImage: `linear-gradient(to right, ${yellow[500]}, ${yellow[500]} 60%, ${grey[200]} 60%)`,
  },
  passwordStrengthStrong: {
    backgroundImage: `linear-gradient(to right, ${lightGreen[500]}, ${lightGreen[500]} 80%, ${grey[200]} 80%)`,
  },
  passwordStrengthVeryStrong: {
    backgroundImage: `linear-gradient(to right, ${green[500]}, ${green[500]} 100%, ${green[200]} 100%)`,
  },
}));

const strengthTester = new taiPasswordStrength.PasswordStrength();

const passwordStrengthText: PasswordStrengthText = {
  VERY_WEAK: '非常弱',
  WEAK: '弱',
  REASONABLE: '中',
  STRONG: '强',
  VERY_STRONG: '非常强',
};

const Security: FC<SecurityProps> = ({ className = '' }) => {
  const classes = useStyles();

  const [formState, setFormState] = useState<FormState>({
    isValid: false,
    values: {
      oldPassword: '',
      password: '',
      confirm: '',
    },
    errors: {},
    touched: {
      oldPassword: false,
      password: false,
      confirm: false,
    },
  });
  const [passwordStrengthCode, setPasswordStrengthCode] = useState<string>('');

  const { user } = useAppSelector((state) => state.session);

  const { enqueueSnackbar } = useSnackbar();
  const confirm = useConfirm();

  const schema = useMemo(() => (
    {
      oldPassword: user?.password === '**' && {
        presence: {
          allowEmpty: false,
          message: '请输入原密码',
        },
      },
      password: {
        presence: {
          allowEmpty: false,
          message: '请输入新密码',
        },
      },
      confirm: {
        presence: {
          allowEmpty: false,
          message: '请确认密码',
        },
        equality: {
          attribute: 'password',
          message: '两次输入密码不一致',
        },
      },
    }
  ), [user?.password]);

  useEffect(() => {
    const errors = validate(formState.values, schema, { fullMessages: false });

    setFormState((prevState) => ({
      ...prevState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values, schema]);

  useEffect(() => {
    const { strengthCode } = strengthTester.check(formState.values.password);
    setPasswordStrengthCode(strengthCode);
  }, [formState.values.password]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...prevState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const fetchSubmit = async () => {
    try {
      await accountService.changePassword({
        oldPassword: formState.values.oldPassword,
        newPassword: formState.values.password,
      });
      enqueueSnackbar('密码修改成功', {
        variant: 'success',
      });
      setFormState({
        isValid: false,
        values: {
          oldPassword: '',
          password: '',
          confirm: '',
        },
        errors: {},
        touched: {
          oldPassword: false,
          password: false,
          confirm: false,
        },
      });
    } catch (e) {
      enqueueSnackbar(e.message, {
        variant: 'error',
      });
    }
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    if (passwordStrengthCode === 'VERY_WEAK' || passwordStrengthCode === 'WEAK') {
      confirm({
        title: '警告',
        description: '是否确定使用弱密码作为新密码？',
        confirmationText: '确定',
        cancellationText: '取消',
      }).then(() => {
        fetchSubmit();
      });
    } else {
      fetchSubmit();
    }
  };

  const passwordStrengthStyle: PasswordStrengthStyle = {
    VERY_WEAK: classes.passwordStrengthVeryWeak,
    WEAK: classes.passwordStrengthWeak,
    REASONABLE: classes.passwordStrengthReasonable,
    STRONG: classes.passwordStrengthStrong,
    VERY_STRONG: classes.passwordStrengthVeryStrong,
  };

  const hasError = (field: string) => (!!(formState.touched[field] && formState.errors[field]));

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardHeader title="更改密码" />
      <Divider />
      <CardContent>
        <form>
          <Grid
            container
            spacing={3}
          >
            {
              user?.password === '**' && (
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    required
                    label="原密码"
                    name="oldPassword"
                    onChange={handleChange}
                    type="password"
                    value={formState.values.oldPassword}
                    error={hasError('oldPassword')}
                    helperText={hasError('oldPassword') ? formState.errors.oldPassword[0] : null}
                    variant="outlined"
                    InputProps={{
                      inputProps: {
                        autoComplete: 'current-password',
                      },
                    }}
                  />
                </Grid>
              )
            }
          </Grid>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                label="新密码"
                name="password"
                onChange={handleChange}
                type="password"
                value={formState.values.password}
                error={hasError('password')}
                helperText={hasError('password') ? formState.errors.password[0] : null}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    autoComplete: 'new-password',
                  },
                }}
              />
            </Grid>
          </Grid>
          {
            formState.values.password && (
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <div
                    className={
                      clsx(classes.passwordStrength, passwordStrengthStyle[passwordStrengthCode])
                    }
                  >
                    <Typography align="center">
                      {passwordStrengthText[passwordStrengthCode]}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            )
          }
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <TextField
                fullWidth
                required
                label="确认密码"
                name="confirm"
                onChange={handleChange}
                type="password"
                value={formState.values.confirm}
                error={hasError('confirm')}
                helperText={hasError('confirm') ? formState.errors.confirm[0] : null}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    autoComplete: 'new-password',
                  },
                }}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.saveButton}
          disabled={!formState.isValid}
          variant="contained"
          onClick={handleSubmit}
        >
          保存更改
        </Button>
      </CardActions>
    </Card>
  );
};

export default Security;
