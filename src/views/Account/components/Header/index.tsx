import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  BoxProps,
} from '@mui/material';

const Header: FC<BoxProps> = function Header({ sx = {} }) {
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="hover"
        >
          首页
        </Link>
        <Typography
          color="textPrimary"
        >
          个人中心
        </Typography>
      </Breadcrumbs>
      <Typography
        component="h1"
        variant="h3"
      >
        个人中心
      </Typography>
    </Box>
  );
};

export default Header;
