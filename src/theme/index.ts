import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { zhCN } from '@mui/material/locale';
import palette from './palette';
import typography from './typography';
import components from './components';

export { palette };

const theme = createTheme({
  palette,
  typography,
  components,
}, zhCN);

export default responsiveFontSizes(theme);
