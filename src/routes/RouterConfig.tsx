import React, { lazy, FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Auth as AuthLayout,
  Dashboard as DashboardLayout,
  Error as ErrorLayout,
} from 'layouts';
import navigationConfig from './navigationConfig';

const Login = lazy(() => import(/* webpackChunkName: 'login' */ 'views/Login'));
const Error403 = lazy(() => import(/* webpackChunkName: 'error-403' */ 'views/Error403'));
const Error404 = lazy(() => import(/* webpackChunkName: 'error-404' */ 'views/Error404'));
const Error500 = lazy(() => import(/* webpackChunkName: 'error-500' */ 'views/Error500'));

const Home = lazy(() => import(/* webpackChunkName: 'home' */ 'views/Home'));
const Account = lazy(() => import(/* webpackChunkName: 'account' */ 'views/Account'));
const TableList = lazy(() => import(/* webpackChunkName: 'table-list' */ 'views/TableList'));

const RouterConfig: FC = function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout navigation={navigationConfig} />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/:tab" element={<Account />} />
        <Route path="/table-list" element={<TableList />} />
        <Route path="/*" element={<Navigate to="/errors/error-404" replace />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/*" element={<Navigate to="/errors/error-404" replace />} />
      </Route>
      <Route path="/errors" element={<ErrorLayout />}>
        <Route path="/errors/error-403" element={<Error403 />} />
        <Route path="/errors/error-404" element={<Error404 />} />
        <Route path="/errors/error-500" element={<Error500 />} />
        <Route path="/errors/*" element={<Navigate to="/errors/error-404" replace />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
