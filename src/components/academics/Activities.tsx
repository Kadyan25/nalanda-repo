import { motion } from 'framer-motion';
import { Music2, Palette, Dumbbell, Languages } from 'lucide-react';

const activities = [
  { title: 'Arts & Crafts', icon: Palette, color: 'from-red-100 to-red-50' },
  { title: 'Sports & Athletics', icon: Dumbbell, color: 'from-amber-100 to-yellow-50' },
  { title: 'Music & Performing Arts', icon: Music2, color: 'from-orange-100 to-red-50' },
  { title: 'Language & Debate', icon: Languages, color: 'from-yellow-100 to-amber-50' },
];

const Activities = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="scene-label mb-4">Beyond The Classroom</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900">Co-Curricular Highlights</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -10, rotate: idx % 2 === 0 ? -1 : 1, scale: 1.02 }}
              className={`interactive-card rounded-3xl border border-red-200 bg-gradient-to-br ${item.color} p-6 shadow-md`}
            >
              <item.icon className="text-school-blue mb-5" size={28} />
              <h3 className="font-black text-2xl text-gray-900">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
