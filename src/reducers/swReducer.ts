/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SwStoreState {
  serviceWorkerInitialized: boolean;
  serviceWorkerUpdated: boolean;
  serviceWorkerRegistration: ServiceWorkerRegistration | null;
}

const initialState = {
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorkerRegistration: null,
} as SwStoreState;

const swSlice = createSlice({
  name: 'sw',
  initialState,
  reducers: {
    swInit: (state) => {
      state.serviceWorkerInitialized = true;
    },
    swUpdate: (state, action: PayloadAction<ServiceWorkerRegistration>) => {
      state.serviceWorkerUpdated = true;
      state.serviceWorkerRegistration = action.payload;
    },
  },
});

export const { swInit, swUpdate } = swSlice.actions;

export default swSlice.reducer;
