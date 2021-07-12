import React, { useEffect, FC } from 'react';
import { useLocation } from 'react-router';
import {
  Avatar,
  Divider,
  Drawer,
  Hidden,
  Paper,
  Typography,
  Theme,
} from '@material-ui/core';
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { useAppSelector } from 'store';
import { NavigationConfig } from 'types';
import Navigation from './components/Navigation';

export type MobileCloseHandler = () => void;

export interface NavBarProps {
  navigation: NavigationConfig
  className?: string;
  openMobile?: boolean;
  onMobileClose?: MobileCloseHandler;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: 256,
    height: '100%',
    overflowY: 'auto',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
  },
  navigation: {
    marginTop: theme.spacing(2),
  },
}));

const NavBar: FC<NavBarProps> = ({
  navigation,
  className = '',
  openMobile = false,
  onMobileClose = () => {},
}) => {
  const classes = useStyles();
  const location = useLocation();

  const session = useAppSelector((state) => state.session);

  const avatarColorPalettes = [
    red[600],
    pink[600],
    purple[600],
    deepPurple[600],
    indigo[600],
    blue[600],
    lightBlue[600],
    cyan[600],
    teal[600],
    green[600],
    lightGreen[600],
    lime[600],
    yellow[600],
    amber[600],
    orange[600],
    deepOrange[600],
    brown[600],
    grey[600],
    blueGrey[600],
  ];

  const avatarColor = (string: string) => {
    const index = string.charCodeAt(0) % 18;
    return avatarColorPalettes[index];
  };

  useEffect(() => {
    onMobileClose();
  }, [location.pathname, onMobileClose]);

  const navbarContent = (
    <div className={classes.content}>
      <nav className={classes.navigation}>
        <div className={classes.profile}>
          {
            session?.user?.avatar ? (
              <Avatar
                alt="Person"
                src={session.user.avatar}
                className={classes.avatar}
              />
            ) : (
              <Avatar
                alt="Person"
                className={classes.avatar}
                style={
                  session?.user?.username ? {
                    backgroundColor: avatarColor(session.user.username),
                  } : undefined
                }
              >
                {session?.user?.username}
              </Avatar>
            )
          }
          <Typography
            variant="h5"
          >
            {session?.user?.username}
          </Typography>
          <Typography variant="body2">{session?.user?.position}</Typography>
        </div>
        <Divider className={classes.divider} />
        {navigation.map((list) => (
          <Navigation
            component="div"
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <div
            className={clsx(classes.root, className)}
          >
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
          {navbarContent}
        </Paper>
      </Hidden>
    </>
  );
};

export default NavBar;
