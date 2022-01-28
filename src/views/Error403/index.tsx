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
import AuthenticationImage from './images/undraw_authentication_fsn5.svg';

const Error403: FC = function Error403() {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Page
      title="Error 403"
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
        403: 很抱歉，您没有该功能的访问权限
      </Typography>
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          src={AuthenticationImage}
          component="img"
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
          marginTop: 6,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          component={RouterLink}
          color="primary"
          to="/"
          variant="outlined"
        >
          返回首页
        </Button>
      </Box>
    </Page>
  );
};

export default Error403;
