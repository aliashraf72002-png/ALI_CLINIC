import React from 'react';
import {
  Award,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Smile,
  ShieldCheck,
  Languages
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-20">
      {/* Introduction */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">{t('meetClinic')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('aboutIntro')}
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-[#228B22]/10 rounded-[3rem] blur-3xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/doctor.jpg"
                alt="Dr. Ali Ashraf"
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-gray-900">Dr. Ali Ashraf</h3>
                <p className="text-[#228B22] font-semibold">{t('dentalSurgeon')}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#228B22] font-bold tracking-widest uppercase text-sm">{t('leadSpecialist')}</h2>
              <h3 className="text-4xl font-extrabold text-gray-900">{t('heartBehind')}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('doctorDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <GraduationCap />, title: t('education'), text: t('educationText') },
                { icon: <Award />, title: t('certified'), text: t('certifiedText') },
                { icon: <Languages />, title: t('bilingual'), text: t('bilingualText') },
                { icon: <ShieldCheck />, title: t('licensed'), text: t('licensedText') }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-[#228B22] mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#228B22]/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('corePrinciples')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22] mx-auto mb-4">
                <HeartPulse size={32} />
              </div>
              <h4 className="text-xl font-bold">{t('patientComfort')}</h4>
              <p className="text-gray-500">{t('patientComfortDesc')}</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22] mx-auto mb-4">
                <Stethoscope size={32} />
              </div>
              <h4 className="text-xl font-bold">{t('modernTech')}</h4>
              <p className="text-gray-500">{t('modernTechDesc')}</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22] mx-auto mb-4">
                <Smile size={32} />
              </div>
              <h4 className="text-xl font-bold">{t('totalIntegrity')}</h4>
              <p className="text-gray-500">{t('totalIntegrityDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
