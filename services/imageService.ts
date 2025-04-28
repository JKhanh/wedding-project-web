import { ImageData } from '@/types';

// Mock data for carousel/gallery images
export const carouselImages: ImageData[] = [
  {
    id: '1',
    src: '/images/carousel-1.jpg',
    alt: 'Cô dâu chú rể trong buổi chụp ảnh cưới ngoài trời',
    width: 1920,
    height: 1080,
    featured: true
  },
  {
    id: '2',
    src: '/images/carousel-2.jpg',
    alt: 'Cô dâu chú rể dạo bước trong công viên',
    width: 1920,
    height: 1080,
    featured: true
  },
  {
    id: '3',
    src: '/images/carousel-3.jpg',
    alt: 'Cô dâu chú rể trong giây phút hạnh phúc',
    width: 1920,
    height: 1080,
    featured: true
  },
  {
    id: '4',
    src: '/images/carousel-4.jpg',
    alt: 'Không gian tiệc cưới lãng mạn',
    width: 1920,
    height: 1080,
    featured: false
  },
  {
    id: '5',
    src: '/images/carousel-5.jpg',
    alt: 'Cô dâu chú rể trao nhau ánh nhìn yêu thương',
    width: 1920,
    height: 1080,
    featured: false
  }
];

export const galleryImages: ImageData[] = [
  ...carouselImages,
  {
    id: '6',
    src: '/images/gallery-1.jpg',
    alt: 'Ảnh cưới đen trắng',
    width: 800,
    height: 600,
    featured: false
  },
  {
    id: '7',
    src: '/images/gallery-2.jpg',
    alt: 'Cô dâu chú rể trên bãi biển',
    width: 800,
    height: 600,
    featured: false
  },
  {
    id: '8',
    src: '/images/gallery-3.jpg',
    alt: 'Khoảnh khắc trao nhẫn cưới',
    width: 800,
    height: 600,
    featured: false
  },
  {
    id: '9',
    src: '/images/gallery-4.jpg',
    alt: 'Tiệc cưới ấm cúng',
    width: 800,
    height: 600,
    featured: false
  },
  {
    id: '10',
    src: '/images/gallery-5.jpg',
    alt: 'Cô dâu chú rể nhảy trong tiệc cưới',
    width: 800,
    height: 600,
    featured: false
  }
];

export const getCarouselImages = (): ImageData[] => {
  return carouselImages.filter(img => img.featured);
};

export const getAllGalleryImages = (): ImageData[] => {
  return galleryImages;
};