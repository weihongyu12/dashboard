import React, {
  useCallback,
  useEffect,
  useReducer,
  FC,
} from 'react';
import { Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useSnackbar } from 'notistack';

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

type RegisterHandler = (config: Config) => void;
type UnRegisterHandler = (config: Config) => void;

interface ServiceWorkerRegistrationType {
  register: RegisterHandler;
  unregister: UnRegisterHandler;
}

export interface ServiceWorkerProps {
  serviceWorker: ServiceWorkerRegistrationType;
}

export interface SwStoreState {
  serviceWorkerInitialized: boolean;
  serviceWorkerUpdated: boolean;
  serviceWorkerRegistration: ServiceWorkerRegistration | null;
}

export type SwAction = { type: 'init' } | { type: 'update', payload: ServiceWorkerRegistration | null };

const initialState: SwStoreState = {
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorkerRegistration: null,
};

const reducer = (state: SwStoreState, action: SwAction) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        serviceWorkerInitialized: true,
      };
    case 'update':
      return {
        ...state,
        serviceWorkerUpdated: true,
        serviceWorkerRegistration: action.payload,
      };
    default:
      return state;
  }
};

const ServiceWorker: FC<ServiceWorkerProps> = ({ serviceWorker }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    serviceWorkerInitialized: isServiceWorkerInitialized,
    serviceWorkerUpdated: isServiceWorkerUpdated,
    serviceWorkerRegistration,
  } = state;

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
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorker.register({
      onSuccess: () => dispatch({ type: 'init' }),
      onUpdate: (reg) => dispatch({ type: 'update', payload: reg }),
    });
  }, [serviceWorker]);

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
