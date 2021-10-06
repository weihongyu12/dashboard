import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      fontSize: 16,
    },
    input: {
      '&::placeholder': {
        opacity: 1,
        color: palette.text.secondary,
      },
    },
  },
};
