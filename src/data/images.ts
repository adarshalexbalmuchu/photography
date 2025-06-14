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
  // Wildlife Images
  { id: 'wildlife-1', title: 'Elephant Close-up', category: 'wildlife', imageUrl: '/images/wildlife/1722037546362136.JPG', aspectRatio: '16:9' },
  { id: 'wildlife-2', title: 'Bird in Flight', category: 'wildlife', imageUrl: '/images/wildlife/DSC_0651.jpeg', aspectRatio: '16:9' },
  { id: 'wildlife-3', title: 'Resting Bird', category: 'wildlife', imageUrl: '/images/wildlife/DSC_0659.jpeg', aspectRatio: '16:9' },
  { id: 'wildlife-4', title: 'Detailed Bird', category: 'wildlife', imageUrl: '/images/wildlife/DSC_0682.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-5', title: 'Monkey', category: 'wildlife', imageUrl: '/images/wildlife/DSC_0853.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-6', title: 'Deer', category: 'wildlife', imageUrl: '/images/wildlife/DSC_0872.jpeg', aspectRatio: '16:9' },
  { id: 'wildlife-7', title: 'Wildlife', category: 'wildlife', imageUrl: '/images/wildlife/DSC_0996.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-8', title: 'Bird on Branch', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1120.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-9', title: 'Stork', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1166.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-10', title: 'Colorful Bird', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1173.jpg', aspectRatio: '9:16' },
  { id: 'wildlife-11', title: 'Eagle', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1183.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-12', title: 'Peacock', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1190.jpg', aspectRatio: '9:16' },
  { id: 'wildlife-13', title: 'Owl', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1208.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-14', title: 'Wild Encounter', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1215.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-15', title: 'Small Bird', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1219.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-16', title: 'Spotted Deer', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1269.jpeg', aspectRatio: '16:9' },
  { id: 'wildlife-17', title: 'Natural Beauty', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1275.jpg', aspectRatio: '9:16' },
  { id: 'wildlife-18', title: 'Wildlife Scene', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1388.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-19', title: 'Wildlife Moment', category: 'wildlife', imageUrl: '/images/wildlife/DSC_1397.jpeg', aspectRatio: '9:16' },
  { id: 'wildlife-20', title: 'Abstract Wildlife', category: 'wildlife', imageUrl: '/images/wildlife/FBF7FF7F-3582-4816-A010-FB7D4C8E9358.jpg', aspectRatio: '16:9' },
  { id: 'wildlife-21', title: 'Grazing Deer', category: 'wildlife', imageUrl: '/images/wildlife/IMG_6886.JPG', aspectRatio: '16:9' },
  { id: 'wildlife-22', title: 'Illustrated Bird', category: 'wildlife', imageUrl: '/images/wildlife/IMG_9311.PNG', aspectRatio: '1:1' }, // Assuming PNG might be square
  { id: 'wildlife-23', title: 'Tiger', category: 'wildlife', imageUrl: '/images/wildlife/IMG_9543.JPG', aspectRatio: '16:9' },
  { id: 'wildlife-24', title: 'Bear', category: 'wildlife', imageUrl: '/images/wildlife/IMG_9597.JPG', aspectRatio: '16:9' },
  { id: 'wildlife-25', title: 'Bear Cub', category: 'wildlife', imageUrl: '/images/wildlife/IMG_9599.JPG', aspectRatio: '16:9' },
  { id: 'wildlife-26', title: 'Nature\'s Drama', category: 'wildlife', imageUrl: '/images/wildlife/IMG_9611.JPG', aspectRatio: '9:16' },
  { id: 'wildlife-27', title: 'Processed Wildlife', category: 'wildlife', imageUrl: '/images/wildlife/Snapseed(2).jpg', aspectRatio: '16:9' },
  { id: 'wildlife-28', title: 'Artistic Wildlife', category: 'wildlife', imageUrl: '/images/wildlife/Snapseed(3).jpg', aspectRatio: '16:9' },
  { id: 'wildlife-29', title: 'Shared Moment', category: 'wildlife', imageUrl: '/images/wildlife/shared1.jpg', aspectRatio: '16:9' },

  // Portrait Images
  { id: 'portrait-1', title: 'About Me', category: 'portraits', imageUrl: '/images/portraits/About me.jpg', aspectRatio: '16:9' }, // Assuming landscape
  { id: 'portrait-2', title: 'Portrait Excellence', category: 'portraits', imageUrl: '/images/portraits/DSC00891.JPG', aspectRatio: '9:16' },
  { id: 'portrait-3', title: 'Character Study', category: 'portraits', imageUrl: '/images/portraits/DSC00902.JPG', aspectRatio: '16:9' },
  { id: 'portrait-4', title: 'Thoughtful Gaze', category: 'portraits', imageUrl: '/images/portraits/DSC00945.JPG', aspectRatio: '16:9' },
  { id: 'portrait-5', title: 'Human Expression', category: 'portraits', imageUrl: '/images/portraits/DSC01166.JPG', aspectRatio: '9:16' },
  { id: 'portrait-6', title: 'Portrait Art', category: 'portraits', imageUrl: '/images/portraits/DSC01167.JPG', aspectRatio: '16:9' },
  { id: 'portrait-7', title: 'Candid Portrait', category: 'portraits', imageUrl: '/images/portraits/DSC01207.JPG', aspectRatio: '16:9' },
  { id: 'portrait-8', title: 'Soft Light Portrait', category: 'portraits', imageUrl: '/images/portraits/DSC_0057.jpg', aspectRatio: '16:9' },
  { id: 'portrait-9', title: 'Outdoor Portrait', category: 'portraits', imageUrl: '/images/portraits/DSC_1408.jpg', aspectRatio: '16:9' },
  { id: 'portrait-10', title: 'Profile Shot', category: 'portraits', imageUrl: '/images/portraits/IMG_6872.JPG', aspectRatio: '9:16' },
  { id: 'portrait-11', title: 'Warm Tones', category: 'portraits', imageUrl: '/images/portraits/IMG_6873.JPG', aspectRatio: '16:9' },
  { id: 'portrait-12', title: 'Focused Look', category: 'portraits', imageUrl: '/images/portraits/IMG_6881.JPG', aspectRatio: '16:9' },
  { id: 'portrait-13', title: 'Gentle Smile', category: 'portraits', imageUrl: '/images/portraits/IMG_9552.JPG', aspectRatio: '16:9' },
  { id: 'portrait-14', title: 'Professional Shot', category: 'portraits', imageUrl: '/images/portraits/IMG_9560.JPG', aspectRatio: '9:16' },
  { id: 'portrait-15', title: 'Natural Portrait', category: 'portraits', imageUrl: '/images/portraits/IMG_9561.JPG', aspectRatio: '16:9' },
  { id: 'portrait-16', title: 'Portrait Story', category: 'portraits', imageUrl: '/images/portraits/IMG_9562.JPG', aspectRatio: '9:16' },
  { id: 'portrait-17', title: 'Classic Portrait', category: 'portraits', imageUrl: '/images/portraits/IMG_9565.JPG', aspectRatio: '16:9' },
  { id: 'portrait-18', title: 'Contemporary Art', category: 'portraits', imageUrl: '/images/portraits/IMG_9567.JPG', aspectRatio: '9:16' },
  { id: 'portrait-19', title: 'Artistic Portrait', category: 'portraits', imageUrl: '/images/portraits/Snapseed(1).jpg', aspectRatio: '16:9' },
  { id: 'portrait-20', title: 'Portrait Session', category: 'portraits', imageUrl: '/images/portraits/Snapseed.jpg', aspectRatio: '16:9' }
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
// This function might need adjustments if aspect ratios are not diverse
export const organizeImagesForLayout = (images: PortfolioImage[]): PortfolioImage[] => {
  const arrangedImages = [...images];
  const result: PortfolioImage[] = [];
  
  const landscapes = arrangedImages.filter(img => img.aspectRatio === '16:9');
  const portraits = arrangedImages.filter(img => img.aspectRatio === '9:16');
  const squares = arrangedImages.filter(img => img.aspectRatio === '1:1' || img.aspectRatio === '4:5');
  
  if (landscapes.length === 0 && portraits.length === 0 && squares.length === 0) {
    return arrangedImages; // Return original if no specific aspect ratios found
  }

  // Simple alternating pattern for now, can be made more sophisticated
  let l = 0, p = 0, s = 0;
  while(l < landscapes.length || p < portraits.length || s < squares.length) {
    if (l < landscapes.length) result.push(landscapes[l++]);
    if (p < portraits.length) result.push(portraits[p++]);
    if (p < portraits.length) result.push(portraits[p++]); // Try to pair portraits
    if (s < squares.length) result.push(squares[s++]);
  }
  
  return result.length > 0 ? result : arrangedImages; // Ensure we return something
};
