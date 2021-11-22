import React, {
  useMemo,
  useState,
  FC,
  ReactNode,
} from 'react';
import { Session } from 'types';
import SessionContext, { sessionDefaultValue } from '../SessionContext';

export interface SessionProviderProps {
  children?: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = function SessionProvider({
  children = null,
}) {
  const [session, setSession] = useState<Session>({ ...sessionDefaultValue });

  const handleSetSession = (newSession: Session) => {
    setSession({ ...newSession });
  };

  const handleClearSession = () => {
    setSession({ ...sessionDefaultValue });
  };

  const value = useMemo(() => ({
    session,
    onSetSession: handleSetSession,
    onClearSession: handleClearSession,
  }), [session]);

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
