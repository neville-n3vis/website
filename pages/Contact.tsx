import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Web3Forms API Integration
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cb80821b-7680-4ef5-90fe-060cbe977515",
          name: formState.name,
          email: formState.email,
          company: formState.company,
          message: formState.message,
          subject: `New Inquiry from ${formState.name} - ${formState.company}`,
          from_name: "N3Vision Web Form"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Let's talk <span className="gradient-text">integration</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
              Feel free to contact us for a demo or to discuss our solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400">info@n3vis.com</p>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Headquarters</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Luntmakargatan 34<br/>
                    111 37 Stockholm, Sweden
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Form Container */}
        <AnimatedSection delay={300}>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h2>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="Acme Inc."
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                {status === 'error' && (
                   <div className="flex items-center space-x-2 text-red-500 bg-red-50 dark:bg-red-900/10 p-3 rounded-lg text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Oops! Something went wrong. Please try again.</span>
                   </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center space-x-2 ${
                    status === 'submitting' 
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
