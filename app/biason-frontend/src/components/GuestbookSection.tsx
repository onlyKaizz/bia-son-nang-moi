import React, { useState } from 'react';
import { GuestbookEntry } from '../types';
import { MessageSquareHeart, Send } from 'lucide-react';

interface GuestbookSectionProps {
  entries: GuestbookEntry[];
  onAddEntry: (name: string, message: string) => void;
}

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({ entries, onAddEntry }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    onAddEntry(name.trim(), message.trim());
    setName('');
    setMessage('');
  };

  return (
    <section className="mt-12 bg-[#FAF6EE] border border-[#D8C7B0] rounded-2xl p-5 md:p-8 shadow-sm">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquareHeart className="w-5 h-5 text-[#9E2A2B]" />
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#3D2F24]">
            Sổ Lưu Bút Tri Ân
          </h2>
        </div>
        <p className="text-xs md:text-sm text-[#7A6B5D] mb-6">
          Hãy để lại đôi dòng cảm xúc khi cầm cuốn sách xưa, hoặc một lời chúc tốt đẹp gửi tới các cô chú thương bệnh binh tại Trung tâm Long Đất.
        </p>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="bg-[#FDFBF7] p-4 rounded-xl border border-[#D8C7B0] shadow-sm mb-6 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-[#543D2B] mb-1">Tên hoặc Nickname của bạn:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Hoàng Nam (K18 FPT)"
              className="w-full text-xs md:text-sm px-3 py-2 rounded-lg bg-[#FAF6EE] border border-[#D8C7B0] focus:outline-none focus:border-[#9E2A2B]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#543D2B] mb-1">Lời nhắn gửi tri ân:</label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Chia sẻ suy nghĩ của bạn..."
              className="w-full text-xs md:text-sm px-3 py-2 rounded-lg bg-[#FAF6EE] border border-[#D8C7B0] focus:outline-none focus:border-[#9E2A2B]"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-1.5 text-xs font-semibold bg-[#9E2A2B] hover:bg-[#802223] text-white px-4 py-2 rounded-lg shadow transition"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Gửi Vào Sổ Lưu Bút</span>
          </button>
        </form>

        {/* List of Messages */}
        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
          {entries.map((entry) => (
            <div key={entry.id} className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#D8C7B0]/70 text-xs">
              <div className="flex justify-between items-baseline mb-1">
                <strong className="text-[#9E2A2B] font-semibold">{entry.sender_name}</strong>
                <span className="text-[10px] text-[#7A6B5D]">{entry.created_at}</span>
              </div>
              <p className="text-[#3D2F24] font-serif italic text-[11.5px] leading-relaxed">
                "{entry.message}"
              </p>
              {entry.book_title && (
                <span className="inline-block mt-1 text-[10px] text-[#C58940] bg-[#C58940]/10 px-2 py-0.5 rounded">
                  Sách: {entry.book_title}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
