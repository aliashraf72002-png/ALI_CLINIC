import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  ShieldCheck,
  Stethoscope,
  Smile,
  ChevronRight,
  Phone
} from 'lucide-react';
import { SERVICES, ICON_MAP, CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-white to-[#228B22]/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-10">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#228B22]/10 text-[#228B22] px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              <Star size={16} fill="currentColor" />
              <span>{t('badgeText')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              {t('heroTitle1')} <br />
              <span className="text-[#228B22]">{t('heroTitle2')}</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/book"
                className="bg-[#228B22] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:bg-[#1a6b1a] transition-all transform hover:-translate-y-1 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>{t('bookAppointment')}</span>
                <ArrowRight size={20} className={language === 'ar' ? 'rotate-180' : ''} />
              </Link>
              <Link
                to="/services"
                className="bg-white text-gray-800 border-2 border-gray-100 px-8 py-4 rounded-2xl text-lg font-bold shadow-sm hover:shadow-md transition-all w-full sm:w-auto justify-center text-center"
              >
                {t('ourServices')}
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">15+</span>
                <span className="text-gray-500 text-sm">{t('yearsExp')}</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">10k+</span>
                <span className="text-gray-500 text-sm">{t('happyPatients')}</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">4.9/5</span>
                <span className="text-gray-500 text-sm">{t('patientRating')}</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative animate-float">
            <div className="absolute -inset-4 bg-[#228B22]/20 rounded-[4rem] blur-3xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Smiling Professional Doctor"
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center text-white">
                    <Smile size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t('certifiedSpecialists')}</p>
                    <p className="text-xs text-gray-500">{t('boardCertified')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <ShieldCheck className="text-[#228B22] w-10 h-10" />
              <p className="font-bold">{t('fdaApproved')}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Stethoscope className="text-[#228B22] w-10 h-10" />
              <p className="font-bold">{t('expertDoctors')}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="text-[#228B22] w-10 h-10" />
              <p className="font-bold">{t('support247')}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="text-[#228B22] w-10 h-10" />
              <p className="font-bold">{t('primeLocation')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[#228B22] font-bold tracking-widest uppercase text-sm">{t('ourSpecialties')}</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">{t('comprehensiveSolutions')}</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">{t('servicesDesc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#228B22]/20 transition-all duration-300">
              <div className="w-14 h-14 bg-[#228B22]/10 rounded-2xl flex items-center justify-center text-[#228B22] mb-6 group-hover:bg-[#228B22] group-hover:text-white transition-all">
                {ICON_MAP[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{language === 'ar' ? service.nameAr : service.nameEn}</h4>
              <p className="text-sm font-medium text-[#228B22] mb-3">{language === 'ar' ? service.nameEn : service.nameAr}</p>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                {language === 'ar' ? service.descriptionAr : service.description}
              </p>
              <Link to="/services" className="inline-flex items-center text-[#228B22] font-bold text-sm hover:underline">
                {t('learnMore')} <ChevronRight size={16} className={language === 'ar' ? 'rotate-180' : ''} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center space-x-2 text-gray-500 font-semibold hover:text-[#228B22] transition-colors">
            <span>{t('viewAllServices')}</span>
            <ArrowRight size={18} className={language === 'ar' ? 'rotate-180' : ''} />
          </Link>
        </div>
      </section>

      {/* About Section (Brief) */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/cleaning-service.png"
                  alt="Modern Dental Clinic"
                  className="rounded-3xl shadow-lg mt-12 object-cover w-full h-64"
                />
                <img
                  src="/fillings-service.png"
                  alt="Advanced Dental Tools"
                  className="rounded-3xl shadow-lg object-cover w-full h-64"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#228B22] text-white p-8 rounded-full shadow-2xl border-8 border-white w-48 h-48 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold">15+</span>
                <span className="text-sm font-semibold uppercase tracking-widest">{t('yearsExp')}</span>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-[#228B22] font-bold tracking-widest uppercase text-sm">{t('aboutClinic')}</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">{t('aboutTitle')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('aboutDesc')}
              </p>
              <ul className="space-y-4">
                {[t('aboutPoints.imaging'), t('aboutPoints.painless'), t('aboutPoints.relaxing'), t('aboutPoints.bilingual')].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-[#228B22]" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-block bg-[#228B22] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all">
                {t('learnMoreAboutUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#228B22] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">{t('readySmile')}</h2>
            <p className="text-green-50 max-w-xl mx-auto text-lg">
              {t('ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/book"
                className="bg-white text-[#228B22] px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
              >
                {t('bookAppointment')}
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-3 text-white font-bold text-lg hover:underline underline-offset-8"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <span>{t('callUs')}: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
