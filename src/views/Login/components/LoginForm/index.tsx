import React, {
  useCallback,
  useContext,
  useState,
  useEffect,
  FC,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Theme,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeStyles, createStyles } from '@mui/styles';
import validate from 'validate.js';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQq,
  faWeibo,
  faWeixin,
} from '@fortawesome/free-brands-svg-icons';
import qs from 'qs';
import { isString } from 'lodash';
import { SessionContext } from 'components';
import { authService } from 'service';

export interface LoginFormProps {
  className?: string;
}

interface FormStateValue {
  username: string;
  password: string;
}

interface FormState {
  isValid: boolean;
  values: FormStateValue;
  errors: Record<string, any[]>;
  touched: Record<string, boolean>;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  iconButton: {
    color: '#fff',
    opacity: 0.3,
    '&:hover': {
      opacity: 1,
    },
  },
  iconButtonWeixin: {
    backgroundColor: '#07c160',
    '&:hover': {
      backgroundColor: '#07c160',
    },
  },
  iconButtonQQ: {
    backgroundColor: '#12b7f5',
    '&:hover': {
      backgroundColor: '#12b7f5',
    },
  },
  iconButtonWeibo: {
    backgroundColor: '#e32529',
    '&:hover': {
      backgroundColor: '#e32529',
    },
  },
}));

const schema = {
  username: {
    presence: { allowEmpty: false, message: '请输入用户名' },
  },
  password: {
    presence: { allowEmpty: false, message: '请输入密码' },
  },
};

const LoginForm: FC<LoginFormProps> = function LoginForm({
  className = '',
}) {
  const classes = useStyles();
  const { session, onSetSession } = useContext(SessionContext);
  const history = useHistory();
  const location = useLocation();

  const [formState, setFormState] = useState<FormState>({
    isValid: false,
    values: {
      username: '',
      password: '',
    },
    touched: {
      username: false,
      password: false,
    },
    errors: {},
  });
  const [loading, setLoading] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  const redirectPage = useCallback(() => {
    const { search } = location;
    if (search) {
      const querystring = search.replace('?', '');
      const { redirect } = qs.parse(querystring);
      if (isString(redirect)) {
        history.push(redirect);
        return;
      }
      history.push('/');
      return;
    }
    history.push('/');
  }, [history, location]);

  const fetchLogin = useCallback(async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await authService.login({
        username,
        password,
      });
      onSetSession({
        ...session,
        loggedIn: true,
        accessToken: response.accessToken,
      });
      localStorage.setItem('accessToken', response.accessToken);
      redirectPage();
    } finally {
      setLoading(false);
    }
  }, [onSetSession, redirectPage, session]);

  const storeCredential = () => {
    const { username, password } = formState.values;
    if (window.PublicKeyCredential && typeof (PasswordCredential) !== 'undefined') {
      const credential = new PasswordCredential({
        password,
        id: username,
      });
      navigator.credentials.store(credential);
    }
  };

  useEffect(() => {
    const getCredentials = async () => {
      if (window.PublicKeyCredential && typeof (PasswordCredential) !== 'undefined') {
        const creds = await navigator.credentials.get({
          password: true,
          mediation: 'silent',
        });
        if (creds) {
          switch (creds.type) {
            case 'password': {
              setFormState((prevState) => ({
                ...prevState,
                values: {
                  ...prevState.values,
                  username: creds.id,
                  password: creds.password || '',
                },
              }));
              try {
                if (creds.id && creds.password) {
                  await fetchLogin(creds.id, creds.password);
                }
              } catch (e) {
                if (e instanceof Error) {
                  enqueueSnackbar(e.message, {
                    variant: 'error',
                  });
                }
              }
              break;
            }
            default:
              break;
          }
        }
      }
    };
    getCredentials();
  }, [enqueueSnackbar, fetchLogin, redirectPage]);

  useEffect(() => {
    const handleValidate = () => {
      const errors = validate(formState.values, schema, { fullMessages: false });

      setFormState((prevState) => ({
        ...prevState,
        isValid: !errors,
        errors: errors || {},
      }));
    };

    handleValidate();
  }, [formState.values]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();

    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...prevState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { username, password } = formState.values;
      await fetchLogin(username, password);
      await storeCredential();
      redirectPage();
    } catch (e) {
      if (e instanceof Error) {
        enqueueSnackbar(e.message, {
          variant: 'error',
        });
      }
    }
  };

  const hasError = (field: string) => (!!(formState.touched[field] && formState.errors[field]));

  return (
    <form
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <Stack spacing={2}>
        <TextField
          error={hasError('username')}
          required
          fullWidth
          helperText={hasError('username') ? [formState.errors.username] : ''}
          label="手机号"
          name="username"
          onChange={handleChange}
          value={formState.values.username}
          variant="outlined"
          autoComplete="username"
          inputMode="tel"
        />
        <TextField
          error={hasError('password')}
          required
          fullWidth
          helperText={hasError('password') ? [formState.errors.password] : ''}
          label="密码"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.values.password}
          variant="outlined"
          autoComplete="password"
        />
        <LoadingButton
          disabled={!formState.isValid || loading}
          loading={loading}
          sx={{
            width: '100%',
          }}
          color="secondary"
          size="large"
          type="submit"
          variant="contained"
        >
          登录
        </LoadingButton>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="flex-end"
          sx={{ flexWrap: 'wrap' }}
        >
          <Tooltip title="微信账号登录">
            <IconButton className={clsx(classes.iconButton, classes.iconButtonWeixin)} size="small">
              <FontAwesomeIcon icon={faWeixin} />
            </IconButton>
          </Tooltip>
          <Tooltip title="QQ账号登录">
            <IconButton className={clsx(classes.iconButton, classes.iconButtonQQ)} size="small">
              <FontAwesomeIcon icon={faQq} />
            </IconButton>
          </Tooltip>
          <Tooltip title="微博账号登录">
            <IconButton className={clsx(classes.iconButton, classes.iconButtonWeibo)} size="small">
              <FontAwesomeIcon icon={faWeibo} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
