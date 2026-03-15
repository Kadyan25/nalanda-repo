
import { NavLink } from 'react-router-dom';
import { ChevronRight, BookOpen, Menu, X, Home, Users, Image, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navLinks } from './navData';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const getIconForPath = (path: string) => {
  switch (path) {
    case '/':
      return Home;
    case '/about':
      return Users;
    case '/academics':
      return BookOpen;
    case '/gallery':
      return Image;
    case '/enquire':
      return MessageSquare;
    default:
      return null;
  }
};

const MobileMenu = ({ isOpen, toggleMenu, closeMenu }: MobileMenuProps) => {
  return (
    <>
      <div className="md:hidden flex items-center">
        <motion.button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-school-blue focus-ring rounded-xl p-2.5 hover:bg-red-50 transition-all duration-300 relative overflow-hidden group border border-red-200/80 bg-white/85"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="absolute inset-0 bg-yellow-200 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            initial={false}
            animate={isOpen ? { scale: 100 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
          />
          {isOpen ? (
            <X size={24} className="relative z-10" />
          ) : (
            <Menu size={24} className="relative z-10" />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden absolute top-[88px] left-0 right-0 bg-gradient-to-b from-white/95 via-red-50/90 to-yellow-50/95 backdrop-blur-xl shadow-xl border-t border-red-200/60"
          >
            <div className="flex flex-col p-5 space-y-3">
              {navLinks.map((link, index) => {
                const IconComponent = getIconForPath(link.path);

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.25 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "p-3 rounded-xl flex items-center justify-between border",
                          isActive
                            ? "bg-gradient-to-r from-yellow-100 to-red-100 text-school-blue-dark font-medium border-red-200"
                            : link.highlight
                              ? "bg-gradient-to-r from-school-blue to-school-blue-dark text-white border-transparent"
                              : "text-gray-700 bg-white/70 border-red-100 hover:bg-yellow-50/70 hover:text-school-blue",
                          link.isBold && "font-bold",
                          link.className,
                          "transition-all duration-300 hover:shadow-sm"
                        )
                      }
                      onClick={closeMenu}
                    >
                      <span className="flex items-center gap-3">
                        {IconComponent && (
                          <span className={cn(
                            "p-2 rounded-full flex items-center justify-center",
                            link.highlight ? "bg-white/20" : "bg-red-100/60"
                          )}>
                            <IconComponent size={18} className={link.highlight ? "text-white" : ""} />
                          </span>
                        )}
                        {link.name}
                      </span>
                      <ChevronRight size={16} className={link.highlight ? "text-white" : "text-gray-400"} />
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;

