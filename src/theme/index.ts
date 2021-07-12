import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { zhCN } from '@material-ui/core/locale';
import '@fontsource/noto-sans-sc/chinese-simplified.css';
import '@fontsource/noto-sans-sc/latin.css';
import '@fontsource/roboto/cyrillic-ext.css';
import '@fontsource/roboto/cyrillic.css';
import '@fontsource/roboto/greek-ext.css';
import '@fontsource/roboto/greek.css';
import '@fontsource/roboto/vietnamese.css';
import '@fontsource/roboto/latin-ext.css';
import '@fontsource/roboto/latin.css';
import '@fontsource/noto-sans/cyrillic-ext.css';
import '@fontsource/noto-sans/cyrillic.css';
import '@fontsource/noto-sans/greek-ext.css';
import '@fontsource/noto-sans/greek.css';
import '@fontsource/noto-sans/vietnamese.css';
import '@fontsource/noto-sans/latin-ext.css';
import '@fontsource/noto-sans/latin.css';
import '@fontsource/noto-sans/devanagari.css';

import palette from './palette';
import overrides from './overrides';

export { palette };
export const fontFamily = [
  'Roboto',
  '-apple-system',
  'BlinkMacSystemFont',
  '"SF Pro Text"',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Helvetica',
  'Verdana',
  'Tahoma',
  'Arial',
  '"Noto Sans"',
  '"Noto Sans CJK SC"',
  '"Noto Sans SC"',
  '"PingFang SC"',
  '"Microsoft YaHei UI"',
  '"Microsoft YaHei"',
  'sans-serif',
  '"Noto Color Emoji"',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const theme = createMuiTheme({
  palette,
  typography: {
    htmlFontSize: 16,
    fontFamily: fontFamily.join(','),
    h1: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: -0.24,
      lineHeight: 40 / 35,
    },
    h2: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: -0.24,
      lineHeight: 32 / 29,
    },
    h3: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: -0.06,
      lineHeight: 28 / 24,
    },
    h4: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: -0.06,
      lineHeight: 24 / 20,
    },
    h5: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: 17,
      letterSpacing: -0.05,
      lineHeight: 20 / 17,
    },
    h6: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: 15,
      letterSpacing: -0.05,
      lineHeight: 20 / 15,
    },
    subtitle1: {
      color: palette.text.primary,
      fontSize: 17,
      letterSpacing: -0.05,
      lineHeight: 25 / 17,
    },
    subtitle2: {
      color: palette.text.secondary,
      fontWeight: 400,
      fontSize: 15,
      letterSpacing: -0.05,
      lineHeight: 21 / 15,
    },
    body1: {
      color: palette.text.primary,
      fontSize: 15,
      letterSpacing: -0.05,
      lineHeight: 21 / 15,
    },
    body2: {
      color: palette.text.secondary,
      fontSize: 13,
      letterSpacing: -0.04,
      lineHeight: 18 / 13,
    },
    button: {
      color: palette.text.primary,
      fontSize: 15,
    },
    caption: {
      color: palette.text.secondary,
      fontSize: 12,
      letterSpacing: '0.33px',
      lineHeight: 13 / 12,
    },
    overline: {
      color: palette.text.secondary,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.33px',
      lineHeight: 13 / 12,
      textTransform: 'uppercase',
    },
  },
  overrides,
}, zhCN);

export default responsiveFontSizes(theme);
