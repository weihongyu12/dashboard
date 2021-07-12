/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from 'types';
import { authService } from 'service';

interface LoginParams {
  username: string;
  password: string;
}

export interface SessionStoreState {
  loggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  user: UserInfo | null;
}

const initialState = {
  loggedIn: false,
  accessToken: '',
  refreshToken: '',
  user: null,
} as SessionStoreState;

export const loginAsync = createAsyncThunk('session/login', async ({
  username,
  password,
}: LoginParams) => {
  localStorage.clear();

  const response = await authService.login({
    username,
    password,
  });
  return response.accessToken;
});

export const getUserInfoAsync = createAsyncThunk('session/user', async () => {
  const response = await authService.user();
  return response;
});

export const logoutAsync = createAsyncThunk('session/logout', async () => {
  const response = await authService.logout();
  return response.message;
});

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.loggedIn = true;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.accessToken = action.payload;
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { login, logout } = sessionSlice.actions;

export default sessionSlice.reducer;
