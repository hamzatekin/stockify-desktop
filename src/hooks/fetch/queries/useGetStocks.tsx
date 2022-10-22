import { QueryKeys } from '@hooks/hooks.const';
import { useQuery } from '@tanstack/react-query';

const useGetStocks = () => {
  return useQuery({
    queryKey: QueryKeys.useGetAllStocks(),
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json()
      ),
  });
};

export default useGetStocks;
