import React from 'react';
import { Wish } from '@/types';
import Card from '../common/Card';

interface WishListProps {
  wishes: Wish[];
}

const WishList: React.FC<WishListProps> = ({ wishes }) => {
  if (wishes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Chưa có lời chúc nào được hiển thị.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishes.map((wish) => (
        <Card key={wish.id} className="h-full">
          <div className="p-6">
            <p className="text-gray-700 mb-4 italic">"{wish.message}"</p>
            <div className="mt-4 flex justify-between items-center">
              <p className="font-medium text-dark">{wish.name}</p>
              <p className="text-xs text-gray-500">
                {new Date(wish.timestamp).toLocaleDateString('vi-VN')}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WishList;