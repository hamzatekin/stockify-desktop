import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { AppRoutes } from '../utils/const';

const HomePage = lazy(() => import('@pages/Home/Home'));
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFound'));
const StockPage = lazy(() => import('@pages/Stock/Stock'));

export const privateRoutes: RouteObject[] = [
  {
    path: AppRoutes.HOME,
    element: <HomePage />
  },
  {
    path: AppRoutes.STOCK,
    element: <StockPage />
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />
  },
  {
    path: AppRoutes.HOME,
    element: <Navigate to={AppRoutes.NOT_FOUND} replace />
  }
];
