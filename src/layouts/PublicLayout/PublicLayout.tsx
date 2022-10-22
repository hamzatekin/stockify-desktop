import MaSuspense from '@components/MaSuspense/MaSuspense';
import { AppRoutes } from '@utils/const';
import { lazy } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const LoginPage = lazy(() => import('@pages/Login/Login'));
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFound'));

const publicRoutes: RouteObject[] = [
  {
    path: AppRoutes.LOGIN,
    element: <LoginPage />
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />
  },
  {
    path: '*',
    element: <Navigate to={AppRoutes.LOGIN} replace />
  }
];

const PublicLayout = () => {
  return (
    <>
      <MaSuspense>{useRoutes(publicRoutes)}</MaSuspense>
    </>
  );
};

export default PublicLayout;
