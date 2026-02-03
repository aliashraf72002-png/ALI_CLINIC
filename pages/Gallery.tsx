import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const { t, language } = useLanguage();

  const categories = ['All', 'Clinic', 'Surgeries', 'Case'];

  const getTranslatedCategory = (cat: string) => {
    switch (cat) {
      case 'All': return t('categoryAll');
      case 'Clinic': return t('categoryClinic');
      case 'Surgeries': return t('categorySurgeries');
      case 'Case': return t('categoryCase');
      default: return cat;
    }
  };

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pb-32 bg-white">
      {/* Premium Header/Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_-20%,#228B22_0%,transparent_50%)] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100 shadow-sm mb-4">
              <div className="w-2 h-2 bg-[#228B22] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{t('visualExperience')}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter">
              {t('ourGallery')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
              {t('gallerySubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center gap-2 bg-gray-50 p-2 rounded-[2rem] border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-[1.5rem] text-sm font-black tracking-tight transition-all duration-300 ${filter === cat
                  ? 'bg-[#228B22] text-white shadow-[0_10px_20px_-5px_rgba(34,139,34,0.4)]'
                  : 'text-gray-400 hover:text-gray-900'
                  }`}
              >
                {getTranslatedCategory(cat)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, idx) => (
            <Link
              key={item.id}
              to={`/gallery/${item.id}`}
              className="group relative rounded-[3rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(34,139,34,0.2)] transition-all duration-700 aspect-[4/5]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                loading="lazy"
              />

              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-10 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-[#228B22]"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#228B22]">{getTranslatedCategory(item.category)}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white leading-none tracking-tight">
                    {language === 'ar' ? (item.titleAr || item.title) : item.title}
                  </h3>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-2xl font-black text-sm shadow-xl">
                      <span>{t('viewDetails')}</span>
                      <Maximize2 size={16} className="text-[#228B22]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 border border-white/20">
                <span className="text-xs font-black">{String(idx + 1).padStart(2, '0')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
