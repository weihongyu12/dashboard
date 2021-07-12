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
import PageNotFoundImage from './images/undraw_page_not_found_su7k.svg';

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

const Error404: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page
      className={classes.root}
      title="Error 404"
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
      <div className={classes.imageContainer}>
        <img
          alt="Under development"
          className={classes.image}
          src={PageNotFoundImage}
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

export default Error404;
