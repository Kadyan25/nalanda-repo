
import { NavLink } from 'react-router-dom';
import { BookOpen, Home, Users, Image, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navLinks } from './navData';

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

const DesktopNavLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="hidden md:flex items-center"
    >
      <div className="flex items-center gap-1 rounded-2xl border border-red-200/80 bg-white/80 px-2 py-1 shadow-sm">
        {navLinks.map((link, index) => {
          const IconComponent = getIconForPath(link.path);

          return (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.3 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "relative px-4 py-2.5 rounded-xl text-base font-semibold transition-all duration-300 ease-out overflow-hidden flex items-center gap-1.5",
                    isActive ? "bg-gradient-to-r from-yellow-100 to-red-100 text-school-blue-dark shadow-sm" : "text-gray-700 hover:text-school-blue hover:bg-red-50/70",
                    link.highlight ? "bg-gradient-to-r from-school-blue to-school-blue-dark text-white hover:text-white shadow-sm" : "",
                    link.isBold && "font-bold",
                    link.className
                  )
                }
              >
                {({ isActive }) => (
                  <span className="relative z-10 flex items-center gap-1.5">
                    {IconComponent && (
                      <IconComponent
                        size={15}
                        className={cn(
                          isActive && !link.highlight ? "text-school-blue-dark" : link.highlight ? "text-white" : "text-gray-500"
                        )}
                      />
                    )}
                    {link.name}
                    {isActive && !link.highlight && (
                      <motion.div
                        className="absolute left-2 right-2 -bottom-[2px] h-0.5 bg-school-blue-dark"
                        layoutId="underline"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DesktopNavLinks;

