
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  MapPin,
  Mail,
  Clock as ClockIcon
} from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

import { CONTACT_INFO } from './constants';

import { useLanguage, LanguageProvider } from './context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('contact'), path: '/contact' }
  ];

  const isAr = language === 'ar';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled
      ? 'bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.02)] py-4'
      : 'bg-transparent py-8'
      }`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="group flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-[#228B22] rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl shadow-[0_10px_30px_rgba(34,139,34,0.3)] group-hover:rotate-6 transition-transform duration-500">
                  A
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter uppercase text-gray-900">
                  Ali <span className="text-[#228B22]">Ashraf</span>
                </span>
                <span className="text-[11px] font-black tracking-[0.3em] text-gray-400 uppercase">Premium Clinic</span>
              </div>
            </Link>
          </div>

          {/* Nav Links - Center */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-2 bg-gray-50/50 p-1.5 rounded-[2rem] border border-gray-100 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 ${location.pathname === link.path
                    ? 'bg-white text-[#228B22] shadow-[0_4px_12px_rgba(34,139,34,0.1)]'
                    : 'text-gray-400 hover:text-gray-900'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions - Right */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
            <button
              onClick={toggleLanguage}
              className="group flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#228B22]/30 transition-all"
            >
              <span className="text-[11px] font-black text-gray-400 group-hover:text-[#228B22]">
                {language === 'en' ? 'AR' : 'EN'}
              </span>
              <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-[10px] font-black shadow-sm ring-1 ring-gray-100 text-[#228B22]">
                {isAr ? 'EN' : 'AR'}
              </div>
            </button>

            <Link
              to="/book"
              className="group relative overflow-hidden bg-gray-900 text-white px-8 py-3.5 rounded-2xl text-[13px] font-black tracking-widest uppercase shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-5px_rgba(34,139,34,0.3)] hover:bg-[#228B22] transition-all transform hover:-translate-y-1"
            >
              <span className="relative z-10">{t('bookNow')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 font-black text-xs flex items-center justify-center"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isOpen ? 'bg-[#228B22] text-white shadow-lg' : 'bg-gray-900 text-white'
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-x-0 top-[calc(100%-1px)] bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${isOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
        <div className="p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-black transition-all ${location.pathname === link.path ? 'text-[#228B22] translate-x-3' : 'text-gray-900 hover:translate-x-3'
                  }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm opacity-20">{String(idx + 1).padStart(2, '0')}</span>
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="h-px bg-gray-100 my-4"></div>
          <Link
            to="/book"
            className="bg-[#228B22] text-white text-center py-5 rounded-[2rem] font-black text-xl shadow-xl hover:bg-[#1a6b1a] transition-all"
            onClick={() => setIsOpen(false)}
          >
            {t('bookAppointment')}
          </Link>
          <div className="flex justify-center gap-6 pt-4">
            <Facebook className="text-gray-400 hover:text-[#228B22]" size={24} />
            <Instagram className="text-gray-400 hover:text-[#228B22]" size={24} />
            <Twitter className="text-gray-400 hover:text-[#228B22]" size={24} />
          </div>
        </div>
      </div>
    </nav >
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#228B22] rounded flex items-center justify-center text-white font-bold">A</div>
              <span className="text-xl font-bold text-[#228B22]">{t('clinicName')}</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              {t('providingCare')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center text-[#228B22] hover:bg-[#228B22] hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center text-[#228B22] hover:bg-[#228B22] hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center text-[#228B22] hover:bg-[#228B22] hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-[#228B22] transition-colors">{t('about')}</Link></li>
              <li><Link to="/services" className="hover:text-[#228B22] transition-colors">{t('services')}</Link></li>
              <li><Link to="/gallery" className="hover:text-[#228B22] transition-colors">{t('gallery')}</Link></li>
              <li><Link to="/book" className="hover:text-[#228B22] transition-colors">{t('bookOnline')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-6">{t('contactUs')}</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#228B22] mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#228B22] flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#228B22] flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-6">{t('workingHours')}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {CONTACT_INFO.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span className="font-medium">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 {t('clinicName')}. {t('rightsReserved')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#228B22]">{t('privacyPolicy')}</a>
            <a href="#" className="hover:text-[#228B22]">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-transform"
    aria-label="Contact via WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:id" element={<GalleryDetail />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
