
import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryProps {
  category: 'wildlife' | 'portraits';
}

const wildlifeImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=3634&q=80',
    title: 'Mountain Deer',
    location: 'Rocky Mountains, Colorado',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4221&q=80',
    title: 'Savanna Wildlife',
    location: 'Serengeti, Tanzania',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=5472&q=80',
    title: 'Forest Guardian',
    location: 'Yellowstone National Park',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=5146&q=80',
    title: 'Playful Primate',
    location: 'Borneo Rainforest',
  },
];

const portraitImages = [
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=3057&q=80',
    title: 'Innocence',
    location: 'Studio Session',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2976&q=80',
    title: 'Natural Beauty',
    location: 'Golden Hour Portrait',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80',
    title: 'Character Study',
    location: 'Environmental Portrait',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80',
    title: 'Contemplation',
    location: 'Urban Portrait Series',
  },
];

const Gallery: React.FC<GalleryProps> = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  const images = category === 'wildlife' ? wildlifeImages : portraitImages;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
            onClick={() => setSelectedImage(image)}
            data-cursor="hover"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-medium mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
