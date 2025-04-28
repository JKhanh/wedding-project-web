// Common types for the application
export interface ImageData {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface RSVPEntry {
  id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  isAttending: boolean;
  message?: string;
  timestamp: string;
}

export interface Wish {
  id: string;
  name: string;
  email?: string;
  message: string;
  approved: boolean;
  timestamp: string;
}

export interface LoveStoryEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}