
export enum Category {
  HEAD = 'Head Protection',
  EYE = 'Eye & Face',
  HAND = 'Hand Protection',
  BODY = 'Body & Hi-Vis',
  FOOT = 'Footwear',
  RESPIRATORY = 'Respiratory',
  MINING = 'Mining Specialty'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price?: number;
  image: string;
  features: string[];
  industrialRating: string;
}

export interface NavItem {
  label: string;
  href: string;
}
