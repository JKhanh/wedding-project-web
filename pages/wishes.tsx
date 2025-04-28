import { GetStaticProps } from 'next';
import Layout from '@/components/common/Layout';
import Section from '@/components/common/Section';
import WishForm, { WishFormData } from '@/components/wishes/WishForm';
import WishList from '@/components/wishes/WishList';
import Card from '@/components/common/Card';
import { getWishes } from '@/services/googleSheets';
import { Wish } from '@/types';

interface WishesPageProps {
  wishes: Wish[];
}

export default function WishesPage({ wishes }: WishesPageProps) {
  const handleSubmit = async (formData: WishFormData) => {
    try {
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Something went wrong');
    }
  };

  return (
    <Layout title="Lời chúc - Lan & Hùng">
      <Section title="Gửi lời chúc">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              Gửi lời chúc phúc của bạn đến cô dâu và chú rể
            </p>
          </div>
          
          <Card className="p-8 mb-12">
            <WishForm onSubmit={handleSubmit} />
          </Card>
        </div>
      </Section>
      
      <Section title="Lời chúc từ bạn bè và gia đình" className="bg-light">
        <WishList wishes={wishes} />
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wishes = await getWishes(true);
  
  return {
    props: {
      wishes,
    },
    revalidate: 60 * 5, // Revalidate every 5 minutes
  };
};