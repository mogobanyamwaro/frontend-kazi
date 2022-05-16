import jwtDecode, { JwtPayload } from 'jwt-decode';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const getToken = () => {
  return localStorage.getItem('token');
};
export interface CustomJwtPayload extends JwtPayload {
  role: string;
  _id: string;
}

export const useAuth = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};
export const getRole = (token: string): string | null => {
  if (token) {
    const decode = jwtDecode<CustomJwtPayload>(token);
    if (decode) {
      return decode.role;
    } else {
      return null;
    }
  }
  return null;
};

export const useEmployee = () => {
  const token = getToken();
  if (getRole(token ?? '') === 'EMPLOYEE') {
    return true;
  } else {
    return false;
  }
};
export const useEmployer = () => {
  const token = getToken();
  if (getRole(token ?? '') === 'EMPLOYER') {
    return true;
  } else {
    return false;
  }
};

export const PrivateRoute: React.FC<{ isAdmin?: boolean }> = (props) => {
  const auth = useAuth();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={props.isAdmin ? '/admin/login' : '/login'} />
  );
};

export const PulicRoute: React.FC<{ path: string }> = (props) => {
  const auth = useAuth();
  const token = getToken();

  const role =
    getRole(token ?? '') === 'EMPLOYER'
      ? 'EMPLOYER'
      : getRole(token ?? '') === 'EMPLOYEE'
      ? 'EMPLOYEE'
      : '';

  return auth ? (
    <Navigate
      to={
        role === 'EMPLOYEE'
          ? '/account/employee'
          : role === 'EMPLOYER'
          ? '/account/employer'
          : ''
      }
    />
  ) : (
    <Navigate to={props.path} />
  );
};

export const EmployeeGuard: React.FC = (props) => {
  const employee = useEmployee();
  return employee ? <Outlet /> : <Navigate to="/account/employer" />;
};
export const EmployerGuard: React.FC = (props) => {
  const employer = useEmployer();

  return employer ? <Outlet /> : <Navigate to="/account/employee" />;
};
