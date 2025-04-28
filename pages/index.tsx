import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/components/common/Layout';
import Carousel from '@/components/gallery/Carousel';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { getCarouselImages } from '@/services/imageService';
import { getWishes } from '@/services/googleSheets';
import { ImageData, Wish } from '@/types';

interface HomeProps {
  carouselImages: ImageData[];
  featuredWishes: Wish[];
}

export default function Home({ carouselImages, featuredWishes }: HomeProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <Carousel images={carouselImages} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Lan & Hùng</h1>
          <p className="text-xl md:text-2xl">15.10.2023</p>
        </div>
      </section>
      
      {/* Invitation Section */}
      <Section title="Save the Date" className="bg-light">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            Thân mời bạn đến dự lễ cưới của chúng mình vào ngày 15 tháng 10 năm 2023 
            tại Trung tâm Tiệc cưới ABC, 123 Đường XYZ, Quận ABC, TP. HCM.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/rsvp">
              <Button variant="primary" size="lg">
                Xác nhận tham dự
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                Xem album ảnh
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      
      {/* Countdown Section */}
      <Section title="Countdown" className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            Đếm ngược đến ngày trọng đại của chúng mình!
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-primary text-white p-4 rounded-lg">
              <div className="text-4xl font-bold">00</div>
              <div className="text-sm">Ngày</div>
            </div>
            <div className="bg-primary text-white p-4 rounded-lg">
              <div className="text-4xl font-bold">00</div>
              <div className="text-sm">Giờ</div>
            </div>
            <div className="bg-primary text-white p-4 rounded-lg">
              <div className="text-4xl font-bold">00</div>
              <div className="text-sm">Phút</div>
            </div>
            <div className="bg-primary text-white p-4 rounded-lg">
              <div className="text-4xl font-bold">00</div>
              <div className="text-sm">Giây</div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Featured Wishes Section */}
      <Section title="Lời chúc" className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWishes.map((wish) => (
            <Card key={wish.id} className="h-full">
              <div className="p-6">
                <p className="text-gray-700 mb-4 italic">"{wish.message}"</p>
                <div className="mt-4">
                  <p className="font-medium text-dark">{wish.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/wishes">
            <Button variant="primary">
              Xem tất cả lời chúc
            </Button>
          </Link>
        </div>
      </Section>
      
      {/* Love Story Preview */}
      <Section title="Câu chuyện tình yêu" className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            Hành trình tình yêu của chúng mình bắt đầu từ một cuộc gặp gỡ tình cờ...
          </p>
          <Link href="/lovestory">
            <Button variant="primary">
              Khám phá câu chuyện
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const carouselImages = getCarouselImages();
  const allWishes = await getWishes(true);
  const featuredWishes = allWishes.slice(0, 3);
  
  return {
    props: {
      carouselImages,
      featuredWishes,
    },
    revalidate: 60 * 10, // Revalidate every 10 minutes
  };
};