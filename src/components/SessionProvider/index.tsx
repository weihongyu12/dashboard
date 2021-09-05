import React, { useState, FC, ReactNode } from 'react';
import { Session } from 'types';
import SessionContext, { sessionDefaultValue } from '../SessionContext';

export interface SessionProviderProps {
  children?: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({
  children = null,
}) => {
  const [session, setSession] = useState<Session>({ ...sessionDefaultValue });

  const handleSetSession = (newSession: Session) => {
    setSession({ ...newSession });
  };

  const handleClearSession = () => {
    setSession({ ...sessionDefaultValue });
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        onSetSession: handleSetSession,
        onClearSession: handleClearSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
