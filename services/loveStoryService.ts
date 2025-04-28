import { LoveStoryEvent } from '@/types';

// Mock data for love story events
export const loveStoryEvents: LoveStoryEvent[] = [
  {
    id: '1',
    date: '01/01/2020',
    title: 'Lần đầu gặp nhau',
    description: 'Chúng mình quen nhau trong một buổi họp nhóm ở công ty. Ánh mắt đầu tiên đã khiến trái tim rung động.',
    image: '/images/lovestory-1.jpg'
  },
  {
    id: '2',
    date: '14/02/2020',
    title: 'Buổi hẹn hò đầu tiên',
    description: 'Sau nhiều lần trò chuyện, chúng mình đã có buổi hẹn đầu tiên tại một quán cà phê nhỏ. Kể từ đó, tình yêu bắt đầu nảy nở.',
    image: '/images/lovestory-2.jpg'
  },
  {
    id: '3',
    date: '10/10/2020',
    title: 'Chuyến du lịch đầu tiên',
    description: 'Kỷ niệm 6 tháng bên nhau, chúng mình đã có chuyến du lịch đầu tiên đến Đà Lạt. Những khoảnh khắc đáng nhớ và đầy ý nghĩa.',
    image: '/images/lovestory-3.jpg'
  },
  {
    id: '4',
    date: '01/01/2021',
    title: 'Chuyển đến sống cùng nhau',
    description: 'Sau 1 năm yêu nhau, chúng mình quyết định chuyển đến sống cùng nhau. Bắt đầu hành trình xây dựng tổ ấm.',
    image: '/images/lovestory-4.jpg'
  },
  {
    id: '5',
    date: '14/02/2022',
    title: 'Lời cầu hôn',
    description: 'Trong một buổi tối lãng mạn, anh đã quỳ gối và cầu hôn. Và dĩ nhiên, em đã nói Đồng Ý!',
    image: '/images/lovestory-5.jpg'
  },
  {
    id: '6',
    date: '01/05/2023',
    title: 'Ngày đính hôn',
    description: 'Chúng mình đã tổ chức lễ đính hôn ấm cúng bên gia đình và bạn bè thân thiết.',
    image: '/images/lovestory-6.jpg'
  },
  {
    id: '7',
    date: '15/10/2023',
    title: 'Ngày cưới',
    description: 'Ngày trọng đại của chúng mình đã đến. Bắt đầu hành trình hạnh phúc trọn đời!',
    image: '/images/lovestory-7.jpg'
  }
];

export const getLoveStoryEvents = (): LoveStoryEvent[] => {
  return loveStoryEvents;
};