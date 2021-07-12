import palette from './palette';
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

export default {
  fontFamily: [
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
    '"Noto Sans SC"',
    '"PingFang SC"',
    '"Microsoft YaHei UI"',
    '"Microsoft YaHei"',
    'sans-serif',
    '"Noto Color Emoji"',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px',
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px',
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px',
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    color: palette.text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px',
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
};
