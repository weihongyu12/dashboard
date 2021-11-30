import React, {
  useContext,
  useEffect,
  FC,
  ReactNode,
} from 'react';
import { useNavigate, useLocation } from 'react-router';
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

const AuthGuard: FC<AuthGuardProps> = function AuthGuard({ roles, children }) {
  const { session, onSetSession } = useContext(SessionContext);
  const navigate = useNavigate();
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
  }, [navigate, session, onSetSession]);

  useEffect(() => {
    if (session.loggedIn) {
      const sessionUser = session.user;
      if (sessionUser?.role) {
        if (!roles.includes(sessionUser.role)) {
          navigate('/errors/error-403');
        }
      }
    }
  }, [navigate, roles, session.loggedIn, session.user]);

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
          navigate('/auth/login');
        }
      }
    };

    handleCheckSession();
  }, [navigate, location.pathname, session, onSetSession]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default AuthGuard;
