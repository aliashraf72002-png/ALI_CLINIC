
export interface Service {
  id: string;
  nameEn: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  imageUrl: string;
  pricing: {
    cost: string;
    installments: boolean;
    paymentMethods: string[];
  };
}

export interface BookingData {
  fullName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  notes?: string;
  serviceId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Equipment' | 'Case' | 'Surgeries';
  imageUrl: string;
}
