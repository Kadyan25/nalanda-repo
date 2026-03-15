import { motion } from 'framer-motion';
import { Bus, Cpu, Users2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const storyBlocks = [
  {
    title: 'Smart Classrooms',
    desc: 'Tech-enabled learning that keeps students active, curious, and involved.',
    icon: Cpu,
    tint: 'from-red-100 to-red-50',
  },
  {
    title: 'Transport & Safety',
    desc: 'Reliable transportation and a secure campus environment for every learner.',
    icon: Bus,
    tint: 'from-amber-100 to-yellow-50',
  },
  {
    title: 'Qualified Faculty',
    desc: 'Experienced educators who focus on concept clarity and individual growth.',
    icon: Users2,
    tint: 'from-orange-100 to-red-50',
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(254,243,199,0.4),rgba(255,255,255,0.95))]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="scene-label mb-4">Why Families Choose Us</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900">
            Why Choose Nalanda Public School
          </h2>
          <p className="text-gray-600 mt-4 text-xl font-medium">
            Nalanda Public School blends discipline, creativity, and practical learning in a campus environment students enjoy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {storyBlocks.map((block, idx) => (
            <motion.article
              key={block.title}
              initial={{ opacity: 0, y: 30, rotate: idx === 1 ? 0 : idx % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -9, scale: 1.02 }}
              className={`interactive-card rounded-3xl border border-red-200 bg-gradient-to-br ${block.tint} p-7 shadow-lg`}
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/85 border border-red-200">
                <block.icon className="text-school-blue" size={24} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">{block.title}</h3>
              <p className="text-gray-700 text-lg font-medium leading-relaxed">{block.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 text-school-blue-dark text-lg font-bold hover:text-school-blue transition-colors"
          >
            Explore Academic Journey
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
