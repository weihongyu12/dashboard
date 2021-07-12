import React, { FC, ChangeEvent } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import {
  Tabs,
  Tab,
  Divider,
  Theme,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/styles';
import { AuthGuard, Page } from 'components';
import {
  Header,
  General,
  Security,
  Notice,
} from './components';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: grey[300],
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

const Account: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { tab } = useParams<{ tab: string }>();

  const handleTabsChange = (event: ChangeEvent<unknown>, value: string) => {
    history.push(value);
  };

  const tabs = [
    { value: 'general', label: '个人信息' },
    { value: 'security', label: '修改密码' },
    { value: 'notice', label: '我的消息' },
  ];

  if (!tab) {
    return <Redirect to="/account/general" />;
  }

  if (!tabs.find((t) => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <AuthGuard roles={['GENERAL_USER', 'ADMINISTRATOR']}>
      <Page
        className={classes.root}
        title="个人中心"
      >
        <Header />
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
        >
          {tabs.map((tabItem) => (
            <Tab
              key={tabItem.value}
              label={tabItem.label}
              value={tabItem.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'general' && <General />}
          {tab === 'security' && <Security />}
          {tab === 'notice' && <Notice />}
        </div>
      </Page>
    </AuthGuard>
  );
};

export default Account;
