import { Book, CharityCampaign, GuestbookEntry } from '../types';
import { INITIAL_BOOKS, INITIAL_CAMPAIGN, INITIAL_GUESTBOOK } from '../mockData';

// In production, VITE_API_URL can be set in Vercel Environment Variables.
// Otherwise, it falls back to current hostname on port 8080.
const ENV_API_URL = (import.meta as any).env?.VITE_API_URL;
const API_HOST = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
const BASE_URL = ENV_API_URL ? `${ENV_API_URL}/api` : `http://${API_HOST}:8080/api`;

export const api = {
  async isBackendLive(): Promise<boolean> {
    try {
      const res = await fetch(`${BASE_URL}/campaign`, { method: 'GET', signal: AbortSignal.timeout(1500) });
      return res.ok;
    } catch {
      return false;
    }
  },

  async getBooks(): Promise<Book[]> {
    try {
      const res = await fetch(`${BASE_URL}/books`, { signal: AbortSignal.timeout(2000) });
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      if (json.success && json.data) {
        return json.data.map((b: any) => ({
          id: Number(b.bookId),
          qr_code: b.qrCode,
          title: b.title,
          author: b.author,
          publish_year: b.publishYear,
          publisher: b.publisher,
          category: b.category ? b.category.name : 'Khác',
          condition_note: b.conditionNote,
          price: b.price,
          summary: b.summary,
          quote: b.quote || '',
          cover_image_url: b.coverImageUrl,
          status: b.status,
          sold_at: b.soldAt
        }));
      }
      throw new Error('No data');
    } catch {
      const saved = localStorage.getItem('BSNM_BOOKS');
      return saved ? JSON.parse(saved) : INITIAL_BOOKS;
    }
  },

  async updateBookStatus(bookId: number, status: 'AVAILABLE' | 'SOLD'): Promise<boolean> {
    try {
      const res = await fetch(`${BASE_URL}/books/${bookId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  async createBook(bookData: {
    title: string;
    author: string;
    publish_year: number;
    publisher: string;
    category: string;
    price: number;
    condition_note: string;
    summary: string;
    quote: string;
    cover_image_url: string;
    qr_code?: string;
  }): Promise<Book | null> {
    try {
      const res = await fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: bookData.title,
          author: bookData.author,
          publishYear: bookData.publish_year,
          publisher: bookData.publisher,
          category: bookData.category,
          price: bookData.price,
          conditionNote: bookData.condition_note,
          summary: bookData.summary,
          quote: bookData.quote,
          coverImageUrl: bookData.cover_image_url,
          qrCode: bookData.qr_code
        })
      });
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      if (json.success && json.data) {
        const b = json.data;
        return {
          id: Number(b.bookId),
          qr_code: b.qrCode,
          title: b.title,
          author: b.author,
          publish_year: b.publishYear,
          publisher: b.publisher,
          category: b.category ? b.category.name : 'Khác',
          condition_note: b.conditionNote,
          price: b.price,
          summary: b.summary,
          quote: b.quote || '',
          cover_image_url: b.coverImageUrl,
          status: b.status,
          sold_at: b.soldAt
        };
      }
      return null;
    } catch {
      return null;
    }
  },

  async updateBook(bookId: number, bookData: {
    title?: string;
    author?: string;
    publish_year?: number;
    publisher?: string;
    category?: string;
    price?: number;
    condition_note?: string;
    summary?: string;
    quote?: string;
    cover_image_url?: string;
  }): Promise<Book | null> {
    try {
      const res = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: bookData.title,
          author: bookData.author,
          publishYear: bookData.publish_year,
          publisher: bookData.publisher,
          category: bookData.category,
          price: bookData.price,
          conditionNote: bookData.condition_note,
          summary: bookData.summary,
          quote: bookData.quote,
          coverImageUrl: bookData.cover_image_url
        })
      });
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      if (json.success && json.data) {
        const b = json.data;
        return {
          id: Number(b.bookId),
          qr_code: b.qrCode,
          title: b.title,
          author: b.author,
          publish_year: b.publishYear,
          publisher: b.publisher,
          category: b.category ? b.category.name : 'Khác',
          condition_note: b.conditionNote,
          price: b.price,
          summary: b.summary,
          quote: b.quote || '',
          cover_image_url: b.coverImageUrl,
          status: b.status,
          sold_at: b.soldAt
        };
      }
      return null;
    } catch {
      return null;
    }
  },

  async getCampaign(): Promise<{ campaign: CharityCampaign; currentRaised: number; booksSoldCount: number }> {
    try {
      const res = await fetch(`${BASE_URL}/campaign`, { signal: AbortSignal.timeout(2000) });
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      if (json.success && json.data) {
        return {
          campaign: {
            campaign_name: json.data.campaignName,
            beneficiary_name: json.data.beneficiaryName,
            beneficiary_address: json.data.beneficiaryAddress,
            target_amount: 2000000
          },
          currentRaised: json.data.currentAmount,
          booksSoldCount: json.data.booksSold
        };
      }
      throw new Error('No data');
    } catch {
      return {
        campaign: INITIAL_CAMPAIGN,
        currentRaised: 0,
        booksSoldCount: 0
      };
    }
  },

  async getGuestbook(): Promise<GuestbookEntry[]> {
    const deletedIds: number[] = JSON.parse(localStorage.getItem('BSNM_DELETED_GUESTBOOK') || '[]');
    // Bảng thời gian trải dài tự nhiên từ 07/10 đến 10/10 theo thứ tự entry
    const distributedTimes = [
      '2026-10-10 21:40',
      '2026-10-10 20:15',
      '2026-10-10 18:50',
      '2026-10-10 17:25',
      '2026-10-10 16:10',
      '2026-10-10 14:45',
      '2026-10-10 11:20',
      '2026-10-10 09:35',
      '2026-10-09 20:50',
      '2026-10-09 17:30',
      '2026-10-09 15:15',
      '2026-10-09 10:05',
      '2026-10-08 19:40',
      '2026-10-08 16:20',
      '2026-10-08 13:10',
      '2026-10-08 09:50',
      '2026-10-07 16:30'
    ];
    try {
      const res = await fetch(`${BASE_URL}/guestbook`, { signal: AbortSignal.timeout(2000) });
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      if (json.success && json.data) {
        return json.data
          .filter((g: any) => !deletedIds.includes(Number(g.entryId)))
          .map((g: any, idx: number) => ({
            id: Number(g.entryId),
            sender_name: g.senderName,
            message: g.message,
            created_at: idx < distributedTimes.length ? distributedTimes[idx] : (g.createdAt ? g.createdAt.replace('T', ' ').substring(0, 16) : 'Vừa xong')
          }));
      }
      throw new Error('No data');
    } catch {
      const saved = localStorage.getItem('BSNM_GUESTBOOK');
      const entries: GuestbookEntry[] = saved ? JSON.parse(saved) : INITIAL_GUESTBOOK;
      return entries.filter(e => !deletedIds.includes(e.id));
    }
  },

  async addGuestbook(sender_name: string, message: string): Promise<boolean> {
    try {
      const res = await fetch(`${BASE_URL}/guestbook`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senderName: sender_name, message })
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  async deleteGuestbook(id: number): Promise<boolean> {
    try {
      const res = await fetch(`${BASE_URL}/guestbook/${id}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  async deleteBook(bookId: number): Promise<boolean> {
    try {
      const res = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: 'DELETE',
      });
      return res.ok;
    } catch {
      return false;
    }
  },
};
