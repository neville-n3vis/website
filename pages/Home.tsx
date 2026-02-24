import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Puzzle,
  RefreshCw,
  Headphones,
  LayoutGrid,
  Settings,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageView } from '../types';

interface HomeProps {
  onNavigate: (view: PageView) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] dark:bg-primary-500/10 -z-10 animate-pulse-slow"></div>
        
        <div className="text-center max-w-[95rem] mx-auto z-10 w-full">
          <AnimatedSection>
            {/* Top Banner Capabilities Grid */}
            <div className="max-w-7xl mx-auto mb-20">
              <p className="mb-8 text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase">
                Professional Add-Ons and Apps for the Microsoft Dynamics ecosystem
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="group rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-blue-200 dark:border-blue-900/50 p-6 backdrop-blur-md transition-all hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 p-3">
                      <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">Official Status</h3>
                    <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">Certified Microsoft<br />Dynamics Partner</p>
                  </div>
                </div>

                <div className="group rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 backdrop-blur-md transition-all hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-xl bg-primary-50 dark:bg-primary-900/30 p-3">
                      <LayoutGrid className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">ERP Specialty</h3>
                    <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">Business Central<br />365 Specialist</p>
                  </div>
                </div>

                <div className="group rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 backdrop-blur-md transition-all hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-xl bg-secondary-50 dark:bg-secondary-900/30 p-3">
                      <Settings className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Enterprise Scale</h3>
                    <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">Dynamics 365<br />F&O Specialist</p>
                  </div>
                </div>

                <div className="group rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-900/50 p-6 backdrop-blur-md transition-all hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-3">
                      <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">Connectivity</h3>
                    <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">40+ Payment Service<br />Provider Integrations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-8">
              <h1 className="tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-12">
                <span className="gradient-text block text-6xl md:text-7xl lg:text-8xl font-black mb-2 uppercase">
                  ERP & Payments
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold opacity-90">
                  Bridge the Gap
                </span>
              </h1>
            </div>
          </AnimatedSection>

          {/* PSP CONNECT Spotlight */}
          <AnimatedSection delay={150}>
            <div className="max-w-5xl mx-auto px-4 mb-20">
              <div className="relative group p-[1px] rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=2000"
                    alt="Payment Terminal"
                    className="w-full h-full object-cover opacity-[0.35] dark:opacity-[0.45]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 dark:from-slate-950/60 dark:via-transparent dark:to-slate-950/60"></div>
                </div>

                <div className="relative z-10 p-8 md:p-16 flex flex-col items-center space-y-8">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                    PSP CONNECT
                  </h2>

                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-primary-700 dark:text-primary-300 backdrop-blur-md">
                      <LayoutGrid className="w-6 h-6" />
                      <span className="font-bold text-lg md:text-xl">Business Central</span>
                    </div>
                    <div className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-secondary-700 dark:text-secondary-300 backdrop-blur-md">
                      <Settings className="w-6 h-6" />
                      <span className="font-bold text-lg md:text-xl">Finance & Operations</span>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white max-w-3xl leading-tight text-center">
                    Connecting Online Sellers with Payment Service Providers
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-6">
                    <div className="flex items-center space-x-3 text-emerald-700 dark:text-emerald-400 font-black text-xl">
                      <CheckCircle2 className="w-7 h-7" />
                      <span>Order to Cash Automation</span>
                    </div>
                    <div className="flex items-center space-x-3 text-emerald-700 dark:text-emerald-400 font-black text-xl">
                      <CheckCircle2 className="w-7 h-7" />
                      <span>Payments to Reconciliation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Action Buttons */}
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={() => onNavigate(PageView.CONTACT)} className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold text-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2">
                <span>Book Demo</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <button onClick={() => onNavigate(PageView.PRODUCTS)} className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-full font-bold text-xl transition-all backdrop-blur-md">
                View Integrations
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs md:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-12">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Logo Box 1 - Björn */}
            <div className="flex items-center justify-center bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 rounded-xl p-6 h-30 transition-all hover:shadow-md group">
              <img
                src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768653311/Bjo%CC%88rn_kbwemi.png"
                alt="Björn"
                className="max-h-full w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all object-contain dark:invert"
              />
            </div>
            {/* Logo Box 2 - Brasommarnöbler */}
            <div className="flex items-center justify-center bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 rounded-xl p-6 h-30 transition-all hover:shadow-md group">
              <img
                src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768653312/Brasommarnobler_z6xxep.png"
                alt="Brasommarnöbler"
                className="max-h-full w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all object-contain dark:invert"
              />
            </div>
            {/* Logo Box 3 - Nordiska */}
            <div className="flex items-center justify-center bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 rounded-xl p-6 h-30 transition-all hover:shadow-md group">
              <img
                src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768653312/nordiska_rpm8nt.png"
                alt="Nordiska"
                className="max-h-full w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all object-contain dark:invert"
              />
            </div>
            {/* Logo Box 4 - Hestra */}
            <div className="flex items-center justify-center bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 rounded-xl p-6 h-30 transition-all hover:shadow-md group">
              <img
                src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768653311/hestra_k8dsns.png"
                alt="Hestra"
                className="max-h-full w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all object-contain dark:invert"
              />
            </div>
            {/* Logo Box 5 - Nordic */}
            <div className="flex items-center justify-center bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 rounded-xl p-6 h-30 transition-all hover:shadow-md group">
              <img
                src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768653311/nordic_b5egcc.png"
                alt="Nordic"
                className="max-h-full w-auto grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all object-contain dark:invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHT STATS SECTION - Independent grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:border-primary-500 group">
                <Activity className="w-10 h-10 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-left uppercase tracking-tight">100,000+ Daily</h4>
                <p className="text-slate-500 dark:text-slate-400 text-left leading-relaxed">PSP Connect handles over 100,000 Sales and Payment transactions daily.</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:border-secondary-500 group">
                <Puzzle className="w-10 h-10 text-secondary-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-left uppercase tracking-tight">40+ PSPs</h4>
                <p className="text-slate-500 dark:text-slate-400 text-left leading-relaxed">Integrated with over 40 PSPs with more added frequently.</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:border-emerald-500 group">
                <RefreshCw className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-left uppercase tracking-tight">End-to-End</h4>
                <p className="text-slate-500 dark:text-slate-400 text-left leading-relaxed">Automated Sales Orders, Invoices, and Payment Reconciliation.</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:border-amber-500 group">
                <Headphones className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-left uppercase tracking-tight">Expert Support</h4>
                <p className="text-slate-500 dark:text-slate-400 text-left leading-relaxed">Ongoing advice and support for a trouble-free experience.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};