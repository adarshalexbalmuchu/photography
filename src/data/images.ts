// Image data for the photography portfolio
// Add your images to public/images/wildlife and public/images/portraits
// Then update this file with the image information

export interface PortfolioImage {
  id: string;
  title: string;
  caption?: string;
  category: 'wildlife' | 'portraits';
  imageUrl: string;
  aspectRatio: '16:9' | '9:16' | '4:5' | '1:1'; // Added aspect ratio support
}

export const portfolioImages: PortfolioImage[] = [
  // Wildlife Images - Curated selection for optimal performance
  {
    id: 'wildlife-1',
    title: 'Wildlife Moment',
    caption: 'Capturing the essence of nature',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1397.jpeg',
    aspectRatio: '9:16'
  },
  {
    id: 'wildlife-2',
    title: 'Nature Portrait',
    caption: 'A moment in the wild',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_0651.jpeg',
    aspectRatio: '16:9'
  },
  {
    id: 'wildlife-3',
    title: 'Wildlife Scene',
    caption: 'The wilderness calls',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1388.jpg',
    aspectRatio: '16:9'
  },
  {
    id: 'wildlife-4',
    title: 'Natural Beauty',
    caption: 'Wildlife in action',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1275.jpg',
    aspectRatio: '9:16'
  },
  {
    id: 'wildlife-5',
    title: 'Wild Encounter',
    caption: 'Intimate wildlife moment',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1215.jpg',
    aspectRatio: '16:9'
  },
  {
    id: 'wildlife-6',
    title: 'Nature\'s Grace',
    caption: 'Elegance in the wild',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1190.jpg',
    aspectRatio: '9:16'
  },
  {
    id: 'wildlife-7',
    title: 'Wildlife Portrait',
    caption: 'Character study',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1183.jpg',
    aspectRatio: '16:9'
  },
  {
    id: 'wildlife-8',
    title: 'Natural Habitat',
    caption: 'Life in the wilderness',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1173.jpg',
    aspectRatio: '9:16'
  },
  {
    id: 'wildlife-9',
    title: 'Wild Moment',
    caption: 'Spontaneous wildlife capture',
    category: 'wildlife',
    imageUrl: '/images/wildlife/DSC_1166.jpg',
    aspectRatio: '16:9'
  },
  {
    id: 'wildlife-10',
    title: 'Nature\'s Drama',
    caption: 'Dynamic wildlife scene',
    category: 'wildlife',
    imageUrl: '/images/wildlife/IMG_9611.JPG',
    aspectRatio: '9:16'
  },

  // Portrait Images - Curated selection for optimal performance
  {
    id: 'portrait-1',
    title: 'Portrait Excellence',
    caption: 'Professional portrait artistry',
    category: 'portraits',
    imageUrl: '/images/portraits/DSC00891.JPG',
    aspectRatio: '9:16'
  },
  {
    id: 'portrait-2',
    title: 'Character Study',
    caption: 'Capturing personality',
    category: 'portraits',
    imageUrl: '/images/portraits/DSC00902.JPG',
    aspectRatio: '16:9'
  },
  {
    id: 'portrait-3',
    title: 'Human Expression',
    caption: 'Emotional portrait',
    category: 'portraits',
    imageUrl: '/images/portraits/DSC01166.JPG',
    aspectRatio: '9:16'
  },
  {
    id: 'portrait-4',
    title: 'Portrait Art',
    caption: 'Artistic vision',
    category: 'portraits',
    imageUrl: '/images/portraits/DSC01167.JPG',
    aspectRatio: '16:9'
  },
  {
    id: 'portrait-5',
    title: 'Professional Shot',
    caption: 'Studio excellence',
    category: 'portraits',
    imageUrl: '/images/portraits/IMG_9560.JPG',
    aspectRatio: '9:16'
  },
  {
    id: 'portrait-6',
    title: 'Natural Portrait',
    caption: 'Authentic expression',
    category: 'portraits',
    imageUrl: '/images/portraits/IMG_9561.JPG',
    aspectRatio: '16:9'
  },
  {
    id: 'portrait-7',
    title: 'Portrait Story',
    caption: 'Personal narrative',
    category: 'portraits',
    imageUrl: '/images/portraits/IMG_9562.JPG',
    aspectRatio: '9:16'
  },
  {
    id: 'portrait-8',
    title: 'Classic Portrait',
    caption: 'Timeless elegance',
    category: 'portraits',
    imageUrl: '/images/portraits/IMG_9565.JPG',
    aspectRatio: '16:9'
  },
  {
    id: 'portrait-9',
    title: 'Contemporary Art',
    caption: 'Modern portrait style',
    category: 'portraits',
    imageUrl: '/images/portraits/IMG_9567.JPG',
    aspectRatio: '9:16'
  },
  {
    id: 'portrait-10',
    title: 'Portrait Session',
    caption: 'Professional photography',
    category: 'portraits',
    imageUrl: '/images/portraits/Snapseed.jpg',
    aspectRatio: '16:9'
  }
];

// Helper function to get images by category
export const getImagesByCategory = (category: 'wildlife' | 'portraits'): PortfolioImage[] => {
  return portfolioImages.filter(image => image.category === category);
};

// Helper function to get all images
export const getAllImages = (): PortfolioImage[] => {
  return portfolioImages;
};

// Helper function to organize images for optimal layout
export const organizeImagesForLayout = (images: PortfolioImage[]): PortfolioImage[] => {
  // Create a copy to avoid mutating the original array
  const arrangedImages = [...images];
  const result: PortfolioImage[] = [];
  
  // Group images by aspect ratio
  const landscapes = arrangedImages.filter(img => img.aspectRatio === '16:9');
  const portraits = arrangedImages.filter(img => img.aspectRatio === '9:16');
  const squares = arrangedImages.filter(img => img.aspectRatio === '1:1' || img.aspectRatio === '4:5');
  
  // If we don't have much variety, just return the original array
  if (landscapes.length === 0 || portraits.length === 0) {
    return arrangedImages;
  }

  // Create an interesting pattern by alternating aspect ratios
  // Start with a landscape to create a strong visual lead
  if (landscapes.length > 0) {
    result.push(landscapes.shift()!);
  }
  
  // Now alternate between portrait and landscape
  while (portraits.length > 0 || landscapes.length > 0) {
    // Add 2 portraits side by side if available
    if (portraits.length >= 2) {
      result.push(portraits.shift()!);
      result.push(portraits.shift()!);
    } else if (portraits.length === 1) {
      result.push(portraits.shift()!);
    }
    
    // Add a landscape
    if (landscapes.length > 0) {
      result.push(landscapes.shift()!);
    }
    
    // Add a square if available
    if (squares.length > 0 && result.length % 4 === 0) {
      result.push(squares.shift()!);
    }
  }
  
  // Add any remaining squares
  result.push(...squares);
  
  return result;
};
