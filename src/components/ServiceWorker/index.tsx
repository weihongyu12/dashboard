import React, {
  useCallback,
  useEffect,
  FC,
} from 'react';
import { Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useSnackbar } from 'notistack';
import { useAppSelector } from 'store';

const ServiceWorker: FC = () => {
  const sw = useAppSelector((state) => state.sw);
  const {
    serviceWorkerInitialized: isServiceWorkerInitialized,
    serviceWorkerUpdated: isServiceWorkerUpdated,
    serviceWorkerRegistration,
  } = sw;

  const { enqueueSnackbar } = useSnackbar();

  const updateServiceWorker = useCallback(() => {
    if (serviceWorkerRegistration) {
      const registrationWaiting = serviceWorkerRegistration.waiting;
      if (registrationWaiting) {
        registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
        registrationWaiting.addEventListener('statechange', (e) => {
          const target = e.target as ServiceWorker;
          if (target?.state === 'activated') {
            window.location.reload();
          }
        });
      }
    }
  }, [serviceWorkerRegistration]);

  useEffect(() => {
    if (isServiceWorkerInitialized) {
      enqueueSnackbar('页面已保存供离线使用', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }
  }, [isServiceWorkerInitialized, enqueueSnackbar]);

  useEffect(() => {
    if (isServiceWorkerUpdated) {
      enqueueSnackbar('有可用的新版本，请刷新页面', {
        autoHideDuration: null,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        content: (key, message) => (
          <Alert
            severity="info"
            variant="filled"
            action={(
              <Button
                color="inherit"
                size="small"
                onClick={updateServiceWorker}
              >
                刷新
              </Button>
            )}
          >
            <AlertTitle color="inherit">提示</AlertTitle>
            {message}
          </Alert>
        ),
      });
    }
  }, [isServiceWorkerUpdated, updateServiceWorker, enqueueSnackbar]);

  return null;
};

export default ServiceWorker;
