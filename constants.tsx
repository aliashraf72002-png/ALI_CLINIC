
import React from 'react';
import {
  Stethoscope,
  Sparkles,
  Dna,
  UserRound,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Instagram,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import { Service, GalleryItem } from './types';

export const COLORS = {
  primary: '#228B22',
  secondary: '#FFFFFF',
  accent: '#F3F4F6',
  darkGreen: '#145214'
};

// Image URLs sourced from custom generated assets based on user references
export const SERVICES: Service[] = [
  {
    id: 'cleaning',
    nameEn: 'Teeth Cleaning',
    nameAr: 'تنظيف الأسنان',
    description: 'Professional cleaning and scaling for a healthier smile and fresher breath.',
    descriptionAr: 'تنظيف احترافي وإزالة الجير لابتسامة أكثر صحة ونفَس منعش.',
    icon: 'sparkles',
    imageUrl: '/cleaning-service.png',
    pricing: {
      cost: '3000 EGP',
      installments: true,
      paymentMethods: ['Cash', 'Credit Card', 'Installment Plans']
    }
  },
  {
    id: 'fillings',
    nameEn: 'Fillings',
    nameAr: 'حشو الأسنان',
    description: 'High-quality restorations for cavities using tooth-colored materials.',
    descriptionAr: 'حشوات عالية الجودة لعلاج التسوس باستخدام مواد بلون الأسنان.',
    icon: 'stethoscope',
    imageUrl: '/fillings-service.png',
    pricing: {
      cost: '1500 EGP',
      installments: false,
      paymentMethods: ['Cash', 'Credit Card']
    }
  },
  {
    id: 'ortho',
    nameEn: 'Orthodontics',
    nameAr: 'تقويم الأسنان',
    description: 'Expert alignment and braces to correct bites and straighten your smile.',
    descriptionAr: 'تقويم وخبرة في محاذاة الأسنان لتصحيح العضات والحصول على ابتسامة مستقيمة.',
    icon: 'user-round',
    imageUrl: '/ortho-service.png',
    pricing: {
      cost: '25000 EGP',
      installments: true,
      paymentMethods: ['Cash', 'Visa', 'Monthly Installments']
    }
  },
  {
    id: 'implants',
    nameEn: 'Dental Implants',
    nameAr: 'زراعة الأسنان',
    description: 'Permanent, durable tooth replacements that look and feel natural.',
    descriptionAr: 'بدائل أسنان دائمة ومتينة تبدو وتشعر وكأنها طبيعية.',
    icon: 'shield-check',
    imageUrl: '/implants-service.png',
    pricing: {
      cost: '18000 EGP',
      installments: true,
      paymentMethods: ['Cash', 'Credit Card', 'Bank Finance']
    }
  },
  {
    id: 'whitening',
    nameEn: 'Teeth Whitening',
    nameAr: 'تبييض الأسنان',
    description: 'Safe and effective professional whitening for a brighter, radiant smile.',
    descriptionAr: 'تبييض احترافي آمن وفعال لابتسامة أكثر إشراقاً وبياضاً.',
    icon: 'sparkles',
    imageUrl: '/whitening-service.png',
    pricing: {
      cost: '5000 EGP',
      installments: true,
      paymentMethods: ['Cash', 'Credit Card']
    }
  },
  {
    id: 'emergency',
    nameEn: 'Emergency Care',
    nameAr: 'عناية طارئة',
    description: '24/7 urgent dental services for pain relief and dental trauma.',
    descriptionAr: 'خدمات طوارئ الأسنان على مدار 24 ساعة لتخفيف الألم وعلاج إصابات الأسنان.',
    icon: 'clock',
    imageUrl: '/emergency-service.png',
    pricing: {
      cost: 'Variable',
      installments: false,
      paymentMethods: ['Cash', 'Credit Card']
    }
  }
];

// Gallery items using the high-quality generated images
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Modern Treatment Room', category: 'Clinic', imageUrl: '/cleaning-service.png' },
  { id: '2', title: 'Advanced Dental Surgery', category: 'Surgeries', imageUrl: '/implants-service.png' },
  { id: '3', title: 'Composite Restoration', category: 'Surgeries', imageUrl: '/fillings-service.png' },
  { id: '4', title: 'Orthodontic Excellence', category: 'Case', imageUrl: '/ortho-service.png' },
  { id: '5', title: 'Smile Transformation', category: 'Case', imageUrl: '/whitening-service.png' },
  { id: '6', title: 'Emergency Care Unit', category: 'Clinic', imageUrl: '/emergency-service.png' },
  { id: '7', title: 'Sterilization & Safety', category: 'Clinic', imageUrl: '/fillings-service.png' }, // Reusing fillings as context for procedure/safety
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  'sparkles': <Sparkles className="w-6 h-6" />,
  'stethoscope': <Stethoscope className="w-6 h-6" />,
  'user-round': <UserRound className="w-6 h-6" />,
  'shield-check': <ShieldCheck className="w-6 h-6" />,
  'clock': <Clock className="w-6 h-6" />,
  'dna': <Dna className="w-6 h-6" />
};

export const CONTACT_INFO = {
  phone: '01061597983',
  whatsapp: '201061597983',
  email: 'info@draliashraf.com',
  address: 'Dekernes, Dakahlia, Egypt',
  hours: [
    { day: 'Mon - Fri', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed (Emergency Only)' }
  ]
};
