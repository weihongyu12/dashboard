import React, { FC } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { Role, Pages, NavigationChild } from 'types';
import { NavigationList, NavigationListItem } from '../index';

export interface ChildRoutesProps {
  role: Role;
  page: Pages | NavigationChild;
  depth: number;
}

const ChildRoutes: FC<ChildRoutesProps> = function ChildRoutes({
  page,
  depth,
  role,
}) {
  const location = useLocation();

  const showPages = page.permission.includes(role);

  const renderChildrenList = (pages: Pages) => {
    const open = matchPath(location.pathname, pages.href);

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
