
export type Theme = 'light' | 'dark';

export enum PageView {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PRODUCTS = 'PRODUCTS',
  PARTNERS = 'PARTNERS',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  label: string;
  view: PageView;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  category?: string;
}

export interface ERP {
  id: string;
  name: string;
  logo?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}