import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Ticket } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-red-200/70 bg-gradient-to-b from-white via-yellow-50/70 to-red-50/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-3xl border border-red-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="scene-label mb-3">Campus Visit</p>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900">Visit Nalanda Public School</h3>
              <p className="text-gray-700 mt-2 text-lg font-semibold">Smart classes, regular PTM, transport, labs, and experienced faculty.</p>
            </div>
            <Link
              to="/enquire"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-school-blue to-school-blue-dark px-5 py-3 text-white text-base font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Ticket size={16} />
              Book A Campus Visit
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lovable-uploads/1.jpeg"
                alt="Nalanda Public School Logo"
                className="w-12 h-12 rounded-xl object-contain mix-blend-multiply border border-red-200 bg-white"
              />
              <div>
                <p className="text-lg font-black text-gray-900">NALANDA PUBLIC SCHOOL</p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-[0.1em]">Vidya Vinay Anushasan</p>
              </div>
            </div>
            <p className="text-base font-medium text-gray-700 leading-relaxed">
              An English medium school in Rohtak with admission open from Nursery to 12th (All Stream).
            </p>
          </div>

          <div>
            <p className="text-lg font-black text-gray-900 mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-2 text-base">
              <Link to="/" className="text-gray-700 font-semibold hover:text-school-blue transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 font-semibold hover:text-school-blue transition-colors">About</Link>
              <Link to="/academics" className="text-gray-700 font-semibold hover:text-school-blue transition-colors">Academics</Link>
              <Link to="/gallery" className="text-gray-700 font-semibold hover:text-school-blue transition-colors">Gallery</Link>
              <Link to="/enquire" className="text-gray-700 font-semibold hover:text-school-blue transition-colors">Enquire</Link>
            </div>
          </div>

          <div>
            <p className="text-lg font-black text-gray-900 mb-4">Contact</p>
            <div className="space-y-3 text-base text-gray-700 font-medium">
              <p className="flex items-start gap-2"><MapPin size={17} className="mt-0.5 text-school-blue" /> Shivaji Colony, Under the Flyover, Rohtak, Haryana</p>
              <p className="flex items-center gap-2"><Phone size={17} className="text-school-blue" /> +91 8950899495</p>
              <p className="flex items-center gap-2"><Phone size={17} className="text-school-blue" /> +91 8950899695</p>
              <p className="flex items-center gap-2"><Mail size={17} className="text-school-blue" /> info@nalandapublicschool.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-ribbon text-sm md:text-base font-bold tracking-[0.12em] text-school-blue-dark text-center py-2.5">
        Nalanda Public School | Rohtak | Admissions Open
      </div>
      <div className="text-center text-sm font-semibold text-gray-700 py-4">
        Copyright {year} Nalanda Public School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
