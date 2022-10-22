export const USERNAME = 'username';
export const PASSWORD = 'password';

export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

export const LOADING = 'loading';
export const SUCCESS = 'success';
export const ERROR = 'error';
export const IDLE = 'idle';

export const ENTER = 'Enter';

export enum AppRoutes {
  HOME = '/',
  LOGIN = '/login',
  NOT_FOUND = '/404',
  STOCK = '/stocks',
}

export enum MintAdminApiRoutes {
  AUTH = '/auth',
  LOGIN = '/auth/login',
  REFRESH = '/auth/refresh',
  ACCOUNTS = '/accounts',
  USERS = '/users',
  APPS = '/apps',
  DEVICES = '/devices',
}

export enum AryaServer {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
