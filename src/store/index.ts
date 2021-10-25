import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import LogRocket from 'logrocket';

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    LogRocket.reduxMiddleware(),
  ],
});

export * from './hooks';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// eslint-disable-next-line max-len
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
