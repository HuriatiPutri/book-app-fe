import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

interface Props {
    allowedRoles: string[];
}

const Auth = ({ allowedRoles }: Props) => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  console.log(auth?.auth);

  return allowedRoles.some((role) => auth?.auth?.role?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/noAccess" state={{ from: location }} replace />
  );
};

export default Auth;