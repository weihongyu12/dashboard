import { ElementType } from 'react';
import { Role } from './sessionTypes';

export interface NavigationChild {
  title: string;
  href: string;
  permission: Role[];
}

export interface Pages {
  title: string;
  href: string;
  icon: ElementType;
  permission: Role[];
  label?: ElementType;
  children?: NavigationChild[];
}

export interface Navigation {
  title: string;
  pages: Pages[];
}

export type NavigationConfig = Navigation[];
