import React, { FC } from 'react';
import { Box, BoxProps } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export interface PageProps extends BoxProps {
  /**
   * 页面标题
   */
  title: string;
}

const Page: FC<PageProps> = function Page({
  title,
  children,
  component = 'div',
  sx = {},
}) {
  return (
    <Box
      component={component}
      sx={{
        ...sx,
      }}
      data-testid="page"
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
};

export default Page;
