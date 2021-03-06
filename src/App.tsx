import React, {
  useCallback,
  useEffect,
  useRef,
  FC,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { CssBaseline, IconButton } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { SnackbarProvider, SnackbarKey } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import { HelmetProvider } from 'react-helmet-async';
import theme from 'theme';
import { store } from 'store';
import { RouterConfig } from 'routes';
import {
  LogRocketIdentify,
  ScrollReset,
  ServiceWorker,
  SessionProvider,
} from 'components';
import easterEggs from 'utils/easterEggs';
import 'assets/scss/index.scss';
import 'mock';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const App: FC = function App() {
  const notistackRef = useRef<SnackbarProvider>(null);

  const onClickDismiss = useCallback((key: SnackbarKey) => () => {
    if (notistackRef?.current) {
      notistackRef.current.closeSnackbar(key);
    }
  }, []);

  const handleSnackbar = useCallback((key: SnackbarKey) => (
    <IconButton
      color="inherit"
      size="small"
      onClick={onClickDismiss(key)}
    >
      <CloseIcon />
    </IconButton>
  ), [onClickDismiss]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      easterEggs();
    }
  }, []);

  return (
    <StoreProvider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={zhHansLocale}>
            <SnackbarProvider
              ref={notistackRef}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              maxSnack={1}
              disableWindowBlurListener
              action={handleSnackbar}
            >
              <ConfirmProvider>
                <HelmetProvider>
                  <SessionProvider>
                    <CssBaseline />
                    <ServiceWorker serviceWorker={serviceWorkerRegistration} />
                    <LogRocketIdentify />
                    <BrowserRouter>
                      <ScrollReset />
                      <RouterConfig />
                    </BrowserRouter>
                  </SessionProvider>
                </HelmetProvider>
              </ConfirmProvider>
            </SnackbarProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StoreProvider>
  );
};

export default App;
