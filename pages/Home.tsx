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
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 rounded-l-[10rem] -z-10 hidden lg:block"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#228B22]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#228B22]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-gray-100/80 backdrop-blur-sm px-5 py-2.5 rounded-2xl border border-gray-200/50 shadow-sm animate-fade-in">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                  {t('badgeText')}
                </span>
                <div className="flex text-yellow-400">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                  {t('heroTitle1')} <br />
                  <span className="relative">
                    <span className="relative z-10 text-[#228B22]">{t('heroTitle2')}</span>
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-[#228B22]/10 -z-10"></span>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  {t('heroSubtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                <Link
                  to="/book"
                  className="group relative overflow-hidden bg-[#228B22] text-white px-10 py-6 rounded-[2rem] text-xl font-black shadow-[0_20px_40px_-10px_rgba(34,139,34,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(34,139,34,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {t('bookAppointment')}
                    <ArrowRight size={24} className={language === 'ar' ? 'rotate-180 transition-transform group-hover:-translate-x-2' : 'transition-transform group-hover:translate-x-2'} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>

                <Link
                  to="/services"
                  className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-6 rounded-[2rem] text-xl font-black shadow-sm hover:shadow-xl hover:border-[#228B22]/20 transition-all w-full sm:w-auto text-center"
                >
                  {t('services')}
                </Link>
              </div>

              {/* Trusted By / Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 pt-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-gray-900 tracking-tighter tabular-nums">15+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">{t('yearsExp')}</span>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-gray-900 tracking-tighter tabular-nums">10k+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">{t('happyPatients')}</span>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-gray-900 tracking-tighter tabular-nums">4.9<span className="text-xl text-gray-400">/5</span></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">{t('patientRating')}</span>
                </div>
              </div>
            </div>

            {/* Hero Image Group */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative z-10 animate-float">
                <div className="absolute -inset-10 bg-[#228B22]/10 rounded-[5rem] blur-3xl -z-10"></div>

                {/* Main Image */}
                <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white ring-1 ring-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional Dental Care"
                    className="w-full aspect-[4/5] object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  />

                  {/* Floating Badge */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50 transform hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-[#228B22] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#228B22]/30">
                          <ShieldCheck size={32} />
                        </div>
                        <div>
                          <p className="text-lg font-black font-sans text-gray-900">{t('certifiedSpecialists')}</p>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('boardCertified')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border-[8px] border-gray-50 animate-bounce-slow">
                  <div className="text-center">
                    <p className="text-3xl font-black text-[#228B22] tracking-tighter">100%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('painless')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats Slider */}
      <section className="bg-gray-50/50 py-10 overflow-hidden border-y border-gray-100">
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-32 px-4">
            {/* We repeat the content to create a seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-32 shrink-0 items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#228B22] shadow-sm">
                    <ShieldCheck size={28} />
                  </div>
                  <span className="text-xl font-black text-gray-900 tracking-tight">{t('fdaApproved')}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#228B22] shadow-sm">
                    <Stethoscope size={28} />
                  </div>
                  <span className="text-xl font-black text-gray-900 tracking-tight">{t('expertDoctors')}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#228B22] shadow-sm">
                    <Clock size={28} />
                  </div>
                  <span className="text-xl font-black text-gray-900 tracking-tight">{t('support247')}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#228B22] shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <span className="text-xl font-black text-gray-900 tracking-tight">{t('primeLocation')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview / Specialties */}
      <section className="relative py-12 overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#228B22]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#228B22]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-[#228B22]"></div>
                <h2 className="text-[#228B22] font-black tracking-[0.2em] uppercase text-xs">{t('ourSpecialties')}</h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-none tracking-tighter">
                {t('comprehensiveSolutions')}
              </h3>
              <p className="text-lg text-gray-500 font-medium">
                {t('servicesDesc')}
              </p>
            </div>

            <Link
              to="/services"
              className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-black transition-all shadow-xl shadow-gray-200"
            >
              <span>{t('viewAllServices')}</span>
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} className={language === 'ar' ? 'rotate-180' : ''} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(34,139,34,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Card Background Accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#228B22]/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>

                {/* Icon & ID */}
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="w-16 h-16 bg-[#228B22] text-white rounded-[1.25rem] flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(34,139,34,0.4)] group-hover:rotate-6 transition-transform">
                    {React.cloneElement(ICON_MAP[service.icon] as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="text-5xl font-black text-gray-50 font-sans tracking-tighter select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="relative z-10 space-y-4">
                  <div>
                    <h4 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-[#228B22] transition-colors">
                      {language === 'ar' ? service.nameAr : service.nameEn}
                    </h4>
                    <p className="text-xs font-black uppercase tracking-widest text-[#228B22]/60 mt-1">
                      {language === 'ar' ? service.nameEn : service.nameAr}
                    </p>
                  </div>

                  <p className="text-gray-500 leading-relaxed font-medium">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>

                  <div className="pt-6">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-gray-900 font-black text-sm group/btn"
                    >
                      <span className="relative">
                        {t('learnMore')}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#228B22] transition-all group-hover/btn:w-full"></span>
                      </span>
                      <ChevronRight
                        size={16}
                        className={`text-[#228B22] transition-transform group-hover/btn:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`}
                      />
                    </Link>
                  </div>
                </div>

                {/* Corner Decorative Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-500 text-[#228B22]">
                  {ICON_MAP[service.icon]}
                </div>
              </div>
            ))}
          </div>
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
