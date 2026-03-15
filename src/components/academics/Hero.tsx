import { motion } from 'framer-motion';
import { BookMarked, Lightbulb, BrainCircuit } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(185,28,28,0.2),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(245,158,11,0.24),transparent_32%),linear-gradient(180deg,#fff7ed_0%,#ffffff_90%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] border border-red-200 bg-white/85 backdrop-blur-sm p-8 md:p-10 shadow-lg interactive-card"
        >
          <p className="scene-label mb-4">Academic Overview</p>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.04]">
            Designed For Curiosity, Built For Results
          </h1>
          <p className="text-gray-600 mt-5 max-w-3xl text-xl font-medium">
            Our academic model combines conceptual clarity, modern teaching tools, and disciplined mentorship from foundational years to senior secondary.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50/70 p-5 interactive-card">
              <BookMarked className="text-school-blue mb-3" size={24} />
              <p className="font-bold text-lg text-gray-800">Structured Curriculum</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 interactive-card">
              <Lightbulb className="text-school-blue mb-3" size={24} />
              <p className="font-bold text-lg text-gray-800">Interactive Learning</p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 interactive-card">
              <BrainCircuit className="text-school-blue mb-3" size={24} />
              <p className="font-bold text-lg text-gray-800">Exam Readiness</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
