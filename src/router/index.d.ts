export type RouteComponentType = {
  key: number;
  name: string;
  exact: boolean;
  path: import('../utils/const').AppRoutes;
  component: import('react').ComponentType;
};
