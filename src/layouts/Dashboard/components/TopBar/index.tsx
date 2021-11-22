import React, {
  useContext,
  useState,
  FC,
  MouseEventHandler,
} from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
  AppBar,
  Button,
  Divider,
  Hidden,
  Link,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  Theme,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputIcon from '@mui/icons-material/Input';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, createStyles } from '@mui/styles';
import clsx from 'clsx';
import { SessionContext } from 'components';
import { authService } from 'service';
import Notifications from './components/Notifications';

const { REACT_APP_TITLE } = process.env;

type OpenNavBarMobileHandler = () => void;

export interface TopBarProps {
  className?: string;
  onOpenNavBarMobile?: OpenNavBarMobileHandler;
}

const isWorkWeixin = window.navigator.userAgent.includes('wxwork');

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    boxShadow: 'none',
  },
  toolbar: {
    padding: theme.spacing(0, 1),
  },
  flexGrow: {
    flexGrow: 1,
  },
  brand: {
    color: 'inherit',
    fontWeight: 700,
  },
  logoutButton: {
    whiteSpace: 'nowrap',
    marginLeft: theme.spacing(1),
  },
  appBarWorkWeixin: {
    backgroundColor: '#fff',
  },
}));

const TopBar: FC<TopBarProps> = function TopBar({
  className = '',
  onOpenNavBarMobile = () => {},
}) {
  const classes = useStyles();
  const { session, onClearSession } = useContext(SessionContext);
  const [anchorEl, setAnchorEl] = useState<any | null>(null);
  const history = useHistory();

  const appBarColor = isWorkWeixin ? 'default' : 'primary';

  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await authService.logout();
    onClearSession();
    if (navigator.credentials && navigator.credentials.preventSilentAccess) {
      navigator.credentials.preventSilentAccess();
    }
    await localStorage.removeItem('accessToken');
    history.push('/auth/login');
  };

  return (
    <AppBar
      className={clsx(
        classes.root,
        className,
        {
          [classes.appBarWorkWeixin]: isWorkWeixin,
        },
      )}
      color={appBarColor}
      elevation={isWorkWeixin ? 1 : 0}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            size="large"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          color="inherit"
        >
          <Typography
            variant="h4"
            className={classes.brand}
            noWrap
          >
            {REACT_APP_TITLE}
          </Typography>
        </Link>
        <div className={classes.flexGrow} />
        <Notifications />
        {
          session?.user?.username && (
            <Button
              className={classes.logoutButton}
              color="inherit"
              startIcon={(<AccountCircleIcon />)}
              onClick={handleMenuOpen}
            >
              {session.user.username}
            </Button>
          )
        }
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            component={RouterLink}
            to="/account"
          >
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="个人中心" />
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="退出登录" />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
