import { Book, CharityCampaign, GuestbookEntry } from '../types';
import { INITIAL_BOOKS, INITIAL_CAMPAIGN, INITIAL_GUESTBOOK } from '../mockData';

const BASE_URL = 'http://localhost:8080/api';

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
            target_amount: json.data.targetAmount
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
    try {
      const res = await fetch(`${BASE_URL}/guestbook`, { signal: AbortSignal.timeout(2000) });
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      if (json.success && json.data) {
        return json.data.map((g: any) => ({
          id: Number(g.entryId),
          sender_name: g.senderName,
          message: g.message,
          created_at: g.createdAt ? g.createdAt.replace('T', ' ').substring(0, 16) : 'Vừa xong'
        }));
      }
      throw new Error('No data');
    } catch {
      const saved = localStorage.getItem('BSNM_GUESTBOOK');
      return saved ? JSON.parse(saved) : INITIAL_GUESTBOOK;
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
  }
};
