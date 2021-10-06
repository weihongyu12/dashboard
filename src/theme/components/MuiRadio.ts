type ColorProps = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';

export default {
  defaultProps: {
    color: 'secondary' as ColorProps,
  },
};
