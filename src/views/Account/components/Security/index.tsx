import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  FC,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  CardProps,
} from '@mui/material';
import {
  red,
  yellow,
  lightGreen,
  green,
  grey,
} from '@mui/material/colors';
import { useSnackbar } from 'notistack';
import { useConfirm } from 'material-ui-confirm';
import validate from 'validate.js';
import { multiply, divide } from 'mathjs';
import taiPasswordStrength from 'tai-password-strength';
import { SessionContext } from 'components';
import { accountService } from 'service';

interface PasswordStrengthStyle {
  [key: string]: Record<string, string>;
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

const strengthTester = new taiPasswordStrength.PasswordStrength();

const passwordStrengthText: PasswordStrengthText = {
  VERY_WEAK: '非常弱',
  WEAK: '弱',
  REASONABLE: '中',
  STRONG: '强',
  VERY_STRONG: '非常强',
};

const passwordStrengthStyle: PasswordStrengthStyle = {
  VERY_WEAK: {
    backgroundImage: `linear-gradient(to right, ${red[900]}, ${red[900]} 20%, ${grey[200]} 20%)`,
  },
  WEAK: {
    backgroundImage: `linear-gradient(to right, ${red[500]}, ${red[500]} 40%, ${grey[200]} 40%)`,
  },
  REASONABLE: {
    backgroundImage: `linear-gradient(to right, ${yellow[500]}, ${yellow[500]} 60%, ${grey[200]} 60%)`,
  },
  STRONG: {
    backgroundImage: `linear-gradient(to right, ${lightGreen[500]}, ${lightGreen[500]} 80%, ${grey[200]} 80%)`,
  },
  VERY_STRONG: {
    backgroundImage: `linear-gradient(to right, ${green[500]}, ${green[500]} 100%, ${green[200]} 100%)`,
  },
};

const stackWidth = (col: number) => {
  let result = divide(col, 12);
  result = multiply(result, 100);

  return `${result}%`;
};

const Security: FC<CardProps> = function Security({ sx = {} }) {
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

  const { session } = useContext(SessionContext);
  const { user } = session;

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
      if (e instanceof Error) {
        enqueueSnackbar(e.message, {
          variant: 'error',
        });
      }
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

  const hasError = (field: string) => (!!(formState.touched[field] && formState.errors[field]));

  return (
    <Card
      sx={{
        ...sx,
      }}
    >
      <CardHeader title="更改密码" />
      <Divider />
      <CardContent>
        <form>
          <Stack
            spacing={3}
            sx={{
              width: {
                xs: stackWidth(12),
                sm: stackWidth(6),
                md: stackWidth(4),
              },
            }}
          >
            {
              user?.password === '**' && (
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
              )
            }
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
            {
              formState.values.password && (
                <Box
                  sx={{
                    width: '100%',
                    height: 36,
                    bgcolor: grey[200],
                    borderRadius: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...passwordStrengthStyle[passwordStrengthCode],
                  }}
                >
                  <Typography align="center">
                    {passwordStrengthText[passwordStrengthCode]}
                  </Typography>
                </Box>
              )
            }
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
          </Stack>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          disabled={!formState.isValid}
          color="success"
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
