import { google } from 'googleapis';
import { RSVPEntry, Wish } from '@/types';

// Mock data for development without actual Google Sheets
const mockRSVPData: RSVPEntry[] = [
  {
    id: '1',
    code: 'GUEST001',
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0901234567',
    numberOfGuests: 2,
    isAttending: true,
    message: 'Chúc mừng hạnh phúc!',
    timestamp: new Date().toISOString()
  },
  {
    id: '2',
    code: 'GUEST002',
    name: 'Trần Thị B',
    email: 'tranthib@example.com',
    phone: '0909876543',
    numberOfGuests: 3,
    isAttending: true,
    timestamp: new Date().toISOString()
  },
  {
    id: '3',
    code: 'GUEST003',
    name: 'Lê Văn C',
    email: 'levanc@example.com',
    phone: '0907654321',
    numberOfGuests: 1,
    isAttending: false,
    message: 'Xin lỗi mình không thể tham dự được. Chúc mừng hạnh phúc!',
    timestamp: new Date().toISOString()
  }
];

const mockWishesData: Wish[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    message: 'Chúc hai bạn trăm năm hạnh phúc!',
    approved: true,
    timestamp: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Trần Thị B',
    email: 'tranthib@example.com',
    message: 'Chúc mừng hạnh phúc! Tình yêu trọn đời bên nhau!',
    approved: true,
    timestamp: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Lê Văn C',
    message: 'Chúc mừng đám cưới! Mong hai bạn luôn vui vẻ và hạnh phúc!',
    approved: false,
    timestamp: new Date().toISOString()
  }
];

export const getSheetsService = () => {
  // In a real implementation, this would connect to Google Sheets API
  // For now, we'll return null since we're using mock data
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error initializing Google Sheets service:', error);
    return null;
  }
};

// RSVP Functions
export const getRSVPEntries = async (): Promise<RSVPEntry[]> => {
  // In a production environment, this would fetch data from Google Sheets
  return mockRSVPData;
};

export const verifyRSVPCode = async (code: string): Promise<RSVPEntry | null> => {
  const entries = await getRSVPEntries();
  const entry = entries.find(entry => entry.code === code);
  return entry || null;
};

export const submitRSVP = async (data: Omit<RSVPEntry, 'id' | 'timestamp'>): Promise<RSVPEntry> => {
  // In a production environment, this would save to Google Sheets
  const newEntry: RSVPEntry = {
    ...data,
    id: `${mockRSVPData.length + 1}`,
    timestamp: new Date().toISOString()
  };
  
  mockRSVPData.push(newEntry);
  return newEntry;
};

// Wishes Functions
export const getWishes = async (approvedOnly = true): Promise<Wish[]> => {
  // In a production environment, this would fetch data from Google Sheets
  return approvedOnly 
    ? mockWishesData.filter(wish => wish.approved) 
    : mockWishesData;
};

export const submitWish = async (data: Omit<Wish, 'id' | 'approved' | 'timestamp'>): Promise<Wish> => {
  // In a production environment, this would save to Google Sheets
  const newWish: Wish = {
    ...data,
    id: `${mockWishesData.length + 1}`,
    approved: false,
    timestamp: new Date().toISOString()
  };
  
  mockWishesData.push(newWish);
  return newWish;
};

export const approveWish = async (id: string, approved: boolean): Promise<Wish | null> => {
  // In a production environment, this would update Google Sheets
  const index = mockWishesData.findIndex(wish => wish.id === id);
  if (index === -1) return null;
  
  mockWishesData[index].approved = approved;
  return mockWishesData[index];
};