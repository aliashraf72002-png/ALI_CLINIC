
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
    longDescriptionEn: 'Our professional teeth cleaning service goes beyond regular brushing. We use advanced ultrasonic scaling to remove plaque and tartar (calculus) that can lead to gum disease. This procedure is essential for maintaining oral health and preventing cavities.',
    longDescriptionAr: 'تتجاوز خدمة تنظيف الأسنان الاحترافية لدينا تنظيف الأسنان بالفرشاة العادي. نستخدم تقنية الموجات فوق الصوتية المتقدمة لإزالة البلاك والجير الذي يمكن أن يؤدي إلى أمراض اللثة. هذا الإجراء ضروري للحفاظ على صحة الفم ومنع التسوس.',
    benefitsEn: ['Prevents gum disease', 'Removes surface stains', 'Freshens breath', 'Early detection of dental issues'],
    benefitsAr: ['يقي من أمراض اللثة', 'يزيل البقع السطحية', 'ينعش النفس', 'الكشف المبكر عن مشاكل الأسنان'],
    icon: 'sparkles',
    imageUrl: '/cleaning-service.png',
    galleryImages: ['/cleaning-service.png', '/fillings-service.png'],
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
    longDescriptionEn: 'We provide tooth-colored composite fillings that match the natural shade of your teeth. This ensures a durable restoration that is virtually invisible, restoring both the function and aesthetics of your smile.',
    longDescriptionAr: 'نقدم حشوات تجميلية بلون الأسنان تتناسب مع الظل الطبيعي لأسنانك. وهذا يضمن ترميماً متيناً غير مرئي فعلياً، مما يستعيد كلاً من وظيفة وجمال ابتسامتك.',
    benefitsEn: ['Natural appearance', 'Durable material', 'Prevents further decay', 'Mercury-free'],
    benefitsAr: ['مظهر طبيعي', 'مادة متينة', 'يمنع المزيد من التسوس', 'خالٍ من الزئبق'],
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
    longDescriptionEn: 'Our orthodontic treatments include traditional braces and clear aligners. We customize each treatment plan to ensure optimal alignment, improved bite function, and a beautiful, straight smile for patients of all ages.',
    longDescriptionAr: 'تشمل علاجات التقويم لدينا الأقواس التقليدية والمصففات الشفافة. نقوم بتخصيص كل خطة علاج لضمان المحاذاة المثلى، وتحسين وظيفة العض، وابتسامة جميلة ومستقيمة للمرضى من جميع الأعمار.',
    benefitsEn: ['Improved facial aesthetics', 'Better oral hygiene maintenance', 'Corrects bite issues', 'Long-term dental health'],
    benefitsAr: ['تحسين جماليات الوجه', 'صيانة أفضل لنظافة الفم', 'تصحيح مشاكل العض', 'صحة الأسنان على المدى الطويل'],
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
    longDescriptionEn: 'Dental implants are the gold standard for replacing missing teeth. They provide a stable foundation for porcelain crowns, functioning and looking exactly like natural teeth, and helping to preserve jawbone health.',
    longDescriptionAr: 'زراعة الأسنان هي المعيار الذهبي لاستبدال الأسنان المفقودة. فهي توفر أساساً مستقراً لتيجان البورسلين، وتعمل وتبدو تماماً مثل الأسنان الطبيعية، وتساعد في الحفاظ على صحة عظم الفك.',
    benefitsEn: ['Permanent solution', 'Independent of adjacent teeth', 'Preserves jawbone', 'Restores full chewing power'],
    benefitsAr: ['حل دائم', 'مستقل عن الأسنان المجاورة', 'يحافظ على عظم الفك', 'يستعيد قوة المضغ الكاملة'],
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
    longDescriptionEn: 'Transform your smile with our professional whitening treatments. We use high-concentration whitening agents and advanced light technology to remove deep stains and dramatically brighten your teeth in just one visit.',
    longDescriptionAr: 'غير ابتسامتك مع علاجات التبييض الاحترافية لدينا. نستخدم مواد تبييض عالية التركيز وتقنيات ضوئية متقدمة لإزالة البقع العميقة وتفتيح أسنانك بشكل كبير في زيارة واحدة فقط.',
    benefitsEn: ['Immediate results', 'Safe for enamel', 'Customized shade', 'Boosts confidence'],
    benefitsAr: ['نتائج فورية', 'آمن على المينا', 'ظل مخصص', 'يعزز الثقة'],
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
    longDescriptionEn: 'Dental emergencies can happen anytime. Whether you have severe pain, a knocked-out tooth, or a broken crown, our team is ready to provide immediate relief and professional care to save your smile.',
    longDescriptionAr: 'يمكن أن تحدث طوارئ الأسنان في أي وقت. سواء كنت تعاني من ألم شديد، أو فقدان سن، أو كسر تاج، فإن فريقنا جاهز لتقديم راحة فورية وعناية احترافية لإنقاذ ابتسامتك.',
    benefitsEn: ['Pain relief', 'Quick access to care', 'Prevents complications', 'Available 24/7'],
    benefitsAr: ['تخفيف الألم', 'الوصول السريع للرعاية', 'يمنع المضاعفات', 'متاح على مدار الساعة'],
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
  {
    id: '1',
    title: 'Modern Treatment Room',
    titleAr: 'غرفة علاج حديثة',
    category: 'Clinic',
    imageUrl: '/cleaning-service.png',
    descriptionEn: 'Equipped with the latest technology for comfortable and efficient treatments.',
    descriptionAr: 'مجهزة بأحدث التقنيات لعلاجات مريحة وفعالة.'
  },
  {
    id: '2',
    title: 'Advanced Dental Surgery',
    titleAr: 'جراحة أسنان متقدمة',
    category: 'Surgeries',
    imageUrl: '/implants-service.png',
    descriptionEn: 'Sterile environment for complex surgical procedures.',
    descriptionAr: 'بيئة معقمة للإجراءات الجراحية المعقدة.'
  },
  {
    id: '3',
    title: 'Composite Restoration Case',
    titleAr: 'حالة حشو تجميلي',
    category: 'Case',
    imageUrl: '/fillings-service.png',
    problemEn: 'The patient presented with a large cavity on the front tooth, causing sensitivity and aesthetic concerns.',
    problemAr: 'كان المريض يعاني من تسوس كبير في السن الأمامي، مما تسبب في حساسية ومخاوف جمالية.',
    solutionEn: 'We performed a multi-layered composite restoration to perfectly match the natural tooth color and translucency.',
    solutionAr: 'قمنا بإجراء حشو تجميلي متعدد الطبقات ليتناسب تماماً مع لون وشفافية الأسنان الطبيعية.',
    detailsEn: 'Using premium materials, we restored the tooth structure and ensured a seamless blend with the adjacent teeth.',
    detailsAr: 'باستخدام مواد متميزة، قمنا باستعادة بنية السن وضمان تناسق سلس مع الأسنان المجاورة.',
    caseImages: ['/fillings-service.png']
  },
  {
    id: '4',
    title: 'Smile Transformation',
    titleAr: 'تحول الابتسامة',
    category: 'Case',
    imageUrl: '/whitening-service.png',
    problemEn: 'Severe discoloration due to lifestyle habits, leading to low self-esteem.',
    problemAr: 'تغير شديد في اللون بسبب العادات اليومية، مما أدى إلى انخفاض الثقة بالنفس.',
    solutionEn: 'In-office professional whitening combined with home maintenance kits.',
    solutionAr: 'تبييض احترافي في العيادة مع مجموعات صيانة منزلية.',
    detailsEn: 'Achieved 5 shades lighter in just one 60-minute session.',
    detailsAr: 'تم الحصول على تفتيح بمقدار 5 درجات في جلسة واحدة فقط مدتها 60 دقيقة.',
    caseImages: ['/whitening-service.png']
  },
  {
    id: '5',
    title: 'Orthodontic Correction',
    titleAr: 'تصحيح تقويم الأسنان',
    category: 'Case',
    imageUrl: '/ortho-service.png',
    problemEn: 'Crowded teeth and misalignment causing difficulty in cleaning.',
    problemAr: 'تزاحم الأسنان وعدم محاذاتها مما يسبب صعوبة في التنظيف.',
    solutionEn: '18-month treatment plan with traditional ceramic braces.',
    solutionAr: 'خطة علاج لمدة 18 شهراً مع تقويم السيراميك التقليدي.',
    detailsEn: 'Perfect alignment achieved, resulting in improved oral health and a beautiful smile.',
    detailsAr: 'تم تحقيق المحاذاة المثالية، مما أدى إلى تحسين صحة الفم وابتسامة جميلة.',
    caseImages: ['/ortho-service.png']
  }
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
