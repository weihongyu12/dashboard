import React, {
  Suspense,
  useCallback,
  useState,
  FC,
} from 'react';
import { Outlet } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { NavigationConfig } from 'types';

import { NavBar, TopBar } from './components';

export interface DashboardProps {
  navigation: NavigationConfig;
}

const useStyles = makeStyles(() => createStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  topBar: {
    zIndex: 2,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  navBar: {
    zIndex: 3,
    flex: '0 0 auto',
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto',
  },
}));

const Dashboard: FC<DashboardProps> = function Dashboard({ navigation }) {
  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

  const handleNavBarMobileToggle = () => {
    setOpenNavBarMobile((prevOpenNavBarMobile) => !prevOpenNavBarMobile);
  };

  const handleNavBarMobileClose = useCallback(() => {
    setOpenNavBarMobile(false);
  }, []);

  return (
    <div className={classes.root}>
      <TopBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileToggle}
      />
      <div className={classes.container}>
        <NavBar
          navigation={navigation}
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <main className={classes.content} id="layout-dashboard-main">
          <Suspense fallback={<LinearProgress />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
