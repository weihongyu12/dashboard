import {
  cyan,
  pink,
  red,
  blueGrey,
  grey,
} from '@material-ui/core/colors';

const white = '#FFFFFF';
const black = 'rgba(0, 0, 0, 0.87)';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: cyan[900],
    main: cyan[700],
    light: cyan[500],
  },
  secondary: {
    contrastText: white,
    dark: pink.A700,
    main: pink.A400,
    light: pink.A200,
  },
  error: {
    contrastText: white,
    dark: red[900],
    main: red[600],
    light: red[400],
  },
  text: {
    primary: blueGrey[900],
    secondary: blueGrey[600],
    link: pink[600],
  },
  link: pink[800],
  icon: blueGrey[700],
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  divider: grey[200],
};
