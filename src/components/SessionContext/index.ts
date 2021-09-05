import React from 'react';
import { Session } from 'types';

export const sessionDefaultValue = {
  loggedIn: false,
  accessToken: '',
  refreshToken: '',
  user: null,
};

export type SetSessionHandler = (session: Session) => void;
export type ClearSessionHandler = () => void;

export interface SessionContextType {
  session: Session;
  onSetSession: SetSessionHandler;
  onClearSession: ClearSessionHandler;
}

const SessionContext = React.createContext<SessionContextType>({
  session: { ...sessionDefaultValue },
  onSetSession: () => {},
  onClearSession: () => {},
});

export default SessionContext;
