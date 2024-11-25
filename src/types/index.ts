export interface Card {
  id: string;
  code: string;
  title: string;
  origin: {
    name: string;
    address: string;
    city: string;
    state: string;
    coordinates?: [number, number];
  };
  destination: {
    name: string;
    address: string;
    city: string;
    state: string;
    coordinates?: [number, number];
  };
  status: string;
  type: string;
  weight: number;
  volume: number;
  value: number;
  stops: Stop[];
  documents: Document[];
  vehicle: {
    type: string;
    bodywork: string[];
  };
  dates: {
    pickup: Date;
    delivery: Date;
  };
  tags: string[];
  chat: ChatMessage[];
  product?: {
    name: string;
    description: string;
    requirements?: string[];
  };
  driver?: {
    name: string;
    phone: string;
    rating: number;
    trips: number;
    badge: string;
  };
}

export interface Stop {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  date: Date;
  documents: string[];
  status: 'pending' | 'completed';
  coordinates?: [number, number];
}

export interface Document {
  id: string;
  number: string;
  type: string;
  notes: string;
  date: Date;
  files: {
    name: string;
    url: string;
  }[];
}

export interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  type: 'text' | 'image' | 'document';
  fileUrl?: string;
}