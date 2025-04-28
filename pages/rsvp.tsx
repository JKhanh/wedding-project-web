import { useState } from 'react';
import Layout from '@/components/common/Layout';
import Section from '@/components/common/Section';
import RSVPForm, { RSVPFormData } from '@/components/rsvp/RSVPForm';
import Card from '@/components/common/Card';

export default function RSVPPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData: RSVPFormData) => {
    try {
      // In production, this would call the API
      const response = await fetch('/api/rsvp', {
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
      
      setSubmitted(true);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Something went wrong');
    }
  };

  return (
    <Layout title="RSVP - Lan & Hùng">
      <Section title="Xác nhận tham dự">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Cảm ơn bạn!</h3>
              <p className="text-lg text-gray-700">
                Thông tin của bạn đã được ghi nhận. Chúng mình rất vui mừng và mong được gặp bạn tại đám cưới!
              </p>
            </Card>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                  Xin vui lòng xác nhận việc tham dự đám cưới của chúng mình bằng cách điền vào form dưới đây.
                </p>
                <p className="text-gray-500 mt-2">
                  Hãy nhập mã xác nhận RSVP được ghi trong thiệp cưới của bạn.
                </p>
              </div>
              
              <Card className="p-8">
                <RSVPForm onSubmit={handleSubmit} />
              </Card>
            </>
          )}
        </div>
      </Section>
    </Layout>
  );
}