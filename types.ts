
export interface Service {
  id: string;
  nameEn: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  longDescriptionEn?: string;
  longDescriptionAr?: string;
  benefitsEn?: string[];
  benefitsAr?: string[];
  icon: string;
  imageUrl: string;
  galleryImages?: string[];
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
  titleAr?: string;
  category: 'Clinic' | 'Equipment' | 'Case' | 'Surgeries';
  imageUrl: string;
  descriptionEn?: string;
  descriptionAr?: string;
  problemEn?: string;
  problemAr?: string;
  solutionEn?: string;
  solutionAr?: string;
  detailsEn?: string;
  detailsAr?: string;
  caseImages?: string[];
}
