import React, { FC } from 'react';
import { RouterProps } from 'react-router';
import { List } from '@material-ui/core';
import { useAppSelector } from 'store';
import { Role, Pages, NavigationChild } from 'types';
// eslint-disable-next-line import/no-cycle
import ChildRoutes from '../ChildRoutes';

export interface NavigationListProps {
  router: RouterProps;
  depth?: number;
  pages?: Pages[] | NavigationChild[];
}

const NavigationList: FC<NavigationListProps> = ({
  router,
  depth = 0,
  pages = [],
}) => {
  const { user } = useAppSelector((state) => state.session);

  return (
    <List>
      {
        pages.map((page: Pages | NavigationChild) => (
          <ChildRoutes
            key={page.title}
            router={router}
            page={page}
            depth={depth}
            role={user?.role as Role}
          />
        ))
      }
    </List>
  );
};

export default NavigationList;
