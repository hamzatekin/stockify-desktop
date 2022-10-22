import { AppRoutes } from '@utils/const';
import { RiDeviceRecoverLine } from 'react-icons/ri';

const nav: MainLinkProps[] = [
  {
    icon: <RiDeviceRecoverLine size={16} />,
    color: 'blue',
    label: 'Anasayfa',
    to: AppRoutes.HOME,
  },
  {
    icon: <RiDeviceRecoverLine size={16} />,
    color: 'blue',
    label: 'Stok',
    to: AppRoutes.STOCK,
  },
];

export default nav;
