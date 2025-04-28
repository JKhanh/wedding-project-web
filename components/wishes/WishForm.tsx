import React, { useState } from 'react';
import Button from '../common/Button';

interface WishFormProps {
  onSubmit: (formData: WishFormData) => Promise<void>;
}

export interface WishFormData {
  name: string;
  email?: string;
  message: string;
}

const WishForm: React.FC<WishFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<WishFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      await onSubmit(formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-medium text-green-800 mb-2">Cảm ơn bạn!</h3>
        <p className="text-green-700">
          Lời chúc của bạn đã được gửi thành công. Chúng mình sẽ xem xét và hiển thị sớm nhất có thể.
        </p>
        <Button
          variant="secondary"
          className="mt-4"
          onClick={() => setIsSubmitted(false)}
        >
          Gửi lời chúc khác
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Họ và tên
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email (không bắt buộc)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Lời chúc của bạn
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          placeholder="Hãy gửi lời chúc phúc đến cô dâu và chú rể..."
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <div>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? 'Đang gửi...' : 'Gửi lời chúc'}
        </Button>
      </div>
    </form>
  );
};

export default WishForm;