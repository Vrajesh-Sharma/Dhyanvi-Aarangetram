import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      <main className={`flex-grow w-full ${isHome ? '' : 'pt-20'}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
}