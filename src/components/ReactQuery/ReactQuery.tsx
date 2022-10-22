import { showNotification } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ReactQuery = ({ children }: QueryClientProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryDelay: 0,
        refetchOnWindowFocus: false,
        staleTime: 0,
        onError: (err: any) => {
          showNotification({
            title: 'Error :(',
            message: err.message,
            color: 'red',
          });
        },
      },
      mutations: {
        retry: false,
        retryDelay: 0,
        onSuccess: (data: any) => {
          showNotification({ title: 'Success <3', message: '', color: 'blue' });
        },
        onError: (err: any) => {
          showNotification({
            title: 'Error :(',
            message: err.message,
            color: 'red',
          });
        },
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default ReactQuery;
