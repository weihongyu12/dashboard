import React, {
  useEffect,
  FC,
  ReactNode,
} from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAppSelector, useAppDispatch } from 'store';
import { login, getUserInfoAsync } from 'reducers';
import { Role } from 'types';

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
  const session = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      dispatch(getUserInfoAsync());
    };

    const sessionUser = session.user;
    if (session.loggedIn && !(sessionUser?.username)) {
      fetchUserInfo();
    }
  }, [dispatch, history, session.loggedIn, session.user]);

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
          dispatch(login(accessToken));
        } else {
          history.push('/auth/login');
        }
      }
    };

    handleCheckSession();
  }, [dispatch, history, location.pathname, session.loggedIn, session.user]);

  return <>{children}</>;
};

export default AuthGuard;
