import { 
  HiOutlineShieldCheck, 
  HiOutlineQrCode, 
  HiOutlineCloud, 
  HiOutlinePhone, 
  HiOutlineStar, 
  HiOutlineCheckCircle, 
  HiOutlineSquares2X2,
  HiOutlineServerStack,
  HiOutlineVideoCameraSlash,
  HiOutlineSignal,
  HiOutlineWrench
} from 'react-icons/hi2';

export const serviceIcons = {
  networking: HiOutlineQrCode,
  'data-centre': HiOutlineCloud,
  'data-storage': HiOutlineSquares2X2,
  virtualization: HiOutlineServerStack,
  'cyber-security': HiOutlineShieldCheck,
  'backup-solution': HiOutlineCloud,
  'video-conferencing': HiOutlineVideoCameraSlash,
  'wireless-networking': HiOutlineSignal,
  maintenance: HiOutlineWrench,
} as const;

export const statIcons = {
  uptime: HiOutlineCheckCircle,
  endpoints: HiOutlineShieldCheck,
  datacenters: HiOutlineCloud,
  satisfaction: HiOutlineStar,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
export type StatIconKey = keyof typeof statIcons; 