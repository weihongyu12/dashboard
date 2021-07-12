import React, {
  useCallback,
  useEffect,
  useState,
  FC,
  ChangeEvent,
  FormEvent,
} from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  Email as EmailIcon,
  Language as LanguageIcon,
  PhoneAndroid as PhoneAndroidIcon,
} from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import validate from 'validate.js';
import { useAppSelector, useAppDispatch } from 'store';
import { getUserInfoAsync } from 'reducers';
import { accountService } from 'service';

export interface GeneralDetailsProps {
  className?: string;
}

interface FormStateValue {
  username: string;
  mobile: string;
  email: string;
  position: string;
  github: string;
  website: string;
  allowPublic: boolean;
}

interface FormState {
  isValid: boolean;
  values: FormStateValue;
  errors: Record<string, any[]>;
  touched: Record<string, boolean>;
}

const useStyles = makeStyles(() => createStyles({
  root: {},
  actions: {
    justifyContent: 'flex-end',
  },
}));

const schema = {
  username: {
    presence: { allowEmpty: false, message: '请输入姓名' },
  },
  position: {
    presence: { allowEmpty: false, message: '请输入职位' },
  },
  mobile: {
    format: { pattern: /1[3-9][0-9]{9}/, message: '手机号格式不正确' },
    presence: { allowEmpty: false, message: '请输入手机号' },
  },
  email: {
    email: { message: '请输入合法的邮箱' },
  },
  github: {
    url: { message: '请输入合法的邮箱URL' },
  },
  website: {
    url: { message: '请输入合法的邮箱URL' },
  },
};

const GeneralDetails: FC<GeneralDetailsProps> = (props) => {
  const classes = useStyles();
  const { className } = props;

  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<FormState>({
    isValid: false,
    values: {
      username: '',
      mobile: '',
      email: '',
      position: '',
      github: '',
      website: '',
      allowPublic: true,
    },
    touched: {
      username: false,
      mobile: false,
      email: false,
      position: false,
      github: false,
      website: false,
    },
    errors: {},
  });

  const hasError = useCallback(
    (field: string) => (!!(formState.touched[field] && formState.errors[field])),
    [formState.errors, formState.touched],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      await accountService.update({
        ...formState.values,
        allowPublic: formState.values.allowPublic ? 1 : 0,
      });
      enqueueSnackbar('保存修改成功', {
        variant: 'success',
      });
      dispatch(getUserInfoAsync());
    } catch (e) {
      enqueueSnackbar(e.message, {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setFormState((prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          username: user?.username,
          mobile: user?.mobile,
          email: user?.email,
          position: user?.position,
          github: user?.github,
          website: user?.website,
        },
      }));
    }
  }, [user]);

  useEffect(() => {
    const errors = validate(formState.values, schema, { fullMessages: false });

    setFormState((prevState) => ({
      ...prevState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  return (
    <form onSubmit={handleSubmit}>
      <Card
        className={clsx(classes.root, className)}
      >
        <CardHeader title="个人信息" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                value={formState.values.username}
                error={hasError('username')}
                helperText={hasError('username') ? formState.errors.username[0] : ''}
                variant="outlined"
                label="姓名"
                name="username"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={formState.values.position}
                error={hasError('position')}
                helperText={hasError('position') ? formState.errors.position[0] : ''}
                variant="outlined"
                label="职位"
                name="position"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={formState.values.mobile}
                error={hasError('mobile')}
                helperText={hasError('mobile') ? formState.errors.mobile[0] : ''}
                variant="outlined"
                label="手机号"
                fullWidth
                required
                name="mobile"
                type="tel"
                inputMode="tel"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneAndroidIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={formState.values.email}
                error={hasError('email')}
                helperText={hasError('email') ? formState.errors.email[0] : ''}
                variant="outlined"
                label="邮箱"
                fullWidth
                name="email"
                type="email"
                inputMode="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={formState.values.github}
                error={hasError('github')}
                helperText={hasError('github') ? formState.errors.github[0] : ''}
                variant="outlined"
                label="GitHub"
                name="github"
                type="url"
                inputMode="url"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faGithub} size="lg" color="rgba(0, 0, 0, 0.26)" />
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={formState.values.website}
                error={hasError('website')}
                helperText={hasError('website') ? formState.errors.website[0] : ''}
                variant="outlined"
                label="Website"
                name="website"
                type="url"
                inputMode="url"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="textPrimary">公开个人资料</Typography>
              <Typography variant="body2">允许就以上联系方式与我联系</Typography>
              <Switch
                checked={formState.values.allowPublic}
                name="allowPublic"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button type="submit" color="primary" variant="contained">保存更改</Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default GeneralDetails;
