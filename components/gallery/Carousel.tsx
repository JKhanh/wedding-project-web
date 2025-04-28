import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { ImageData } from '@/types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="relative">
      <ResponsiveCarousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        className="rounded-lg overflow-hidden"
      >
        {images.map((image) => (
          <div key={image.id} className="relative h-[70vh]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-8 left-0 right-0 text-white text-center text-lg font-medium px-4">
              {image.alt}
            </p>
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;