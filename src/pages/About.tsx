import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Award, Shield, BookOpen, Users, Target, Heart } from 'lucide-react';

const values = [
  { title: 'Excellence', icon: Award, desc: 'High standards in academics, discipline, and student outcomes.' },
  { title: 'Integrity', icon: Shield, desc: 'Honest communication, ethical conduct, and trust-driven culture.' },
  { title: 'Innovation', icon: BookOpen, desc: 'Modern teaching methods blended with strong fundamentals.' },
  { title: 'Inclusivity', icon: Users, desc: 'A respectful and supportive environment for every learner.' },
  { title: 'Leadership', icon: Target, desc: 'Confidence-building opportunities through academics and activities.' },
  { title: 'Compassion', icon: Heart, desc: 'Empathy and responsibility as essential life values.' },
];

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.nalandapublicschool.in/about"
    },
    "headline": "About Nalanda Public School",
    "description": "Learn about Nalanda Public School's mission, vision, core values, and commitment to quality education.",
    "publisher": {
      "@type": "Organization",
      "name": "Nalanda Public School",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nalandapublicschool.in/lovable-uploads/1.jpeg"
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>About Nalanda Public School | Mission, Vision & Values</title>
        <meta name="description" content="Discover Nalanda Public School's mission to provide exceptional English medium education and our values of excellence, integrity, innovation, and compassion." />
        <meta name="keywords" content="about Nalanda Public School, school mission, school vision, Rohtak education, English medium school" />
        <link rel="canonical" href="https://www.nalandapublicschool.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nalandapublicschool.in/about" />
        <meta property="og:title" content="About Nalanda Public School | Mission, Vision & Values" />
        <meta property="og:description" content="Discover Nalanda Public School's mission, vision, and core values that guide our approach to education." />
        <meta property="og:image" content="https://www.nalandapublicschool.in/lovable-uploads/1.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.nalandapublicschool.in/about" />
        <meta name="twitter:title" content="About Nalanda Public School | Mission, Vision & Values" />
        <meta name="twitter:description" content="Discover Nalanda Public School's mission, vision, and core values that guide our approach to education." />
        <meta name="twitter:image" content="https://www.nalandapublicschool.in/lovable-uploads/1.jpeg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(185,28,28,0.18),transparent_32%),radial-gradient(circle_at_85%_24%,rgba(245,158,11,0.24),transparent_35%),linear-gradient(180deg,#fff7ed_0%,#ffffff_80%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-6">
              <span className="scene-label mb-4">About The School</span>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.04]">A Learning Space With Purpose And Personality</h1>
              <p className="text-gray-600 mt-5 text-xl font-medium">
                Nalanda Public School is focused on strong academics, value-based development, and student confidence from foundational to senior classes.
              </p>
              <div className="mt-6 gradient-ribbon px-4 py-2 text-xs uppercase tracking-[0.2em] text-school-blue-dark">
                Vidya Vinay Anushasan
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[2rem] border border-red-200 bg-white/85 p-3 shadow-xl interactive-card">
                <img src="/lovable-uploads/2.jpeg" alt="Nalanda Public School Information Banner" className="w-full rounded-[1.4rem] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="scene-label mb-4">Core Values</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">The Foundation Of Every Decision</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="interactive-card rounded-3xl border border-red-200 bg-white p-6 shadow-md"
              >
                <v.icon className="text-school-blue mb-4" size={26} />
                <h3 className="font-black text-gray-900 text-2xl">{v.title}</h3>
                <p className="text-gray-600 text-base font-medium mt-2 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-red-200 bg-gradient-to-br from-amber-50 to-white p-8 md:p-10 shadow-lg grid md:grid-cols-[1fr,2fr] gap-8 items-center interactive-card"
          >
            <div className="text-center">
              <img src="/lovable-uploads/3.jpeg" alt="Mr. Dinesh Rathee" className="w-40 h-40 rounded-3xl object-cover mx-auto border-4 border-white shadow-lg" />
              <p className="font-black text-gray-900 mt-4 text-xl">Mr. Dinesh Rathee</p>
              <p className="text-base font-medium text-gray-600">Director</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-gray-900">Our School Motto</h3>
              <p className="text-school-blue mt-2 italic font-bold text-xl">"Vidya Vinay Anushasan"</p>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg font-medium">
                Our motto represents a balanced vision of knowledge, humility, and discipline. It guides our classrooms,
                school culture, and student development journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
