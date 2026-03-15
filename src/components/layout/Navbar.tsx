
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from './navbar/Logo';
import DesktopNavLinks from './navbar/DesktopNavLinks';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <AnimatePresence>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-red-200/70 shadow-lg shadow-red-900/5"
            : "bg-transparent"
        )}
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="w-full bg-gradient-to-r from-school-blue-dark via-school-blue to-school-blue-light text-white text-xs md:text-sm tracking-[0.16em] uppercase py-1.5 text-center">
          Admissions Open 2026-27 | Nursery to 12th (All Stream)
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex justify-between items-center gap-4">
          <Logo />
          <div className="hidden md:flex items-center">
            <DesktopNavLinks />
          </div>
          <MobileMenu
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
          />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;

