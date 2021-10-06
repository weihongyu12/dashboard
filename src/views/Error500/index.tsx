import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Button,
  useMediaQuery,
  Theme,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import Page from 'components/Page';
import ServerDownImage from './images/undraw_server_down_s4lk.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(3),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  imageContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Error500: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Page
      className={classes.root}
      title="Error 404"
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
      <div className={classes.imageContainer}>
        <img
          alt="Under development"
          className={classes.image}
          src={ServerDownImage}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          component={RouterLink}
          to="/"
          variant="outlined"
        >
          返回首页
        </Button>
      </div>
    </Page>
  );
};

export default Error500;
