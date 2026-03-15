import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(245,158,11,0.24),transparent_30%),radial-gradient(circle_at_12%_75%,rgba(185,28,28,0.18),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] border border-red-200/70 bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-xl interactive-card"
        >
          <span className="scene-label mb-4">Visit Campus</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Ready To Start Your Child's Next Chapter?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl text-lg font-medium">
            Meet our team, explore classrooms, and understand the admission process in one guided campus tour.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 interactive-card">
              <p className="text-base font-bold text-gray-800 inline-flex items-center gap-2">
                <CalendarDays size={16} className="text-school-blue" />
                School Hours
              </p>
              <p className="text-base text-gray-600 mt-2">Mon-Fri: 8:00 AM - 3:00 PM | Sat: 8:00 AM - 12:00 PM</p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50/60 p-4 interactive-card">
              <p className="text-base font-bold text-gray-800 inline-flex items-center gap-2">
                <MapPin size={16} className="text-school-blue" />
                Campus Address
              </p>
              <p className="text-base text-gray-600 mt-2">Shivaji Colony, Under the Flyover, Rohtak</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="interactive-cta rounded-2xl bg-gradient-to-r from-school-blue to-school-blue-dark text-white px-7 h-12 text-base font-bold">
              <Link to="/enquire">Enquire Now</Link>
            </Button>
            <Button asChild variant="outline" className="interactive-cta rounded-2xl border-2 border-school-blue text-school-blue px-7 h-12 text-base font-bold">
              <Link to="/about" className="inline-flex items-center gap-2">
                Learn More
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
