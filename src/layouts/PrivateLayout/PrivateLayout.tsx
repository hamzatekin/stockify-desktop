import MaSuspense from '@components/MaSuspense/MaSuspense';
import { AppShell, useMantineTheme } from '@mantine/core';
import { privateRoutes } from '@router/private-routes';
import { useRoutes } from 'react-router-dom';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  const theme = useMantineTheme();

  return (
    <AppShell
      header={<Header />}
      navbar={<Sidebar />}
      footer={<Footer />}
      navbarOffsetBreakpoint="sm"
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      }}
    >
      <Content>
        <MaSuspense>{useRoutes(privateRoutes)}</MaSuspense>
      </Content>
    </AppShell>
  );
};

export default Layout;
