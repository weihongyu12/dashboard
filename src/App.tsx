import React, { useEffect, useRef, FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { CssBaseline, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { SnackbarProvider, SnackbarKey } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import theme from 'theme';
import routes from 'routes';
import { ScrollReset, ServiceWorker } from 'components';
import easterEggs from 'utils/easterEggs';
import 'assets/scss/index.scss';
import 'mock';

const App: FC = () => {
  const notistackRef = useRef<SnackbarProvider>(null);

  const onClickDismiss = (key: SnackbarKey) => () => {
    if (notistackRef?.current) {
      notistackRef.current.closeSnackbar(key);
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      easterEggs();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhHansLocale}>
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
            <CssBaseline />
            <ServiceWorker />
            <BrowserRouter>
              <ScrollReset />
              {routes && renderRoutes(routes)}
            </BrowserRouter>
          </ConfirmProvider>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
