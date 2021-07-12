import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { swReducer, sessionReducer } from 'reducers';

export const store = configureStore({
  reducer: {
    sw: swReducer,
    session: sessionReducer,
  },
});

export * from './hooks';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// eslint-disable-next-line max-len
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
