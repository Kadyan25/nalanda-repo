
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  // Structured data for the school (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Nalanda Public School",
    "description": "Nalanda Public School provides quality English medium education from Nursery to 12th with a focus on academic excellence and holistic development.",
    "url": "https://www.nalandapublicschool.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shivaji Colony, Under the Flyover",
      "addressLocality": "Rohtak",
      "addressRegion": "Haryana",
      "postalCode": "124001",
      "addressCountry": "IN"
    },
    "telephone": "+918950899495",
    "email": "info@nalandapublicschool.in"
  };

  return (
    <Layout>
      <Helmet>
        <title>Nalanda Public School Rohtak | Admission Open</title>
        <meta name="description" content="Nalanda Public School in Rohtak offers English medium education from Nursery to 12th (all streams) with smart classes and qualified faculty." />
        <meta name="keywords" content="Nalanda Public School, Rohtak school, admission open, English medium school, Nursery to 12th, Shivaji Colony" />
        <link rel="canonical" href="https://www.nalandapublicschool.in" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nalandapublicschool.in" />
        <meta property="og:title" content="Nalanda Public School - Admission Open" />
        <meta property="og:description" content="An English Medium School, Nursery to 12th (All Stream), focused on quality education and strong values." />
        <meta property="og:image" content="https://www.nalandapublicschool.in/lovable-uploads/1.jpeg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.nalandapublicschool.in" />
        <meta name="twitter:title" content="Nalanda Public School - Admission Open" />
        <meta name="twitter:description" content="English medium school in Rohtak with admission open from Nursery to 12th (All Stream)." />
        <meta name="twitter:image" content="https://www.nalandapublicschool.in/lovable-uploads/1.jpeg" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
