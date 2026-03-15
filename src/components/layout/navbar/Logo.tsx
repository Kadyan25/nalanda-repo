
import { NavLink } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="flex items-center"
    >
      <NavLink to="/" className="flex items-center gap-4 group">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-100 via-white to-red-100 p-2 shadow-md group-hover:shadow-xl transition-all duration-300 border border-red-200">
          <div className="relative">
            <motion.img
              src="/lovable-uploads/1.jpeg"
              alt="Nalanda Public School Logo"
              className="h-14 w-14 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: -4 }}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <h1 className="text-2xl font-black leading-none bg-gradient-to-r from-school-blue-dark via-school-blue to-school-blue-light bg-clip-text text-transparent">
            NALANDA PUBLIC SCHOOL
          </h1>
          <motion.p
            className="text-[13px] font-bold text-gray-700 group-hover:text-school-blue transition-colors duration-300 flex items-center gap-1.5 mt-1"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ShieldCheck size={12} />
            Vidya Vinay Anushasan
          </motion.p>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default Logo;
