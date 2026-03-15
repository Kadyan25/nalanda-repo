
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

type MapSectionProps = {
  coordinates: string;
  schoolName: string;
  mapUrl: string;
};

const MapSection: React.FC<MapSectionProps> = ({ coordinates, schoolName, mapUrl }) => {
  const decimalCoordinates = coordinates;
  
  const exactMapUrl = mapUrl;
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-school-blue/10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Campus</h2>
            <p className="text-gray-600 mb-6">
              We invite you to visit our campus and experience our facilities firsthand. Our staff will be happy to guide you through our programs and answer any questions you may have.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                className="bg-school-blue hover:bg-school-blue-dark"
                onClick={() => window.open(exactMapUrl, '_blank')}
              >
                <Map size={16} className="mr-2" />
                View Exact Location
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${decimalCoordinates}`, '_blank')}
              >
                <Navigation size={16} className="mr-2" />
                Get Directions
              </Button>
            </div>
            
            <div className="max-w-md mx-auto border border-school-blue/20 rounded-lg p-3 mb-6 bg-school-blue/5">
              <p className="font-medium text-gray-800">
                {schoolName}
              </p>
              <p className="text-gray-600 mb-2">
                Shivaji Colony, Under the Flyover, Rohtak, Haryana
              </p>
              <p className="text-sm text-school-blue font-medium">
                Coordinates: {decimalCoordinates}
              </p>
            </div>
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
            <iframe 
              src={`https://www.google.com/maps?q=${encodeURIComponent(decimalCoordinates)}&z=18&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`${schoolName} Location`}
              className="absolute inset-0"
            ></iframe>
          </div>
          
          <div className="mt-6 text-center text-gray-600">
            <p className="font-medium">{schoolName}</p>
            <p>Shivaji Colony, Under the Flyover, Rohtak, Haryana</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
