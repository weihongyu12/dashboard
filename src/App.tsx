import React, {
  useCallback,
  useEffect,
  useRef,
  FC,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider as StoreProvider } from 'react-redux';
import { CssBaseline, IconButton } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { SnackbarProvider, SnackbarKey } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import theme from 'theme';
import { store } from 'store';
import routes from 'routes';
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

const App: FC = () => {
  const notistackRef = useRef<SnackbarProvider>(null);

  const onClickDismiss = useCallback((key: SnackbarKey) => () => {
    if (notistackRef?.current) {
      notistackRef.current.closeSnackbar(key);
    }
  }, []);

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
              action={(key) => (
                <IconButton
                  color="inherit"
                  size="small"
                  onClick={onClickDismiss(key)}
                >
                  <CloseIcon />
                </IconButton>
              )}
            >
              <ConfirmProvider>
                <SessionProvider>
                  <CssBaseline />
                  <ServiceWorker serviceWorker={serviceWorkerRegistration} />
                  <LogRocketIdentify />
                  <BrowserRouter>
                    <ScrollReset />
                    {routes && renderRoutes(routes)}
                  </BrowserRouter>
                </SessionProvider>
              </ConfirmProvider>
            </SnackbarProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StoreProvider>
  );
};

export default App;
