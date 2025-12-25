import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Journey', path: '/journey' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Gurus', path: '/gurus' },
  { name: 'Location', path: '/location' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-maroon-900 shadow-xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="font-serif text-2xl font-bold text-gold-400 tracking-wider z-50">
          DHYANVI
        </Link>
        
        {/* DESKTOP MENU - Fixed Spacing with gap-8 */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs lg:text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-white ${
                location.pathname === link.path ? 'text-gold-400 border-b border-gold-400' : 'text-cream/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gold-400">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-maroon-900 flex flex-col items-center justify-center space-y-6 overflow-hidden md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl text-cream hover:text-gold-400 tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}