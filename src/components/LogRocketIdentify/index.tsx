import { useContext, useEffect, FC } from 'react';
import LogRocket from 'logrocket';
import SessionContext from '../SessionContext';

const LogRocketIdentify: FC = function LogRocketIdentify() {
  const { session } = useContext(SessionContext);

  useEffect(() => {
    if (session.user) {
      LogRocket.identify(session.user.id, {
        ...session.user,
      });
    }
  }, [session.user]);

  return null;
};

export default LogRocketIdentify;
