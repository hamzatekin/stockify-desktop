interface SidebarProps {
  children?: import('react').ReactNode;
}

interface MainLinkProps {
  icon: import('react').ReactNode;
  color: string;
  label: string;
  to: import('@utils/const').AppRoutes;
}
