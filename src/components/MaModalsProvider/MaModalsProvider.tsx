import { ModalsProvider } from '@mantine/modals';

const MaModalsProvider = ({ children }: MaModalsProviderProps) => {
  const modals = {};

  return (
    <>
      <ModalsProvider modals={modals}>{children}</ModalsProvider>
    </>
  );
};

export default MaModalsProvider;
