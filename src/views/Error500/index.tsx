import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Page from 'components/Page';
import ServerDownImage from './images/undraw_server_down_s4lk.svg';

const Error500: FC = function Error500() {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Page
      title="Error 500"
      sx={{
        p: 3,
        pt: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <Typography
        align="center"
        variant={mobileDevice ? 'h4' : 'h1'}
      >
        500: 糟糕，出了点问题！
      </Typography>
      <Typography
        align="center"
        variant="subtitle2"
      >
        很抱歉，服务器出了点故障，请尝试刷新页面或联系客服
      </Typography>
      <Box
        sx={{
          mt: theme.spacing(6),
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={ServerDownImage}
          alt="Under development"
          sx={{
            maxWidth: '100%',
            width: 560,
            maxHeight: 300,
            height: 'auto',
          }}
        />
      </Box>
      <Box
        sx={{
          mt: theme.spacing(6),
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          color="primary"
          component={RouterLink}
          to="/"
          variant="outlined"
        >
          返回首页
        </Button>
      </Box>
    </Page>
  );
};

export default Error500;
