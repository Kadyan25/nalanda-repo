
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/academics/Hero';
import Programs from '@/components/academics/Programs';
import Curriculum from '@/components/academics/Curriculum';
import Activities from '@/components/academics/Activities';
import Faq from '@/components/academics/Faq';

const Academics = () => {
  // Structured data for the academics page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Nalanda Public School Academic Programs",
    "description": "Comprehensive academic programs and curriculum at Nalanda Public School focusing on holistic development and excellence in education.",
    "provider": {
      "@type": "Organization",
      "name": "Nalanda Public School",
      "sameAs": "https://www.nalandapublicschool.in"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Primary Education",
        "description": "Foundation education for young learners focusing on core skills and character development"
      },
      {
        "@type": "CourseInstance",
        "name": "Secondary Education",
        "description": "Comprehensive middle and high school education following CBSE curriculum"
      },
      {
        "@type": "CourseInstance",
        "name": "Senior Secondary",
        "description": "Specialized education for grades 11-12 preparing students for higher education and careers"
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Academic Programs & Curriculum | Nalanda Public School Rohtak</title>
        <meta name="description" content="Explore Nalanda Public School's comprehensive academic programs, English medium curriculum, extracurricular activities, and teaching methodology designed for all-round student development." />
        <meta name="keywords" content="Nalanda Public School academics, school curriculum Rohtak, school programs, extracurricular activities, primary education, secondary education, senior secondary education" />
        <link rel="canonical" href="https://www.nalandapublicschool.in/academics" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nalandapublicschool.in/academics" />
        <meta property="og:title" content="Academic Programs & Curriculum | Nalanda Public School Rohtak" />
        <meta property="og:description" content="Explore our comprehensive academic programs, CBSE-aligned curriculum, and extracurricular activities designed for holistic student development." />
        <meta property="og:image" content="https://www.nalandapublicschool.in/lovable-uploads/1.jpeg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.nalandapublicschool.in/academics" />
        <meta name="twitter:title" content="Academic Programs & Curriculum | Nalanda Public School" />
        <meta name="twitter:description" content="Explore our comprehensive academic programs, curriculum, and extracurricular activities designed for holistic student development." />
        <meta name="twitter:image" content="https://www.nalandapublicschool.in/lovable-uploads/1.jpeg" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <Hero />
        <Programs />
        <Curriculum />
        <Activities />
        <Faq />
      </motion.div>
    </Layout>
  );
};

export default Academics;
