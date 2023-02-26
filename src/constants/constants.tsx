import {
  ExploreIcon,
  InvestmentsIcon,
  MessageIcon,
  MoreIcon,
  ProfileIcon,
  SettingsIcon,
  TaxIcon,
  TransactionsIcon,
} from '../icons';
import {COLORS} from './theme';

export const DrawerList = [
  {id: 1, label: 'Overview', icon: <MoreIcon />},
  {
    id: 2,
    label: 'Investments',
    icon: <InvestmentsIcon />,
  },
  {
    id: 3,
    label: 'Transactions',
    icon: <TransactionsIcon />,
  },
  {
    id: 4,
    label: 'Explore',
    icon: <ExploreIcon />,
  },
  {
    id: 5,
    label: 'Tax Center',
    icon: <TaxIcon />,
  },
  {id: 6, label: 'Messages', icon: <MessageIcon />},
  {id: 7, label: 'Profile', icon: <ProfileIcon />},
  {id: 8, label: 'Settings', icon: <SettingsIcon />},
];