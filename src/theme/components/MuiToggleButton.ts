import { grey } from '@mui/material/colors';

import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      color: palette.icon,
      '&:hover': {
        backgroundColor: grey[100],
      },
      '&$selected': {
        backgroundColor: grey[50],
        color: palette.primary.main,
        '&:hover': {
          backgroundColor: grey[100],
        },
      },
      '&:first-child': {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
      },
      '&:last-child': {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
      },
    },
  },
};
