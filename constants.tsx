import { Category, Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Our Products', href: '#products' },
  { label: 'Bulk Orders', href: '#quote' },
  { label: 'About Us', href: '#footer' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SABS Approved Yellow Industrial Hard Hat',
    category: Category.HEAD,
    description: 'High-visibility yellow safety helmet with reinforced ribbing for maximum impact resistance. Sourced directly for site safety compliance.',
    image: 'https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg',
    features: ['SABS Certified', '6-Point Suspension', 'Shock Resistant Shell'],
    industrialRating: 'SANS 1397'
  },
  {
    id: '2',
    name: 'Pro-Series Red & Black Impact Gloves',
    category: Category.HAND,
    description: 'Heavy-duty protection with TPR impact shields on the knuckles and fingers. Designed for high-risk industrial and mining operations.',
    image: 'https://images.pexels.com/photos/8487790/pexels-photo-8487790.jpeg',
    features: ['Vibration Dampening', 'Cut Resistant', 'Superior Grip'],
    industrialRating: 'EN 388:2016'
  },
  {
    id: '3',
    name: 'Passion Hi-Viz Criss Cross Lime Vest',
    category: Category.BODY,
    description: 'Signature criss-cross lime reflective vest. Lightweight mesh with high-intensity reflective tape for 360-degree visibility.',
    image: 'https://images.pexels.com/photos/8486979/pexels-photo-8486979.jpeg',
    features: ['Class 2 Visibility', 'Zip & ID Pocket', 'Breathable Mesh'],
    industrialRating: 'EN ISO 20471'
  },
  {
    id: '4',
    name: 'Blue Integrated Pro-Protection Set',
    category: Category.MINING,
    description: 'A complete specialized protection kit featuring a reinforced blue hard hat, panoramic clear goggles, and a high-performance valve respirator.',
    image: 'https://images.pexels.com/photos/3846183/pexels-photo-3846183.jpeg',
    features: ['Complete Face Seal', 'Anti-Fog Goggles', 'N95 Valve Mask'],
    industrialRating: 'SANS 20345 Compliant'
  },
  {
    id: '5',
    name: 'Clear Wide-View Panoramic Goggles',
    category: Category.EYE,
    description: 'Industrial safety goggles with indirect ventilation and anti-fog coating. Fits comfortably over most prescription eyewear.',
    image: 'https://images.pexels.com/photos/7789650/pexels-photo-7789650.jpeg',
    features: ['Indirect Ventilation', 'Anti-Fog Coating', 'Prescription Compatible'],
    industrialRating: 'ANSI Z87.1+'
  },
  {
    id: '6',
    name: 'Premium D59 Flame & Acid Resistant Work Suit',
    category: Category.BODY,
    description: 'High-performance industrial boiler suit designed for extreme durability in mining and construction. Features 100% cotton D59 fabric with specialized protective finishes.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    features: ['Flame Retardant', 'Acid Resistant', 'Triple Stitched'],
    industrialRating: 'SANS 434'
  }
];
