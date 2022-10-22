import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';

// export const insertTokenInterceptor = (req: AxiosRequestConfig<any>) => {
//   const token = getAccessToken();
//   if (token) {
//     req.headers = { ...req.headers, Authorization: `Mint-Admin ${token}` };
//   }

//   return req;
// };

export const responseSuccessHandler = ({ data }: AxiosResponse<any, any>) => {
  return data;
};

export const responseErrorHandler = async (err: AxiosError<any, any>) => {
  let errorMessage = 'Something went wrong. Please try again later.';

  const { response, request } = err;

  if (response) {
    if (response.status === StatusCodes.UNAUTHORIZED) {
      errorMessage =
        response?.data?.detail || 'Username or password is incorrect.';
      // logUserOut();
    }

    if (response.status === StatusCodes.FORBIDDEN) {
      errorMessage = 'You are not authorized to perform this action.';
    }

    if (response.status === StatusCodes.BAD_REQUEST) {
      errorMessage = 'Bad request';
    }

    if (response.data && response.data.message) {
      Promise.reject(response.data.message || errorMessage);
    }
  } else if (request) {
    console.log(request);
  }

  return Promise.reject(new Error(errorMessage));
};

// export const refreshInterceptor = async (failedRequest: any) => {
// 	const accessToken = await refresh();
// 	const { setAccessToken } = useUserStore.getState();
// 	setAccessToken(accessToken);
// 	failedRequest.response.config.headers.Authorization = `Mint-Admin ${accessToken}`;
// 	return Promise.resolve();
// };
