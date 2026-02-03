import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, User, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const GalleryDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t, language } = useLanguage();

    const item = GALLERY_ITEMS.find(i => i.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Item not found</h2>
                    <Link to="/gallery" className="text-[#228B22] font-bold underline">Back to Gallery</Link>
                </div>
            </div>
        );
    }

    const isAr = language === 'ar';
    const isCase = item.category === 'Case';

    return (
        <div className="pb-24">
            {/* Header */}
            <section className="bg-gray-50 py-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/gallery"
                        className="inline-flex items-center text-gray-500 hover:text-[#228B22] mb-8 transition-colors font-semibold"
                    >
                        <ChevronLeft size={20} className={isAr ? 'rotate-180 ml-1' : 'mr-1'} />
                        {t('backToGallery')}
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-[#228B22]/10 text-[#228B22] rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                                {isAr ? (item.category === 'Case' ? 'حالة مريض' : 'العيادة') : item.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                                {isAr ? (item.titleAr || item.title) : item.title}
                            </h1>
                        </div>
                        {isCase && (
                            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#228B22]">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('patient')}</p>
                                    <p className="font-bold text-gray-900">{t('verifiedCase')}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Visuals */}
                    <div className="space-y-8">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {item.caseImages && item.caseImages.length > 1 && (
                            <div className="grid grid-cols-2 gap-4">
                                {item.caseImages.map((img, idx) => (
                                    <div key={idx} className="rounded-3xl overflow-hidden shadow-md">
                                        <img src={img} alt={`Detail ${idx}`} className="w-full h-48 object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="space-y-12">
                        {!isCase ? (
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('overview')}</h2>
                                <p className="text-gray-600 leading-relaxed text-xl">
                                    {isAr ? item.descriptionAr : item.descriptionEn}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {/* Problem */}
                                <div className="bg-red-50/50 rounded-[2.5rem] p-8 md:p-10 border border-red-100">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
                                            <AlertCircle size={28} />
                                        </div>
                                        <h2 className="text-2xl font-extrabold text-gray-900">{t('theProblem')}</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {isAr ? item.problemAr : item.problemEn}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="bg-[#228B22]/5 rounded-[2.5rem] p-8 md:p-10 border border-[#228B22]/10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[#228B22] text-white rounded-2xl flex items-center justify-center shadow-lg">
                                            <CheckCircle size={28} />
                                        </div>
                                        <h2 className="text-2xl font-extrabold text-gray-900">{t('ourSolution')}</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {isAr ? item.solutionAr : item.solutionEn}
                                    </p>
                                </div>

                                {/* Technical Details */}
                                <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-200/50">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center">
                                            <Info size={28} />
                                        </div>
                                        <h2 className="text-2xl font-extrabold text-gray-900">{t('professionalDetails')}</h2>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {isAr ? item.detailsAr : item.detailsEn}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('interestedInSimilarResults')}</h3>
                            <Link
                                to="/book"
                                className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:bg-black transition-all transform hover:-translate-y-1"
                            >
                                <span>{t('bookAConsultation')}</span>
                                <ArrowRight size={24} className={isAr ? 'rotate-180' : ''} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryDetail;
