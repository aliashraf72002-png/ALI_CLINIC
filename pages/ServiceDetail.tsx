import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    const service = SERVICES.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service not found</h2>
                    <Link to="/services" className="text-[#228B22] font-bold underline">Back to Services</Link>
                </div>
            </div>
        );
    }

    const isAr = language === 'ar';

    return (
        <div className="pb-24">
            {/* Hero Header */}
            <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src={service.imageUrl}
                    alt={service.nameEn}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ChevronLeft size={20} className={isAr ? 'rotate-180 ml-1' : 'mr-1'} />
                            <span>{t('backToServices')}</span>
                        </Link>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-[#228B22] text-white rounded-xl flex items-center justify-center shadow-lg mb-4">
                                    {ICON_MAP[service.icon]}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                                    {isAr ? service.nameAr : service.nameEn}
                                </h1>
                                <p className="text-[#228B22] font-bold text-xl drop-shadow-sm">
                                    {isAr ? service.nameEn : service.nameAr}
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <p className="text-white/70 text-sm mb-1">{t('estimatedCost')}</p>
                                <p className="text-white text-3xl font-bold">{service.pricing.cost}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('aboutProcedure')}</h2>
                            <p className="text-gray-600 leading-relaxed text-xl">
                                {isAr ? service.longDescriptionAr : service.longDescriptionEn}
                            </p>
                        </div>

                        {service.benefitsEn && (
                            <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('keyBenefits')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {(isAr ? service.benefitsAr : service.benefitsEn)?.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0 text-[#228B22]">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <p className="text-gray-700 font-medium text-lg">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {service.galleryImages && (
                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold text-gray-900">{t('serviceGallery')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.galleryImages.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${service.nameEn} ${idx}`}
                                            className="w-full h-64 object-cover rounded-3xl shadow-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl sticky top-28">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('bookThisService')}</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#228B22]">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{t('availability')}</p>
                                        <p className="font-semibold">{t('flexibleScheduling')}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#228B22]">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{t('paymentOptions')}</p>
                                        <p className="font-semibold">{service.pricing.paymentMethods.join(', ')}</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/book"
                                state={{ serviceId: service.id }}
                                className="block w-full bg-[#228B22] text-white text-center py-5 rounded-2xl font-extrabold text-lg shadow-lg hover:bg-[#1a6b1a] transition-all transform hover:-translate-y-1"
                            >
                                {t('bookAppointmentNow')}
                            </Link>

                            <p className="text-center text-gray-400 text-sm mt-6">
                                {t('noPaymentRequiredNow')}
                            </p>
                        </div>

                        <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white">
                            <h4 className="font-bold text-xl mb-4">{t('haveQuestions')}</h4>
                            <p className="text-gray-400 mb-6">{t('contactDirectly')}</p>
                            <a
                                href="tel:+15550000000"
                                className="flex items-center justify-center gap-2 font-bold text-[#228B22] hover:text-white transition-colors"
                            >
                                <Phone size={20} />
                                <span>Call Us Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
