import React, { useEffect, FC } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import { Lock as LockIcon } from '@mui/icons-material';
import qs from 'qs';
import { format } from 'date-fns';
import { Page, BrowserAlert } from 'components';
import gradients from 'utils/gradients';
import LoginForm from './components/LoginForm';
import ImageAuth from './assets/auth.png';

const { REACT_APP_TITLE } = process.env;

const Login: FC = function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();

  useEffect(() => {
    const { search } = location;

    if (search) {
      const querystring = search.replace('?', '');
      const { redirect } = qs.parse(querystring);
      if (redirect === '/auth/login') {
        navigate('/auth/login', { replace: true });
      }
    }
  }, [navigate, location, location.search]);

  return (
    <Page
      title="登录"
      sx={{
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 5,
      }}
    >
      <Card
        sx={{
          width: theme.breakpoints.values.md,
          maxWidth: '100%',
          overflow: 'unset',
          display: 'flex',
          position: 'relative',
          '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%',
          },
        }}
      >
        <CardContent
          sx={{
            pt: 8,
            pb: 3,
            px: 4,
          }}
        >
          <LockIcon
            sx={{
              backgroundImage: gradients.green,
              color: '#fff',
              borderRadius: theme.shape.borderRadius,
              p: 1,
              position: 'absolute',
              top: -32,
              left: theme.spacing(3),
              height: 64,
              width: 64,
              fontSize: 32,
            }}
          />
          <Typography
            gutterBottom
            variant="h3"
          >
            登录
          </Typography>
          <Typography variant="subtitle2">
            {REACT_APP_TITLE}
          </Typography>
          <BrowserAlert />
          <LoginForm
            sx={{
              mt: 3,
            }}
          />
          <Divider
            sx={{
              mx: 0,
              my: 2,
            }}
          />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/register"
            underline="always"
            variant="subtitle2"
          >
            还没有帐号？
          </Link>
        </CardContent>
        <CardMedia
          image={ImageAuth}
          sx={{
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            padding: 3,
            color: '#fff',
            display: {
              md: 'flex',
              sm: 'none',
            },
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              mt: 2,
              display: 'flex',
            }}
          >
            <Typography
              color="inherit"
              variant="body2"
            >
              Copyright &copy;
              {' '}
              {format(new Date(), 'yyyy')}
              {' '}
              weihongyu12 保留所有权利
            </Typography>
          </Box>
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Login;
