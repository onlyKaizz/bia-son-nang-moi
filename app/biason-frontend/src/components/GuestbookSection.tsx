import React, { useState } from 'react';
import { GuestbookEntry } from '../types';
import { Send, Heart } from 'lucide-react';

interface GuestbookSectionProps {
  entries: GuestbookEntry[];
  onAddEntry: (sender_name: string, message: string) => Promise<void>;
}

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({ entries, onAddEntry }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    await onAddEntry(name.trim(), message.trim());
    setName('');
    setMessage('');
    setSubmitting(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-8 shadow-sm space-y-6">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 mb-2">
          <Heart className="w-3.5 h-3.5 text-[#9E2A2B] fill-[#9E2A2B]" />
          <span>Sổ Lưu Bút Tri Ân</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
          Gửi Lời Nhắn Đến Người Có Công
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
          Tâm tình và lời tri ân của bạn sẽ được lưu giữ trang trọng trên hệ thống để trao gửi tới các bác thương bệnh binh tại Trung tâm Long Đất.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-5 bg-stone-50 border border-stone-200/80 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-xs">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Họ tên / Lớp / Trường <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Lê Minh Hoàng (K19 FPT)"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Lời tri ân <span className="text-red-600">*</span>
            </label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Chia sẻ cảm nghĩ của bạn về những cuốn sách xưa và lòng biết ơn..."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none transition"
            />
          </div>

          {success && (
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium text-center">
              Cảm ơn bạn! Lời tri ân đã được ghi nhận vào sổ lưu bút.
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white py-2.5 rounded-xl font-semibold text-sm transition shadow-sm active:scale-98"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{submitting ? 'Đang gửi...' : 'Gửi Lời Tri Ân'}</span>
          </button>
        </form>

        {/* Entries list */}
        <div className="lg:col-span-7 space-y-3 max-h-96 overflow-y-auto pr-1">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/70 space-y-1.5 shadow-2xs hover:bg-white transition"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-900">{entry.sender_name}</span>
                <span className="text-[11px] text-stone-400 font-medium">{entry.created_at}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                "{entry.message}"
              </p>
            </div>
          ))}

          {entries.length === 0 && (
            <div className="text-center py-8 text-stone-400 text-xs">
              Chưa có lưu bút nào. Hãy là người đầu tiên gửi lời tri ân!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
