import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { t, language } = useLanguage();

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">{t('ourSpecializations')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesSubheader')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex-1 relative">
                <div className="absolute -inset-4 bg-[#228B22]/10 rounded-[2rem] blur-2xl"></div>
                <img
                  src={service.imageUrl}
                  alt={service.nameEn}
                  className="relative rounded-3xl w-full h-[300px] object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 bg-[#228B22] text-white rounded-xl flex items-center justify-center shadow-lg">
                  {ICON_MAP[service.icon]}
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold text-gray-900">{language === 'ar' ? service.nameAr : service.nameEn}</h2>
                  <p className="text-[#228B22] font-bold text-xl">{language === 'ar' ? service.nameEn : service.nameAr}</p>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {language === 'ar' ? service.descriptionAr : service.description} {t('procedurePerformed')}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/book"
                    className="bg-[#228B22] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a6b1a] transition-all flex items-center space-x-2"
                  >
                    <span>{t('bookNow')}</span>
                    <ChevronRight size={18} className={language === 'ar' ? 'rotate-180' : ''} />
                  </Link>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-gray-500 font-semibold px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                  >
                    {t('viewPricing')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{language === 'ar' ? selectedService.nameAr : selectedService.nameEn} {t('pricingFor')}</h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">{t('estimatedCost')}</span>
                <span className="text-[#228B22] font-bold text-xl">{selectedService.pricing.cost}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">{t('installmentPlans')}</span>
                <span className={`font-bold ${selectedService.pricing.installments ? 'text-[#228B22]' : 'text-gray-400'}`}>
                  {selectedService.pricing.installments ? t('available') : t('notAvailable')}
                </span>
              </div>

              <div className="py-2">
                <span className="text-gray-600 font-medium block mb-2">{t('acceptedPayment')}</span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.pricing.paymentMethods.map(method => (
                    <span key={method} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/book"
                className="block w-full bg-[#228B22] text-white text-center py-4 rounded-xl font-bold hover:bg-[#1a6b1a] transition-all"
              >
                {t('bookAppointmentNow')}
              </Link>
            </div>
          </div>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">{t('emergencyQuestion')}</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              {t('emergencyDesc')}
            </p>
            <div className="flex justify-center">
              <a
                href="tel:+15550000000"
                className="bg-[#228B22] text-white px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:scale-105 transition-transform flex items-center space-x-3"
              >
                <Phone size={24} />
                <span>{t('callEmergency')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
