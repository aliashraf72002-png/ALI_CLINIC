
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
import Gallery from './pages/Gallery';
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#228B22] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">A</div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-[#228B22]' : 'text-gray-800'}`}>Dr. Ali Ashraf Clinic</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-[#228B22] ${location.pathname === link.path ? 'text-[#228B22]' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4">
              <Link
                to="/book"
                className="bg-[#228B22] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-[#1a6b1a] transition-all transform hover:-translate-y-0.5"
              >
                {t('bookNow')}
              </Link>

              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-200 text-gray-600 font-bold hover:border-[#228B22] hover:text-[#228B22] transition-all text-sm"
              >
                {language === 'en' ? 'AR' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="w-8 h-8 rounded-full border border-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button className="text-gray-800" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 right-0 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-semibold text-gray-700 hover:text-[#228B22]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-[#228B22] text-white text-center py-4 rounded-xl font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('bookAppointment')}
            </Link>
          </div>
        </div>
      )}
    </nav>
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
              <Route path="/gallery" element={<Gallery />} />
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
