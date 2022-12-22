import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { IAppStore } from '../redux/store';
import { PublicRoutes } from '../routes';

export const AuthGuard = () => {
  const { token } = useSelector((store: IAppStore) => store.user);
  return token ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />;
};
