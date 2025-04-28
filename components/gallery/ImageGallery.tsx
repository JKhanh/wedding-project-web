import React from 'react';
import Image from 'next/image';
import { ImageData } from '@/types';

interface ImageGalleryProps {
  images: ImageData[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="relative overflow-hidden rounded-lg group"
        >
          <div className="aspect-w-3 aspect-h-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <p className="text-white text-sm font-medium truncate">
              {image.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;