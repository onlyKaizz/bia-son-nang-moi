export type BookStatus = 'AVAILABLE' | 'SOLD';

export interface Book {
  id: number;
  qr_code: string;
  title: string;
  author: string;
  publish_year: number;
  publisher: string;
  category: string;
  price: number;
  condition_note: string;
  summary: string;
  quote?: string;
  cover_image_url: string;
  status: BookStatus;
  sold_at?: string;
}

export interface GuestbookEntry {
  id: number;
  sender_name: string;
  message: string;
  created_at: string;
  book_title?: string;
}

export interface CharityCampaign {
  campaign_name: string;
  beneficiary_name: string;
  beneficiary_address: string;
  target_amount: number;
}
