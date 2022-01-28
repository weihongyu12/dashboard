import React, { FC, ChangeEvent } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Tabs,
  Tab,
  Divider,
  useTheme,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { AuthGuard, Page } from 'components';
import {
  Header,
  General,
  Security,
  Notice,
} from './components';

const Account: FC = function Account() {
  const navigate = useNavigate();
  const { tab } = useParams();

  const theme = useTheme();

  const handleTabsChange = (event: ChangeEvent<unknown>, value: string) => {
    navigate(`/account/${value}`);
  };

  const tabs = [
    { value: 'general', label: '个人信息' },
    { value: 'security', label: '修改密码' },
    { value: 'notice', label: '我的消息' },
  ];

  if (!tab) {
    return <Navigate to="/account/general" replace />;
  }

  if (!tabs.find((t) => t.value === tab)) {
    return <Navigate to="/errors/error-404" replace />;
  }

  return (
    <AuthGuard roles={['GENERAL_USER', 'ADMINISTRATOR']}>
      <Page
        title="个人中心"
        sx={{
          width: theme.breakpoints.values.lg,
          maxWidth: '100%',
          m: '0 auto',
          p: 3,
        }}
      >
        <Header />
        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
          sx={{
            mt: 3,
          }}
        >
          {tabs.map((tabItem) => (
            <Tab
              key={tabItem.value}
              label={tabItem.label}
              value={tabItem.value}
            />
          ))}
        </Tabs>
        <Divider
          sx={{
            bgcolor: grey[300],
          }}
        />
        <Box
          sx={{
            mt: 3,
          }}
        >
          {tab === 'general' && <General />}
          {tab === 'security' && <Security />}
          {tab === 'notice' && <Notice />}
        </Box>
      </Page>
    </AuthGuard>
  );
};

export default Account;
