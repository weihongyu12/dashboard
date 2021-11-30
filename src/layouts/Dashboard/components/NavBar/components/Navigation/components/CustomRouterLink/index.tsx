import React, {
  forwardRef,
  FC,
  ForwardedRef,
} from 'react';
import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';
import { Box, BoxProps } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  link: {
    flexGrow: 1,
  },
}));

const CustomRouterLink: FC<NavLinkProps> = forwardRef((props, ref: ForwardedRef<BoxProps>) => {
  const classes = useStyles();

  return (
    <Box
      ref={ref}
      display="flex"
      flexGrow={1}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <RouterNavLink className={classes.link} {...props} />
    </Box>
  );
});

export default CustomRouterLink;
