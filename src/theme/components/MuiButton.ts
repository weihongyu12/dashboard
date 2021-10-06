import palette from '../palette';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    light: true;
  }
}

export default {
  styleOverrides: {
    contained: {
      boxShadow:
        '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    },
    textLight: {
      color: palette.black,
    },
    outlinedLight: {
      color: palette.black,
      borderColor: 'rgba(0, 0, 0, 0.5)',
      '&:hover': {
        borderColor: palette.black,
      },
    },
  },
};
