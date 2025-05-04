import { ReactNode, ReactElement } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}

export interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialItem {
  name: string;
  href: string;
  icon: (props: any) => ReactElement;
}

export interface Feature {
  name: string;
  description: string;
  longDescription: string;
  icon: JSX.Element;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  category: 'infrastructure' | 'security' | 'networking';
} 