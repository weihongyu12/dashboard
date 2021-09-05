import React, {
  useContext,
  useEffect,
  FC,
  ReactNode,
} from 'react';
import { useHistory, useLocation } from 'react-router';
import { Role } from 'types';
import { authService } from 'service';
import SessionContext from '../SessionContext';

export interface AuthGuardProps {
  /**
   * 可以用于访问的角色编码
   *
   * - `GENERAL_USER` 普通用户
   * - `ADMINISTRATOR` 管理员
   */
  roles: Role[];
  children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ roles, children }) => {
  const { session, onSetSession } = useContext(SessionContext);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await authService.user();
      onSetSession({
        ...session,
        user: response,
      });
    };

    const sessionUser = session.user;
    if (session.loggedIn && !(sessionUser?.username)) {
      fetchUserInfo();
    }
  }, [history, session, onSetSession]);

  useEffect(() => {
    if (session.loggedIn) {
      const sessionUser = session.user;
      if (sessionUser?.role) {
        if (!roles.includes(sessionUser.role)) {
          history.push('/errors/error-403');
        }
      }
    }
  }, [history, roles, session.loggedIn, session.user]);

  useEffect(() => {
    const handleCheckSession = async () => {
      if (!session.loggedIn) {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken !== null) {
          onSetSession({
            ...session,
            accessToken,
            loggedIn: true,
          });
        } else {
          history.push('/auth/login');
        }
      }
    };

    handleCheckSession();
  }, [history, location.pathname, session, onSetSession]);

  return <>{children}</>;
};

export default AuthGuard;
