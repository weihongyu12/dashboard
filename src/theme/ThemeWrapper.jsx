import React from 'react';
import PropTypes from 'prop-types';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import theme from './index';

/**
 * ThemeWrapper
 * 用于包装 React Styleguidist 和 单元测试
 * 请不要直接用于业务代码！！！
 */
const ThemeWrapper = (props) => {
  const { children } = props;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

ThemeWrapper.defaultProps = {
  children: null,
};

export default ThemeWrapper;
