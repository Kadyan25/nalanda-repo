import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const pillars = [
  'Smart class-enabled teaching with practical engagement',
  'Regular PTM and progress tracking for transparent growth',
  'Balanced academics with discipline, ethics, and personality development',
  'Focused assessments that improve confidence and exam performance',
];

const Curriculum = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] overflow-hidden border border-red-200 shadow-xl interactive-card"
          >
            <img
              src="https://source.unsplash.com/1200x900/?school,classroom,india"
              alt="Interactive classroom"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="scene-label mb-4">Learning Approach</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Curriculum With Real-World Relevance</h2>
            <p className="text-gray-600 mt-4 text-lg font-medium">
              We build strong conceptual foundations while maintaining a consistent, student-friendly academic rhythm.
            </p>
            <div className="mt-6 space-y-3">
              {pillars.map((item) => (
                <div key={item} className="interactive-card flex items-start gap-2 rounded-xl border border-amber-200 bg-white/85 p-4">
                  <CheckCircle2 size={20} className="text-school-blue mt-0.5" />
                  <p className="text-base font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
