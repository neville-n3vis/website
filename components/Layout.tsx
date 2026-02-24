import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronRight, Activity, Shield } from 'lucide-react';
import { Theme, PageView, NavItem } from '../types';
import { Logo } from '../components/logo'; // Imported your new component

interface LayoutProps {
  children: React.ReactNode;
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  toggleTheme: () => void;
  theme: Theme;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: PageView.HOME },
  { label: 'Products', view: PageView.PRODUCTS },
  { label: 'Partners', view: PageView.PARTNERS },
  { label: 'About', view: PageView.ABOUT },
  { label: 'Contact', view: PageView.CONTACT },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate, toggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass border-b border-slate-200 dark:border-slate-800 py-3 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* BRAND LOGO REPLACED HERE */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick(PageView.HOME)}
            >
              <Logo />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentView === item.view
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>

              <button 
                onClick={() => handleNavClick(PageView.CONTACT)}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
               <button onClick={toggleTheme} className="p-2 rounded-full">
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 dark:text-white">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 py-4 px-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-lg font-medium text-left py-2 px-4 rounded-lg ${
                    currentView === item.view ? 'bg-slate-100 dark:bg-slate-800 text-primary-600' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              {/* FOOTER LOGO REPLACED HERE */}
              <div 
                className="flex items-center mb-4 cursor-pointer"
                onClick={() => handleNavClick(PageView.HOME)}
              >
                <Logo />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Empowering modern enterprises with a zero-data footprint policy. Secure, automated ERP and payment integrations.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li onClick={() => handleNavClick(PageView.PRODUCTS)} className="hover:text-primary-500 cursor-pointer transition-colors">Integrations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li onClick={() => handleNavClick(PageView.ABOUT)} className="hover:text-primary-500 cursor-pointer transition-colors">About Us</li>
              </ul>
            </div>

             <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li onClick={() => handleNavClick(PageView.CONTACT)} className="hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer font-medium transition-colors">Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col items-center text-sm text-slate-500 dark:text-slate-500">
            <p className="text-center">© 2026 N3Vision AB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};