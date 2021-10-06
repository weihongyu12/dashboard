type ColorProps = 'inherit' | 'primary' | 'secondary' | 'default';

export default {
  defaultProps: {
    color: 'secondary' as ColorProps,
  },
};
