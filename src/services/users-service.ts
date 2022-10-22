/* eslint-disable import/prefer-default-export */
import { AryaServer } from '../enums';
import usersClient from './clients/users-client';

export const getAllUsers = async (server: AryaServer) => {
  const { results }: PaginatedResponse<UsersResponse> = await usersClient.get(
    '',
    { params: { server } }
  );
  return results;
};
