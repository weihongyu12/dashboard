import React, { lazy } from 'react';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import {
  Auth as AuthLayout,
  Dashboard as DashboardLayout,
  Error as ErrorLayout,
} from 'layouts';
import navigationConfig from './navigationConfig';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'login' */ 'views/Login')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-403',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'error-403' */ 'views/Error403')),
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'error-404' */ 'views/Error404')),
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'error-500' */ 'views/Error500')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    route: '*',
    component: (props: RouteConfigComponentProps) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <DashboardLayout {...props} navigation={navigationConfig} />
    ),
    routes: [
      {
        path: '/home',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'home' */ 'views/Home')),
      },
      {
        path: '/account',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'account' */ 'views/Account')),
      },
      {
        path: '/account/:tab',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'account' */ 'views/Account')),
      },
      {
        path: '/table-list',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'table-list' */ 'views/TableList')),
      },
      {
        path: '/hello-world',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'hello-world' */ 'views/HelloWorld')),
      },
      {
        path: '/recruitment',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'recruitment' */ 'views/Recruitment')),
      },
      {
        path: '/card-list',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'account' */ 'views/Cardlist')),
      },
      {
        path: '/formpage',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'account' */ 'views/Frompage')),
      },
      {
        path: '/hello',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'hello' */ 'views/Hello')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
];

export default routes;
