import { blueGrey } from '@mui/material/colors';

type ColorProps = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';

export default {
  defaultProps: {
    color: 'secondary' as ColorProps,
  },
  styleOverrides: {
    root: {
      borderRadius: 3,
      overflow: 'hidden',
    },
    colorPrimary: {
      backgroundColor: blueGrey[50],
    },
  },
};
