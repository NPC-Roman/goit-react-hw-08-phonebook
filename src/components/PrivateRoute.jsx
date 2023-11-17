import { useAuth } from 'hooks';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const redirect = !isLoggedIn && !isRefreshing;
  return redirect ? <Navigate to={redirectTo} /> : Component;
};
