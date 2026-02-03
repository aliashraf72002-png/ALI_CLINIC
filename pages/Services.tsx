import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { SERVICES, ICON_MAP, CONTACT_INFO } from '../constants';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="pb-32 bg-white">
      {/* Premium Header/Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#228B22_0%,transparent_50%)] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100 shadow-sm mb-4">
              <div className="w-2 h-2 bg-[#228B22] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{t('ourExpertise')}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter">
              {t('ourSpecializations')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
              {t('servicesSubheader')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 gap-24">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-24`}
            >
              {/* Visual Side */}
              <div className="flex-1 relative w-full">
                <Link to={`/services/${service.id}`} className="block relative group/img overflow-hidden rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_60px_100px_-20px_rgba(34,139,34,0.2)] transition-all duration-700">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover/img:bg-transparent transition-colors z-10"></div>
                  <img
                    src={service.imageUrl}
                    alt={service.nameEn}
                    className="w-full aspect-[4/3] object-cover scale-105 group-hover/img:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-10 left-10 z-20 translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/50">
                      <span className="text-sm font-black uppercase tracking-widest text-[#228B22]">{t('viewDetails')}</span>
                      <ChevronRight size={16} className={isAr ? 'rotate-180' : ''} />
                    </div>
                  </div>
                </Link>

                {/* Decorative Elements */}
                <div className={`absolute -z-10 w-64 h-64 bg-[#228B22]/5 rounded-full blur-3xl ${index % 2 === 0 ? '-top-10 -right-10' : '-bottom-10 -left-10'}`}></div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#228B22] text-white rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-[#228B22]/30 group-hover:rotate-6 transition-transform">
                      {ICON_MAP[service.icon]}
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-[#228B22]/40">
                      Case Study {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">
                      {isAr ? service.nameAr : service.nameEn}
                    </h2>
                    <p className="text-xl font-bold text-[#228B22] tracking-wide opacity-60">
                      {isAr ? service.nameEn : service.nameAr}
                    </p>
                  </div>

                  <p className="text-xl text-gray-500 font-medium leading-relaxed">
                    {isAr ? service.descriptionAr : service.description} {t('procedurePerformedShort')}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Link
                    to={`/services/${service.id}`}
                    className="bg-gray-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-xl hover:bg-black transition-all transform hover:-translate-y-1"
                  >
                    {t('exploreService')}
                  </Link>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex items-center gap-3 text-gray-900 font-black text-lg group/price"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover/price:bg-gray-100 transition-colors">
                      <Phone size={20} className="text-[#228B22]" />
                    </div>
                    <span>{t('viewPricing')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md animate-fade-in" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-[3rem] p-10 md:p-14 max-w-xl w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] space-y-10 relative overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 left-0 w-full h-2 bg-[#228B22]"></div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-gray-900 tracking-tight">
                  {isAr ? selectedService.nameAr : selectedService.nameEn}
                </h3>
                <p className="text-xs font-black uppercase tracking-widest text-[#228B22]">{t('pricingEstimate')}</p>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-[2rem] p-8 space-y-6 border border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{t('estimatedCost')}</span>
                  <span className="text-3xl font-black text-[#228B22]">{selectedService.pricing.cost}</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{t('installmentPlans')}</span>
                  <span className={`text-lg font-black ${selectedService.pricing.installments ? 'text-[#228B22]' : 'text-gray-400'}`}>
                    {selectedService.pricing.installments ? t('available') : t('notAvailable')}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs block">{t('acceptedPayment')}</span>
                <div className="flex flex-wrap gap-3">
                  {selectedService.pricing.paymentMethods.map(method => (
                    <span key={method} className="bg-white border border-gray-100 text-gray-900 px-5 py-2.5 rounded-xl text-sm font-black shadow-sm">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/book"
                className="block w-full bg-[#228B22] text-white text-center py-6 rounded-[2rem] font-black text-xl shadow-[0_20px_40px_-5px_rgba(34,139,34,0.4)] hover:shadow-[0_25px_50px_-5px_rgba(34,139,34,0.5)] transition-all"
              >
                {t('bookAppointmentNow')}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Footer Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48">
        <div className="bg-gray-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden flex flex-col items-center justify-center shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#228B22]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-10 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">{t('emergencyQuestion')}</h2>
            <p className="text-xl text-gray-400 font-medium">
              {t('emergencyDesc')}
            </p>
            <div className="pt-6">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-6 bg-[#228B22] text-white px-12 py-7 rounded-[2.5rem] font-black text-2xl shadow-[0_30px_60px_-15px_rgba(34,139,34,0.5)] hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner">
                  <Phone size={32} />
                </div>
                <span>{t('callEmergencyShort')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
