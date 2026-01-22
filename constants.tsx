
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
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
    features: ['SABS Certified', '6-Point Suspension', 'Shock Resistant Shell'],
    industrialRating: 'SANS 1397'
  },
  {
    id: '2',
    name: 'Pro-Series Red & Black Impact Gloves',
    category: Category.HAND,
    description: 'Heavy-duty protection with TPR impact shields on the knuckles and fingers. Designed for high-risk industrial and mining operations.',
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800',
    features: ['Vibration Dampening', 'Cut Resistant', 'Superior Grip'],
    industrialRating: 'EN 388:2016'
  },
  {
    id: '3',
    name: 'Passion Hi-Viz Criss Cross Lime Vest',
    category: Category.BODY,
    description: 'Signature criss-cross lime reflective vest as featured in the U-Safety Solutions catalog. Lightweight mesh with high-intensity reflective tape.',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=800',
    features: ['Class 2 Visibility', 'Zip & ID Pocket', 'Breathable Mesh'],
    industrialRating: 'EN ISO 20471'
  },
  {
    id: '4',
    name: 'Blue Integrated Pro-Protection Set',
    category: Category.MINING,
    description: 'A complete specialized protection kit featuring the BK Blue Hard Hat, panoramic clear goggles, and high-performance valve respirator mask.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
    features: ['Complete Face Seal', 'Anti-Fog Goggles', 'N95 Valve Mask'],
    industrialRating: 'SANS 20345 Compliant'
  },
  {
    id: '5',
    name: 'Disposable Nitrile Industrial Gloves',
    category: Category.HAND,
    description: 'Powder-free, high-tactility disposable gloves for precision handling and chemical protection. Sourced for industrial laboratories.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800',
    features: ['Latex-Free', 'Textured Fingertips', 'Tear Resistant'],
    industrialRating: 'EN 455'
  },
  {
    id: '6',
    name: 'Clear Wide-View Panoramic Goggles',
    category: Category.EYE,
    description: 'Industrial safety goggles with indirect ventilation and anti-fog coating. Fits comfortably over most prescription eyewear.',
    image: 'https://images.unsplash.com/photo-1591506539321-f09dca9b8417?auto=format&fit=crop&q=80&w=800',
    features: ['Indirect Ventilation', 'Anti-Scratch Lens', 'Soft Face Seal'],
    industrialRating: 'ANSI Z87.1+'
  }
];
