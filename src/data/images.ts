// Image data for the photography portfolio
// Add your images to public/images/wildlife and public/images/portraits
// Then update this file with the image information

export interface PortfolioImage {
  id: string;
  title: string;
  caption?: string;
  category: 'wildlife' | 'portraits';
  imageUrl: string;
}

export const portfolioImages: PortfolioImage[] = [
  // Wildlife Images
  {
    id: 'wildlife-1',
    title: 'Majestic Lion',
    caption: 'A powerful lion in its natural habitat',
    category: 'wildlife',
    imageUrl: '/images/wildlife/lion.jpg'
  },
  {
    id: 'wildlife-2',
    title: 'Soaring Eagle',
    caption: 'An eagle captured in flight',
    category: 'wildlife',
    imageUrl: '/images/wildlife/eagle.jpg'
  },
  {
    id: 'wildlife-3',
    title: 'Peaceful Deer',
    caption: 'A deer grazing in the morning light',
    category: 'wildlife',
    imageUrl: '/images/wildlife/deer.jpg'
  },

  // Portrait Images
  {
    id: 'portrait-1',
    title: 'Portrait Session 1',
    caption: 'Professional portrait photography',
    category: 'portraits',
    imageUrl: '/images/portraits/portrait1.jpg'
  },
  {
    id: 'portrait-2',
    title: 'Portrait Session 2',
    caption: 'Capturing natural expressions',
    category: 'portraits',
    imageUrl: '/images/portraits/portrait2.jpg'
  },
  {
    id: 'portrait-3',
    title: 'Portrait Session 3',
    caption: 'Studio portrait with dramatic lighting',
    category: 'portraits',
    imageUrl: '/images/portraits/portrait3.jpg'
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
