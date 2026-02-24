import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Lightbulb, ShieldCheck, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      
      {/* 1. Hero Section - Massive and Clean */}
      <AnimatedSection>
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Engineering the Future of <br />
            <span className="gradient-text">Financial Operations</span>
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium">
            At N3Vision, we are passionate about developing products that support the core of your business.
          </p>
        </div>
      </AnimatedSection>

      {/* 2. Story Section - The Z-Pattern Layout */}
      <div className="space-y-32">
        
        {/* Row 1: ERP & Finance */}
        <AnimatedSection delay={200}>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                By automating mundane and repetitive tasks, we free up Finance professionals to work on higher-value tasks. We take pride in our work and strive to deliver products that exceed our clients' expectations.
              </p>
              <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768900133/Gemini_Generated_Image_mam7rjmam7rjmam7_cfzfqo.png" 
                  alt="N3Vision ERP Management" 
                  className="w-full h-[450px] object-cover" 
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Row 2: Success & Innovation (Reversed) */}
        <AnimatedSection delay={300}>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Continuous Innovation</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We are constantly pushing the boundaries of app development and are dedicated to staying at the forefront of the industry through continuous learning. Our mission is to solve problems and enhance the user experience.
              </p>
              <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768900132/Gemini_Generated_Image_cp2xircp2xircp2x_w6ss56.png" 
                  alt="Financial Success" 
                  className="w-full h-[450px] object-cover" 
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Row 3: Secure Payments */}
        <AnimatedSection delay={400}>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Uncompromising Quality</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Our team is dedicated to providing a quality service from initial deployment to continued operational support. We treat every project, no matter the size, with the same rigorous standards of excellence.
              </p>
              <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768900131/Gemini_Generated_Image_y860bmy860bmy860_alwqp3.png" 
                  alt="Secure Payments" 
                  className="w-full h-[450px] object-cover" 
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* 3. Core Values Section - Elevated Grid */}
      <AnimatedSection delay={500} className="mt-48">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] p-12 md:p-24 border border-slate-200 dark:border-slate-800">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard 
              icon={<Lightbulb className="w-8 h-8" />} 
              title="Innovation" 
              color="bg-primary-500"
              text="We believe in pushing the boundaries of what is possible and are committed to continuous innovation." 
            />
            <ValueCard 
              icon={<ShieldCheck className="w-8 h-8" />} 
              title="Integrity" 
              color="bg-emerald-500"
              text="We believe in transparent communication, respecting budgets, and taking ownership of everything we do." 
            />
            <ValueCard 
              icon={<Award className="w-8 h-8" />} 
              title="Quality" 
              color="bg-blue-500"
              text="We maintain rigorous standards for all work, ensuring excellent service and real results for our clients." 
            />
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Subfooter - Minimalist Branding */}
      <div className="mt-48 text-center opacity-30 grayscale pointer-events-none">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold tracking-[0.3em] uppercase text-slate-500">
           <span>Automation First</span>
           <span>Quality Driven</span>
           <span>Client Centric</span>
           <span>Built for Scale</span>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Values
const ValueCard = ({ icon, title, text, color }: { icon: React.ReactNode, title: string, text: string, color: string }) => (
  <div className="group p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300">
    <div className={`w-16 h-16 ${color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
      {text}
    </p>
  </div>
);