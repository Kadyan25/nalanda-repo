
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import UploadSection from '@/components/gallery/UploadSection';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Image } from 'lucide-react';

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  const initialImages: GalleryImage[] = [
    {
      id: '1',
      src: 'https://source.unsplash.com/1200x800/?students,classroom&sig=101',
      alt: 'Classroom Learning Session',
      category: 'academics',
      description: 'Students engaged in a focused classroom learning session.'
    },
    {
      id: '2',
      src: 'https://source.unsplash.com/1200x800/?school,sports&sig=102',
      alt: 'Sports Day Winners',
      category: 'sports',
      description: 'Winners of the annual sports competition with their trophies and medals.'
    },
    {
      id: '3',
      src: 'https://source.unsplash.com/1200x800/?school,event&sig=103',
      alt: 'Annual Cultural Program',
      category: 'events',
      description: 'Students performing on stage during a school cultural event.'
    },
    {
      id: '4',
      src: 'https://source.unsplash.com/1200x800/?school,celebration&sig=104',
      alt: 'Celebration Highlights',
      category: 'events',
      description: 'Special moments from school celebrations and group activities.'
    },
    {
      id: '5',
      src: 'https://source.unsplash.com/1200x800/?school,assembly&sig=105',
      alt: 'School Assembly Session',
      category: 'school',
      description: 'Students gathered for the morning assembly session on the school grounds.'
    },
    {
      id: '6',
      src: 'https://source.unsplash.com/1200x800/?school,lab&sig=106',
      alt: 'Science Lab Activity',
      category: 'school',
      description: 'Students taking part in practical activities in a modern learning environment.'
    },
    {
      id: '7',
      src: 'https://source.unsplash.com/1200x800/?school,bus&sig=107',
      alt: 'School Transport Facility',
      category: 'school',
      description: 'Safe and reliable school transport for students.'
    }
  ];

  const [images, setImages] = useState<GalleryImage[]>(initialImages);

  // Load gallery and show toast when gallery is loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast.success('Gallery loaded successfully!');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleImageUpload = (newImage: GalleryImage) => {
    console.log("New image received:", newImage);
    // Add new image to the images array
    setImages(prevImages => [newImage, ...prevImages]);
    // Show a success toast
    toast.success('Image uploaded successfully!');
  };

  // Extract unique categories from images
  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 rounded-[2rem] border border-red-200 bg-gradient-to-br from-white via-yellow-50/80 to-red-50/70 p-8 shadow-md"
        >
          <span className="scene-label mb-4">Campus Gallery</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Campus Stories</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A snapshot collection of school life, events, classes, and student moments.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-school-blue"></div>
          </div>
        ) : (
          <>
            <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="mb-8">
              <div className="flex justify-center">
                <TabsList className="bg-white border border-red-200 p-1 mb-6 rounded-xl shadow-sm">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="capitalize data-[state=active]:bg-school-blue data-[state=active]:text-white rounded-lg"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value={selectedCategory}>
                {filteredImages.length > 0 ? (
                  <GalleryGrid images={filteredImages} />
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                    <Image className="w-16 h-16 mb-4 text-gray-300" />
                    <p>No images found in this category.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <UploadSection onImageUpload={handleImageUpload} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
