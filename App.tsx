import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';
import { Theme, PageView } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

  // 1. GLOBAL SCROLL RESET
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const renderView = () => {
    switch (currentView) {
      case PageView.HOME:
        return <Home onNavigate={setCurrentView} />;
      case PageView.ABOUT:
        return <About />;
      case PageView.PRODUCTS:
        // Already updated to receive onNavigate
        return <Products onNavigate={setCurrentView} />;
      case PageView.PARTNERS:
        // FIXED: Now passing onNavigate so the "Request Integration" button works
        return <Partners onNavigate={setCurrentView} />;
      case PageView.CONTACT:
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      onNavigate={setCurrentView} 
      theme={theme} 
      toggleTheme={toggleTheme}
    >
      <div className="animate-fade-in">
        {renderView()}
      </div>
    </Layout>
  );
};

export default App;