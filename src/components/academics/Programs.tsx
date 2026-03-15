import { motion } from 'framer-motion';
import { BookOpenCheck, GraduationCap, Microscope, Trophy } from 'lucide-react';

const programs = [
  {
    title: 'Primary Education',
    grades: 'Grades 1-5',
    desc: 'Strong basics in literacy, numeracy, and communication with care-driven mentoring.',
    icon: BookOpenCheck,
  },
  {
    title: 'Middle School',
    grades: 'Grades 6-8',
    desc: 'Transition stage focused on concept depth, confidence, and subject exploration.',
    icon: GraduationCap,
  },
  {
    title: 'High School',
    grades: 'Grades 9-10',
    desc: 'Board-focused preparation with regular assessments and targeted support.',
    icon: Trophy,
  },
  {
    title: 'Senior Secondary',
    grades: 'Grades 11-12',
    desc: 'Stream-based progression in Science, Commerce, and Humanities with career direction.',
    icon: Microscope,
  },
];

const Programs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="scene-label mb-4">Academic Stages</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900">One Academic Journey, Four Strong Stages</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="interactive-card rounded-3xl border border-red-200 bg-white p-6 shadow-md"
            >
              <div className="flex justify-end mb-5">
                <p.icon className="text-school-blue" size={24} />
              </div>
              <h3 className="text-2xl font-black text-gray-900">{p.title}</h3>
              <p className="text-base text-school-blue mt-1 font-bold">{p.grades}</p>
              <p className="text-base text-gray-600 mt-3 leading-relaxed font-medium">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
