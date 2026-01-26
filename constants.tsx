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
    name: 'Industrial Valve Respirator (N95)',
    category: Category.RESPIRATORY,
    description: 'Superior protection against fine dust and particles. Features a cool-flow valve to reduce heat build-up.',
    image: 'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg',
    features: ['95% Filtration', 'Comfort Straps', 'Valved Exhaust'],
    industrialRating: 'NIOSH N95'
  }
];
