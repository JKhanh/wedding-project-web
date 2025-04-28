import { GetStaticProps } from 'next';
import Layout from '@/components/common/Layout';
import Section from '@/components/common/Section';
import ImageGallery from '@/components/gallery/ImageGallery';
import { getAllGalleryImages } from '@/services/imageService';
import { ImageData } from '@/types';

interface GalleryPageProps {
  images: ImageData[];
}

export default function GalleryPage({ images }: GalleryPageProps) {
  return (
    <Layout title="Album ảnh - Lan & Hùng">
      <Section title="Album ảnh cưới">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-700">
            Những khoảnh khắc đẹp nhất trong ngày cưới và buổi chụp ảnh của chúng mình
          </p>
        </div>
        
        <ImageGallery images={images} />
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const images = getAllGalleryImages();
  
  return {
    props: {
      images,
    },
  };
};