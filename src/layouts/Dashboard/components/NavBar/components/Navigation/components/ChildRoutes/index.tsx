import React, { FC } from 'react';
import { RouterProps } from 'react-router';
import { matchPath, useLocation } from 'react-router-dom';
import { Role, Pages, NavigationChild } from 'types';
// eslint-disable-next-line import/no-cycle
import NavigationList from '../NavigationList';
import NavigationListItem from '../NavigationListItem';

export interface ChildRoutesProps {
  router: RouterProps;
  role: Role;
  page: Pages | NavigationChild;
  depth: number;
}

const ChildRoutes: FC<ChildRoutesProps> = ({
  router,
  page,
  depth,
  role,
}) => {
  const location = useLocation();

  const showPages = page.permission.includes(role);

  const renderChildrenList = (pages: Pages) => {
    const open = matchPath(location.pathname, {
      path: pages.href,
      exact: false,
    });

    return showPages ? (
      <NavigationListItem
        depth={depth}
        icon={pages.icon}
        key={pages.title}
        label={pages.label}
        open={Boolean(open)}
        title={pages.title}
      >
        <NavigationList
          depth={depth + 1}
          pages={pages.children}
          router={router}
        />
      </NavigationListItem>
    ) : null;
  };

  const renderChildItem = (child: Pages) => (showPages ? (
    <NavigationListItem
      depth={depth}
      href={child.href}
      icon={child.icon}
      key={child.title}
      label={child.label}
      title={child.title}
    />
  ) : null);

  return ('children' in page && page.children) ? renderChildrenList(page) : renderChildItem(page as Pages);
};

export default ChildRoutes;
