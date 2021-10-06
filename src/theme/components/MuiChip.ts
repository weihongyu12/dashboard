import { blueGrey } from '@mui/material/colors';

export default {
  styleOverrides: {
    root: {
      backgroundColor: blueGrey[50],
      color: blueGrey[900],
    },
    deletable: {
      '&:focus': {
        backgroundColor: blueGrey[100],
      },
    },
  },
};
