import React, { useContext, FC } from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { AuthGuard, Page, SessionContext } from 'components';
import { ReactComponent as NewYearSvg } from './assets/undraw_new_year_2022_bxec.svg';

const Home: FC = function Home() {
  const { session } = useContext(SessionContext);

  return (
    <AuthGuard roles={['ADMINISTRATOR']}>
      <Page
        title="工作台"
        sx={{
          px: 8,
          py: 3,
        }}
      >
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid
            item
            sx={{
              width: {
                sm: '100%',
                md: 'auto',
              },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
            >
              {format(new Date(), 'bbbb', { locale: zhHansLocale })}
              好，
              {' '}
              {session?.user?.username}
            </Typography>
            <Typography
              variant="h4"
            >
              欢迎登录
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component={NewYearSvg}
              sx={{
                width: 489,
                height: 343,
                maxWidth: '100%',
              }}
            />
          </Grid>
        </Grid>
      </Page>
    </AuthGuard>
  );
};

export default Home;
