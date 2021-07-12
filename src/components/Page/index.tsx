import React, { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

export interface PageProps {
  /**
   * 页面标题
   */
  title: string;
  children: ReactNode;
  /**
   * 组件样式
   */
  className?: string;
}

const Page: FC<PageProps> = ({ title, children, className = '' }) => (
  <div className={className} data-testid="page">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
);

export default Page;
