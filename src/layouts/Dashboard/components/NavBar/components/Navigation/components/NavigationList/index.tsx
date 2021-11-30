import React, { useContext, FC } from 'react';
import { List } from '@mui/material';
import { SessionContext } from 'components';
import { Role, Pages, NavigationChild } from 'types';
import { ChildRoutes } from '../index';

export interface NavigationListProps {
  depth?: number;
  pages?: Pages[] | NavigationChild[];
}

const NavigationList: FC<NavigationListProps> = function NavigationList({
  depth = 0,
  pages = [],
}) {
  const { session } = useContext(SessionContext);
  const { user } = session;

  return (
    <List>
      {
        pages.map((page: Pages | NavigationChild) => (
          <ChildRoutes
            key={page.title}
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
