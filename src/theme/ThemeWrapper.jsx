import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import theme from './index';

/**
 * ThemeWrapper
 * 用于包装 React Styleguidist 和 单元测试
 * 请不要直接用于业务代码！！！
 */
const ThemeWrapper = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

ThemeWrapper.defaultProps = {
  children: null,
};

export default ThemeWrapper;
