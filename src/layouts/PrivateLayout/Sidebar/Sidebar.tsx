import { Navbar, NavLink, ScrollArea } from '@mantine/core';
import { useLocation, Link } from 'react-router-dom';
import useGlobalStore, {
  globalStoreSelectors,
} from '../../../store/global-store';
import nav from './nav';

const Sidebar = ({ children }: SidebarProps) => {
  const { isBurguerMenuOpen } = useGlobalStore(globalStoreSelectors.burger);
  const location = useLocation();

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!isBurguerMenuOpen}
      width={{ sm: 200, lg: 250 }}
    >
      <Navbar.Section component={ScrollArea} grow mt="xs">
        {nav.map((link) => (
          <div className="py-1 hover:cursor-pointer" key={link.label}>
            <NavLink
              component={Link}
              active={location.pathname === link.to}
              {...link}
              key={link.label}
            />
          </div>
        ))}
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
