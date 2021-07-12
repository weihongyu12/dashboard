import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Button,
  useMediaQuery,
  Theme,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import Page from 'components/Page';
import AuthenticationImage from './images/undraw_authentication_fsn5.svg';

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

const Error403: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page
      className={classes.root}
      title="Error 401"
    >
      <Typography
        align="center"
        variant={mobileDevice ? 'h4' : 'h1'}
      >
        403: 很抱歉，您没有该功能的访问权限
      </Typography>
      <div className={classes.imageContainer}>
        <img
          alt="Under development"
          className={classes.image}
          src={AuthenticationImage}
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

export default Error403;
