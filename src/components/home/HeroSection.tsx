import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ticket, Camera, GraduationCap } from 'lucide-react';

const floatingStickers = [
  '\u{1F4DA}',
  '\u{1F68C}',
  '\u{1F3EB}',
  '\u{1F4DD}',
  '\u{1F393}',
  '\u{1F3C6}',
  '\u{1F3A8}',
  '\u{1F9E0}',
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-8 md:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(185,28,28,0.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.24),transparent_34%),linear-gradient(180deg,#fff7ed_0%,#ffffff_58%,#fff1f2_100%)]" />

      {floatingStickers.map((sticker, i) => (
        <motion.span
          key={sticker + i}
          className="absolute text-2xl md:text-3xl opacity-70 select-none"
          style={{
            top: `${12 + (i % 4) * 21}%`,
            left: `${6 + (i * 12) % 88}%`,
          }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 8, -6, 0],
            opacity: [0.45, 0.78, 0.45],
          }}
          transition={{ duration: 4.5 + i * 0.45, repeat: Infinity, ease: 'easeInOut' }}
        >
          {sticker}
        </motion.span>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="headline-script text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-gray-900">
              Nalanda Public School
            </h1>
            <p className="mt-5 text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-2xl">
              A creative, disciplined, and future-ready learning space in Rohtak. Admissions are open from Nursery to 12th
              (All Stream) with smart classes, regular PTM, transport support, and qualified faculty.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="interactive-cta rounded-2xl bg-gradient-to-r from-school-blue to-school-blue-dark text-white px-7 h-12 text-base font-bold">
                <Link to="/enquire" className="inline-flex items-center gap-2">
                  <Ticket size={16} />
                  Apply For Admission
                </Link>
              </Button>
              <Button asChild variant="outline" className="interactive-cta rounded-2xl border-2 border-school-blue text-school-blue px-7 h-12 text-base font-bold">
                <Link to="/about" className="inline-flex items-center gap-2">
                  Discover Our Story
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="interactive-cta rounded-2xl border-2 border-amber-400 text-amber-700 px-7 h-12 text-base font-bold bg-amber-50/60">
                <Link to="/gallery" className="inline-flex items-center gap-2">
                  <Camera size={16} />
                  Campus Gallery
                </Link>
              </Button>
            </div>

            <div className="mt-8 gradient-ribbon px-5 py-2.5 text-sm md:text-base font-bold tracking-[0.08em] text-school-blue-dark">
              Vidya Vinay Anushasan | Shivaji Colony, Under the Flyover, Rohtak
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            whileHover={{ y: -4 }}
          >
            <div className="relative rounded-[2rem] border border-red-200 bg-white/85 backdrop-blur-sm p-4 shadow-2xl interactive-card">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-school-blue to-school-blue-dark text-white rounded-full px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-[0.12em]">
                Admission Open
              </div>
              <img
                src="https://source.unsplash.com/1200x800/?school,students,campus"
                alt="Nalanda Public School Campus"
                className="w-full h-[430px] object-cover rounded-[1.5rem]"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-red-50 border border-red-200 p-4 interactive-card">
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500">Campus Note</p>
                  <p className="text-base font-bold text-gray-800 mt-1">English Medium School</p>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 interactive-card">
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500">Focus</p>
                  <p className="text-base font-bold text-gray-800 mt-1 inline-flex items-center gap-1">
                    <GraduationCap size={14} className="text-school-blue" />
                    Nursery to 12th
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
