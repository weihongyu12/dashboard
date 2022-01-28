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
import PageNotFoundImage from './images/undraw_page_not_found_su7k.svg';

const Error404: FC = function Error404() {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Page
      title="Error 404"
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
        404: 您要找的页面不在这里
      </Typography>
      <Typography
        align="center"
        variant="subtitle2"
      >
        您进入的页面不存在或已经删除，您可能错误地来到了这里。无论是哪种方式，请尝试返回后重新跳转
      </Typography>
      <Box
        sx={{
          mt: 6,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={PageNotFoundImage}
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
          mt: 6,
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

export default Error404;
