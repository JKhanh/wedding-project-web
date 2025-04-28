import { GetStaticProps } from 'next';
import Layout from '@/components/common/Layout';
import Section from '@/components/common/Section';
import Timeline from '@/components/lovestory/Timeline';
import { getLoveStoryEvents } from '@/services/loveStoryService';
import { LoveStoryEvent } from '@/types';

interface LoveStoryPageProps {
  events: LoveStoryEvent[];
}

export default function LoveStoryPage({ events }: LoveStoryPageProps) {
  return (
    <Layout title="Câu chuyện tình yêu - Lan & Hùng">
      <Section title="Câu chuyện tình yêu">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg text-gray-700">
            Hành trình tình yêu của chúng mình từ những ngày đầu tiên đến lễ cưới
          </p>
        </div>
        
        <Timeline events={events} />
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const events = getLoveStoryEvents();
  
  return {
    props: {
      events,
    },
  };
};