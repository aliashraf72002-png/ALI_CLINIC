import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
    [key: string]: {
        en: string;
        ar: string;
    };
    aboutPoints: {
        en: string; // Placeholder, actually ignored in code logic for specific structures but kept for type signature compatibility if needed, or we use 'any'
        ar: string;
    } | any;
}

export const translations: any = {
    // Navbar
    clinicName: { en: 'Dr. Ali Ashraf Clinic', ar: 'عيادة د. علي أشرف' },
    home: { en: 'Home', ar: 'الرئيسية' },
    about: { en: 'About', ar: 'من نحن' },
    services: { en: 'Services', ar: 'خدماتنا' },
    gallery: { en: 'Gallery', ar: 'معرض الصور' },
    contact: { en: 'Contact', ar: 'تواصل معنا' },
    bookNow: { en: 'Book Now', ar: 'احجز الآن' },
    bookAppointment: { en: 'Book Appointment', ar: 'احجز موعد' },

    // Hero
    heroTitle1: { en: 'Your Smile,', ar: 'ابتسامتك،' },
    heroTitle2: { en: 'Our Priority', ar: 'أولويتنا' },
    heroSubtitle: { en: 'Experience world-class dental care with a gentle touch. From routine checkups to full smile makeovers, we ensure your comfort at every step.', ar: 'اختبر رعاية أسنان عالمية المستوى بلمسة لطيفة. من الفحوصات الروتينية إلى تجميل الابتسامة الكامل، نضمن راحتك في كل خطوة.' },
    badgeText: { en: '#1 Dental Care in Dekernes', ar: 'الرعاية الأولى للأسنان في دكرنس' },

    // Stats & Trust
    yearsExp: { en: 'Years Experience', ar: 'سنوات خبرة' },
    happyPatients: { en: 'Happy Patients', ar: 'مريض سعيد' },
    patientRating: { en: 'Patient Rating', ar: 'تقييم المرضى' },
    fdaApproved: { en: 'FDA Approved', ar: 'معتمدة من FDA' },
    expertDoctors: { en: 'Expert Doctors', ar: 'أطباء خبراء' },
    support247: { en: '24/7 Support', ar: 'دعم 24/7' },
    primeLocation: { en: 'Prime Location', ar: 'موقع متميز' },
    certifiedSpecialists: { en: 'Certified Specialists', ar: 'أطباء متخصصون' },
    boardCertified: { en: 'Board-certified dental professionals', ar: 'أطباء أسنان معتمدون من البورد' },

    // Home Sections
    ourSpecialties: { en: 'Our Specialties', ar: 'تخصصاتنا' },
    comprehensiveSolutions: { en: 'Comprehensive Dental Solutions', ar: 'حلول أسنان شاملة' },
    servicesDesc: { en: 'We provide a wide range of oral healthcare services to ensure your smile remains bright and healthy for years to come.', ar: 'نقدم مجموعة واسعة من خدمات رعاية الفم لضمان بقاء ابتسامتك مشرقة وصحية لسنوات قادمة.' },
    learnMore: { en: 'Learn More', ar: 'اقرأ المزيد' },
    viewAllServices: { en: 'View all services', ar: 'عرض جميع الخدمات' },

    aboutClinic: { en: 'About Our Clinic', ar: 'عن عيادتنا' },
    aboutTitle: { en: 'Expert Care with a Personal Touch', ar: 'رعاية خبيرة بلمسة شخصية' },
    aboutDesc: { en: 'At Dr. Ali Ashraf Clinic, we believe that a visit to the dentist should be something to look forward to. Our state-of-the-art clinic is designed with your comfort in mind, featuring the latest technology and a team dedicated to providing gentle, effective care.', ar: 'في عيادة د. علي أشرف، نؤمن بأن زيارة طبيب الأسنان يجب أن تكون مريحة. تم تصميم عيادتنا الحديثة مع وضع راحتك في الاعتبار، وتجهيزها بأحدث التقنيات وفريق مخصص لتقديم رعاية لطيفة وفعالة.' },
    aboutPoints: {
        imaging: { en: 'Advanced digital imaging', ar: 'تصوير رقمي متطور' },
        painless: { en: 'Painless laser dentistry', ar: 'علاج ليزر غير مؤلم' },
        relaxing: { en: 'Calm and relaxing environment', ar: 'بيئة هادئة ومريحة' },
        bilingual: { en: 'Bilingual professional staff', ar: 'طاقم محترف ثنائي اللغة' }
    },
    learnMoreAboutUs: { en: 'Learn More About Us', ar: 'اعرف المزيد عنا' },

    readySmile: { en: 'Ready for Your Best Smile?', ar: 'جاهز لابتسامتك الأفضل؟' },
    ctaDesc: { en: 'Join thousands of happy patients and experience the Dr. Ali Ashraf difference today. Book your consultation in minutes.', ar: 'انضم لآلاف المرضى السعداء واختبر الفرق مع د. علي أشرف اليوم. احجز استشارتك في دقائق.' },
    callUs: { en: 'Call Us', ar: 'اتصل بنا' },

    // Footer
    quickLinks: { en: 'Quick Links', ar: 'روابط سريعة' },
    contactUs: { en: 'Contact Us', ar: 'تواصل معنا' },
    contactUsHeader: { en: 'Get in Touch', ar: 'تواصل معنا' },
    contactDesc: { en: 'Have a question or need to schedule a visit? Our friendly team is ready to help you with anything you need.', ar: 'لديك سؤال أو تحتاج لحجز زيارة؟ فريقنا الودود مستعد لمساعدتك في أي شيء تحتاجه.' },
    workingHours: { en: 'Working Hours', ar: 'ساعات العمل' },
    rightsReserved: { en: 'All Rights Reserved.', ar: 'جميع الحقوق محفوظة.' },
    privacyPolicy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    termsOfService: { en: 'Terms of Service', ar: 'شروط الخدمة' },
    providingCare: { en: 'Providing compassionate, professional dental care for the whole family since 2010. Your comfort and health are our priority.', ar: 'نقدم رعاية أسنان رحيمة ومهنية لجميع أفراد الأسرة منذ عام 2010. راحتك وصحتك هي أولويتنا.' },

    // About Page
    meetClinic: { en: 'Meet Dr. Ali Ashraf Clinic', ar: 'تعرّف على عيادة د. علي أشرف' },
    aboutIntro: { en: 'Since 2010, we have been setting the standard for dental excellence in the region. Our mission is to combine cutting-edge technology with compassionate, patient-centered care.', ar: 'منذ عام 2010، ونحن نضع معيار التميز في طب الأسنان في المنطقة. مهمتنا هي الجمع بين التكنولوجيا المتطورة والرعاية الرحيمة التي تركز على المريض.' },
    leadSpecialist: { en: 'Lead Specialist', ar: 'الأخصائي الرئيسي' },
    heartBehind: { en: 'The Heart Behind the Practice', ar: 'القلب النابض خلف الممارسة' },
    doctorDesc: { en: 'With years of experience handling complex dental cases, Dr. Ali Ashraf brings expert care to every patient. His philosophy centers on "pain-free, fear-free" dentistry.', ar: 'مع سنوات من الخبرة في التعامل مع حالات الأسنان المعقدة، يقدم د. علي أشرف رعاية خبيرة لكل مريض. فلسفته تركز على طب أسنان "خالٍ من الألم والخوف".' },
    dentalSurgeon: { en: 'Dental Surgeon', ar: 'جراح أسنان' },
    education: { en: 'Education', ar: "التعليم" },
    certified: { en: 'Certified', ar: "معتمد" },
    bilingual: { en: 'Bilingual', ar: "ثنائي اللغة" },
    licensed: { en: 'Licensed', ar: "مرخص" },
    corePrinciples: { en: 'Our Core Principles', ar: 'مبادئنا الأساسية' },
    patientComfort: { en: 'Patient Comfort', ar: 'راحة المريض' },
    patientComfortDesc: { en: 'We go above and beyond to ensure you are relaxed and pain-free during every procedure.', ar: 'نبذل قصارى جهدنا لضمان استرخائك وخلوك من الألم أثناء كل إجراء.' },
    modernTech: { en: 'Modern Tech', ar: 'تكنولوجيا حديثة' },
    modernTechDesc: { en: 'Using the latest in digital X-rays and 3D imaging for precise and efficient diagnostics.', ar: 'استخدام أحدث الأشعة السينية الرقمية والتصوير ثلاثي الأبعاد لتشخيص دقيق وفعال.' },
    totalIntegrity: { en: 'Total Integrity', ar: 'نزاهة تامة' },
    totalIntegrityDesc: { en: 'We recommend only what is necessary, with complete transparency in pricing and plans.', ar: 'نوصي فقط بما هو ضروري، مع شفافية كاملة في الأسعار والخطط.' },
    educationText: { en: 'Doctor of Dental Medicine, NYU', ar: 'دكتوراه في طب الأسنان، جامعة نيويورك' },
    certifiedText: { en: 'American Board of Orthodontics', ar: 'البورد الأمريكي لتقويم الأسنان' },
    bilingualText: { en: 'Fluent in English & Arabic', ar: 'يتحدث الإنجليزية والعربية بطلاقة' },
    licensedText: { en: 'Expert State Dental Council', ar: 'خبير في المجلس الطبي للأسنان' },

    // Services Page
    ourSpecializations: { en: 'Our Specializations', ar: 'تخصصاتنا' },
    servicesSubheader: { en: 'Advanced dental solutions for every member of your family. We use the latest technology to ensure painless and effective treatments.', ar: 'حلول أسنان متقدمة لكل فرد في عائلتك. نستخدم أحدث التقنيات لضمان علاجات غير مؤلمة وفعالة.' },
    viewPricing: { en: 'View Pricing', ar: 'عرض الأسعار' },
    procedurePerformed: { en: 'This procedure is performed by our expert team using world-class equipment to ensure your absolute comfort and safety.', ar: 'يتم إجراء هذا الإجراء بواسطة فريق الخبراء لدينا باستخدام معدات عالمية المستوى لضمان راحتك وسلامتك المطلقة.' },
    pricingFor: { en: 'Pricing', ar: 'الأسعار' },
    estimatedCost: { en: 'Estimated Cost', ar: 'التكلفة التقديرية' },
    installmentPlans: { en: 'Installment Plans', ar: 'خطط التقسيط' },
    available: { en: 'Available', ar: 'متاح' },
    notAvailable: { en: 'Not Available', ar: 'غير متاح' },
    acceptedPayment: { en: 'Accepted Payment Methods', ar: 'طرق الدفع المقبولة' },
    bookAppointmentNow: { en: 'Book Appointment Now', ar: 'احجز موعد الآن' },
    emergencyQuestion: { en: 'Need an Emergency Appointment?', ar: 'هل تحتاج موعد طوارئ؟' },
    emergencyDesc: { en: 'We offer priority bookings for urgent dental care and trauma cases. Available 24/7 for our patients.', ar: 'نقدم حجوزات ذات أولوية لرعاية الأسنان العاجلة وحالات الإصابات. متاحون 24/7 لمرضانا.' },
    callEmergency: { en: 'Call Emergency Line', ar: 'اتصل بخط الطوارئ' },

    // Gallery
    visualExperience: { en: 'Visual Experience', ar: 'تجربة بصرية' },
    ourGallery: { en: 'Our Gallery', ar: 'معرضنا' },
    gallerySubtitle: { en: "Take a virtual tour of our modern facilities and see some of the incredible transformations we've achieved for our patients.", ar: 'قم بجولة افتراضية في مرافقنا الحديثة وشاهد بعض التحولات المذهلة التي حققناها لمرضانا.' },
    categoryAll: { en: 'All', ar: 'الكل' },
    categoryClinic: { en: 'Clinic', ar: 'العيادة' },
    categorySurgeries: { en: 'Surgeries', ar: 'الجراحات' },
    categoryCase: { en: 'Case', ar: 'حالات' },
    viewLarger: { en: 'View Larger', ar: 'تكبير' },

    // Booking
    bookOnline: { en: 'Book Online', ar: 'حجز عبر الإنترنت' },
    fullName: { en: 'Full Name', ar: 'الاسم الكامل' },
    phoneNumber: { en: 'Phone Number', ar: 'رقم الهاتف' },
    emailAddress: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    preferredDate: { en: 'Preferred Date', ar: 'التاريخ المفضل' },
    availableSlots: { en: 'Available Slots', ar: 'الأوقات المتاحة' },
    selectTreatment: { en: 'Select Treatment', ar: 'اختر العلاج' },
    chooseTime: { en: 'Choose Time', ar: 'اختر الوقت' },
    patientDetails: { en: 'Patient Details', ar: 'بيانات المريض' },
    step: { en: 'Step', ar: 'خطوة' },
    of: { en: 'of', ar: 'من' },
    continueDate: { en: 'Continue to Date & Time', ar: 'تابع لاختيار التاريخ والوقت' },
    back: { en: 'Back', ar: 'رجوع' },
    continuePatient: { en: 'Patient Information', ar: 'معلومات المريض' },
    confirmBooking: { en: 'Confirm Booking', ar: 'تأكيد الحجز' },
    confirming: { en: 'Confirming...', ar: 'جاري التأكيد...' },
    appointmentRequested: { en: 'Appointment Requested!', ar: 'تم طلب الموعد!' },
    requestReceived: { en: "We've received your request for", ar: "لقد تلقينا طلبك لـ" },
    on: { en: 'on', ar: 'يوم' },
    at: { en: 'at', ar: 'الساعة' },
    nextSteps: { en: 'Next Steps', ar: 'الخطوات التالية' },
    checkPhone: { en: 'Check your phone for a confirmation SMS.', ar: 'تحقق من هاتفك للحصول على رسالة تأكيد SMS.' },
    receptionistCall: { en: 'Our receptionist will call to finalize the slot.', ar: 'سيتصل بك موظف الاستقبال لتأكيد الموعد.' },
    returnHome: { en: 'Return to Home', ar: 'العودة للرئيسية' },
    emailOptional: { en: 'Email Address (Optional)', ar: 'البريد الإلكتروني (اختياري)' },
    notesPlaceholder: { en: 'Anything else we should know?', ar: 'أي شيء آخر يجب أن نعرفه؟' },

    // Contact
    callDirectly: { en: 'Call Us Directly', ar: 'اتصل بنا مباشرة' },
    forBookings: { en: 'For bookings and inquiries', ar: 'للحجوزات والاستفسارات' },
    whatsappUs: { en: 'WhatsApp Us', ar: 'راسلنا على واتساب' },
    instantSupport: { en: 'Instant support & quick questions', ar: 'دعم فوري وأسئلة سريعة' },
    openWhatsapp: { en: 'Open WhatsApp', ar: 'فتح واتساب' },
    ourLocation: { en: 'Our Location', ar: 'موقعنا' },
    sendMessage: { en: 'Send Us a Message', ar: 'أرسل لنا رسالة' },
    subject: { en: 'Subject', ar: 'الموضوع' },
    message: { en: 'Message', ar: 'الرسالة' },
    sendMsgBtn: { en: 'Send Message', ar: 'إرسال الرسالة' },
    clickMap: { en: 'Click to expand map', ar: 'انقر لتكبير الخريطة' },
    howCanWeHelp: { en: 'How can we help you?', ar: 'كيف يمكننا مساعدتك؟' },
    inquiryExample: { en: 'Inquiry about Orthodontics', ar: 'استفسار عن تقويم الأسنان' },
    johnDoe: { en: 'John Doe', ar: 'محمد أحمد' },

    // Service & Gallery Details
    backToServices: { en: 'Back to Services', ar: 'العودة للخدمات' },
    aboutProcedure: { en: 'About the Procedure', ar: 'عن الإجراء' },
    keyBenefits: { en: 'Key Benefits', ar: 'الفوائد الرئيسية' },
    serviceGallery: { en: 'Service Gallery', ar: 'معرض الخدمة' },
    bookThisService: { en: 'Book This Service', ar: 'احجز هذه الخدمة' },
    availability: { en: 'Availability', ar: 'التوفر' },
    flexibleScheduling: { en: 'Flexible Scheduling', ar: 'مواعيد مرنة' },
    paymentOptions: { en: 'Payment Options', ar: 'خيارات الدفع' },
    noPaymentRequiredNow: { en: 'No payment required at this step.', ar: 'لا يلزم الدفع في هذه الخطوة.' },
    haveQuestions: { en: 'Have Questions?', ar: 'لديك أسئلة؟' },
    contactDirectly: { en: 'Contact our team directly for immediate assistance.', ar: 'تواصل مع فريقنا مباشرة للحصول على مساعدة فورية.' },
    viewDetails: { en: 'View Details', ar: 'عرض التفاصيل' },
    backToGallery: { en: 'Back to Gallery', ar: 'العودة للمعرض' },
    patient: { en: 'Patient', ar: 'المريض' },
    verifiedCase: { en: 'Verified Case Study', ar: 'حالة طبية موثقة' },
    overview: { en: 'Overview', ar: 'نظرة عامة' },
    theProblem: { en: 'The Problem', ar: 'المشكلة' },
    ourSolution: { en: 'Our Solution', ar: 'حلنا' },
    professionalDetails: { en: 'Professional Details', ar: 'تفاصيل مهنية' },
    interestedInSimilarResults: { en: 'Interested in similar results?', ar: 'مهتم بنتائج مماثلة؟' },
    bookAConsultation: { en: 'Book a Consultation', ar: 'احجز استشارة' },
    ourExpertise: { en: 'Our Expertise', ar: 'خبراتنا' },
    procedurePerformedShort: { en: 'Performed by our expert team.', ar: 'يتم إجراؤها بواسطة فريق الخبراء لدينا.' },
    exploreService: { en: 'Explore Service', ar: 'استكشاف الخدمة' },
    pricingEstimate: { en: 'Pricing Estimate', ar: 'تقدير الأسعار' },
    callEmergencyShort: { en: 'Call Emergency', ar: 'اتصال للطوارئ' },
};

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
    dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    const t = (key: string) => {
        // Handle nested objects like aboutPoints
        if (key.includes('.')) {
            const keys = key.split('.');
            let value = translations;
            for (const k of keys) {
                value = value[k];
            }
            return value?.[language] || key;
        }
        return translations[key]?.[language] || key;
    };

    const dir = language === 'ar' ? 'rtl' : 'ltr';

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
            <div dir={dir} className={language === 'ar' ? 'font-arabic' : ''}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
