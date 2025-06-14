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
  // Wildlife Images - Mix of landscape and portrait orientations
  {
    id: 'wildlife-1',
    title: 'Majestic Lion',
    caption: 'A powerful lion in its natural habitat',
    category: 'wildlife',
    imageUrl: '/images/wildlife/lion.jpg',
    aspectRatio: '16:9'
  },
  {
    id: 'wildlife-2',
    title: 'Soaring Eagle',
    caption: 'An eagle captured in flight',
    category: 'wildlife',
    imageUrl: '/images/wildlife/eagle.jpg',
    aspectRatio: '9:16'
  },
  {
    id: 'wildlife-3',
    title: 'Peaceful Deer',
    caption: 'A deer grazing in the morning light',
    category: 'wildlife',
    imageUrl: '/images/wildlife/deer.jpg',
    aspectRatio: '16:9'
  },

  // Portrait Images - Mix of orientations
  {
    id: 'portrait-1',
    title: 'Portrait Session 1',
    caption: 'Professional portrait photography',
    category: 'portraits',
    imageUrl: '/images/portraits/portrait1.jpg',
    aspectRatio: '9:16'
  },
  {
    id: 'portrait-2',
    title: 'Portrait Session 2',
    caption: 'Capturing natural expressions',
    category: 'portraits',
    imageUrl: '/images/portraits/portrait2.jpg',
    aspectRatio: '16:9'
  },
  {
    id: 'portrait-3',
    title: 'Portrait Session 3',
    caption: 'Studio portrait with dramatic lighting',
    category: 'portraits',
    imageUrl: '/images/portraits/portrait3.jpg',
    aspectRatio: '9:16'
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
