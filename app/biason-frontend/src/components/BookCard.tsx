import React from 'react';
import { Book } from '../types';
import { QrCode, CheckCircle2 } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  onShowQR: (book: Book) => void;
  isAdmin: boolean;
  onToggleStatus: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onSelect,
  onShowQR,
  isAdmin,
  onToggleStatus,
}) => {
  const isSold = book.status === 'SOLD';

  return (
    <div className={`bg-[#FDFBF7] border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col ${
      isSold ? 'border-gray-300 opacity-80' : 'border-[#D8C7B0]'
    }`}>
      {/* Book Cover Image */}
      <div className="relative h-56 bg-[#EBE4D5] overflow-hidden group cursor-pointer" onClick={() => onSelect(book)}>
        <img
          src={book.cover_image_url}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Year Badge */}
        <div className="absolute top-2 left-2 bg-[#3D2F24]/85 text-[#F6F0E6] text-[10px] font-semibold px-2 py-0.5 rounded shadow backdrop-blur">
          Năm {book.publish_year}
        </div>

        {/* Status Badge */}
        {isSold ? (
          <div className="absolute top-2 right-2 bg-gray-700/90 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
            <span>Đã bán</span>
          </div>
        ) : (
          <div className="absolute top-2 right-2 bg-[#9E2A2B] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
            {book.price.toLocaleString('vi-VN')} đ
          </div>
        )}

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-xs font-medium bg-[#3D2F24]/80 px-3 py-1.5 rounded-full backdrop-blur">
            Xem câu chuyện & trích dẫn
          </span>
        </div>
      </div>

      {/* Book Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C58940] block mb-0.5">
            {book.category}
          </span>
          <h3
            onClick={() => onSelect(book)}
            className="font-serif font-bold text-base text-[#3D2F24] hover:text-[#9E2A2B] transition cursor-pointer line-clamp-1"
          >
            {book.title}
          </h3>
          <p className="text-xs text-[#7A6B5D] mb-2">Tác giả: <strong className="text-[#3D2F24]">{book.author}</strong></p>
          <p className="text-xs text-[#543D2B] line-clamp-2 italic font-serif text-[11.5px] border-l-2 border-[#D8C7B0] pl-2 mb-3">
            "{book.quote || book.summary}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[#D8C7B0]/60 flex items-center justify-between gap-2">
          <button
            onClick={() => onShowQR(book)}
            className="flex items-center gap-1 text-xs text-[#7A6B5D] hover:text-[#9E2A2B] px-2 py-1 rounded bg-[#F6F0E6] hover:bg-[#EAE1D2] transition"
            title="In mã QR Bookmark"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mã QR</span>
          </button>

          <button
            onClick={() => onSelect(book)}
            className="flex-1 text-xs font-semibold text-center py-1.5 px-3 rounded bg-[#FAF6EE] border border-[#D8C7B0] text-[#3D2F24] hover:bg-[#9E2A2B] hover:text-white hover:border-[#9E2A2B] transition"
          >
            Chi tiết sách
          </button>

          {isAdmin && (
            <button
              onClick={() => onToggleStatus(book)}
              className={`text-xs px-2 py-1 rounded font-bold border transition ${
                isSold
                  ? 'bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200'
                  : 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200'
              }`}
              title="Đổi trạng thái bán"
            >
              {isSold ? 'Mở lại' : 'Chốt Bán'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
