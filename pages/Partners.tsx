import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ERP_DATA, PSP_PARTNERS, STRATEGIC_PARTNERS } from '../components/PSPLogos';
import { ArrowRight, Calendar } from 'lucide-react'; // Added icons for consistency
import { PageView } from '../types'; // Import PageView enum

interface PartnersProps {
  onNavigate: (view: PageView) => void;
}

export const Partners: React.FC<PartnersProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[80vh]">
      
      {/* 1. Header Section */}
      <AnimatedSection>
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Integration <span className="gradient-text">Ecosystem</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We maintain certified connectors for the world's leading payment platforms and ERP systems.
          </p>
        </div>
      </AnimatedSection>

      {/* 2. ERP Section */}
      <div className="mb-20">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8 text-center">Supported ERPs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ERP_DATA.map((erp, i) => (
            <AnimatedSection key={erp.id} delay={i * 100}>
              <div className="group bg-slate-100 dark:bg-slate-800/50 rounded-xl p-8 pt-6 flex flex-col items-center justify-start h-36 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-all duration-300 relative overflow-hidden text-center">
                  {erp.logo && (
                    <img 
                      src={erp.logo}
                      alt=""
                      className="absolute top-6 left-0 right-0 bottom-0 w-full h-full object-contain p-10 pointer-events-none transition-transform group-hover:scale-110"
                    />
                  )}
                  <div className="relative z-10">
                    <span className="text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                      {erp.name}
                    </span>
                  </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* 3 & 4. Partner Sections */}
      {[
        { title: "Payment Service Providers", data: PSP_PARTNERS },
        { title: "Strategic Partners", data: STRATEGIC_PARTNERS }
      ].map((section, sectionIdx) => (
        <div key={sectionIdx} className="mb-20">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8 text-center">{section.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.data.map((partner, i) => (
              <AnimatedSection key={partner.id} delay={i * 50}>
                <div className="group bg-white dark:bg-slate-900 rounded-xl p-8 flex items-center justify-center h-32 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                  <div className="text-center w-full flex justify-center items-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-12 max-w-[80%] object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 brightness-0 dark:invert" 
                      />
                    ) : (
                      <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {partner.name}
                      </span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      ))}

      {/* 5. Footer CTA - Match Products page style */}
      <AnimatedSection delay={600} className="mt-24 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Don't see your provider?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We can develop new PSP integrations free of charge for our Customers. Terms & Conditions apply.
          </p>
          
          <div className="flex flex-col items-center justify-center">
            <button 
              onClick={() => onNavigate(PageView.CONTACT)} 
              className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold text-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <Calendar className="w-6 h-6 mr-1" />
              <span>Request Integration</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
