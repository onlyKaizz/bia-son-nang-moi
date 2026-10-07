import React from 'react';
import { Book } from '../types';
import { QrCode, CheckCircle2, Eye, Trash2, Edit3 } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  onShowQR: (book: Book) => void;
  isAdmin: boolean;
  onToggleStatus: (book: Book) => void;
  onEditBook?: (book: Book) => void;
  onDeleteBook?: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onSelect,
  onShowQR,
  isAdmin,
  onToggleStatus,
  onEditBook,
  onDeleteBook,
}) => {
  const isSold = book.status === 'SOLD';

  return (
    <div className={`group bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col ${
      isSold ? 'border-stone-200 opacity-85' : 'border-stone-200 hover:border-amber-900/30'
    }`}>
      {/* Cover Image Container */}
      <div className="relative aspect-[3/4] w-full bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onSelect(book)}>
        <img
          src={book.cover_image_url}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Vintage Year Badge */}
        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
          Năm {book.publish_year}
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          {isSold ? (
            <span className="inline-flex items-center gap-1 bg-stone-800/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              ĐÃ BÁN
            </span>
          ) : (
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              CÒN SÁCH
            </span>
          )}
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-2 left-2 right-2">
          <span className="bg-white/90 backdrop-blur-xs text-stone-800 text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs truncate block max-w-full">
            {book.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <h3
            onClick={() => onSelect(book)}
            className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight line-clamp-2 leading-snug cursor-pointer hover:text-[#9E2A2B] transition"
            title={book.title}
          >
            {book.title}
          </h3>
          <p className="text-[11px] text-stone-500 font-medium truncate mt-0.5">
            {book.author}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-stone-100 space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] text-stone-500 font-medium">Giá quyên góp</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#9E2A2B] tracking-tight">
              {book.price.toLocaleString('vi-VN')} đ
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => onSelect(book)}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-semibold transition active:scale-95"
            >
              <Eye className="w-3 h-3 text-stone-600" />
              <span>Chi tiết</span>
            </button>

            <button
              onClick={() => onShowQR(book)}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60 text-[11px] font-semibold transition active:scale-95"
            >
              <QrCode className="w-3 h-3 text-amber-700" />
              <span>Bookmark</span>
            </button>
          </div>

          {/* Admin Toggle Button */}
          {isAdmin && (
            <button
              onClick={() => onToggleStatus(book)}
              className={`w-full py-1.5 rounded-xl text-[11px] font-bold transition flex items-center justify-center gap-1 ${
                isSold
                  ? 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isSold ? 'Đổi sang: Còn Sách' : 'Đánh dấu: ĐÃ BÁN'}
            </button>
          )}

          {/* Admin Edit Button */}
          {isAdmin && onEditBook && (
            <button
              onClick={() => onEditBook(book)}
              className="w-full py-1.5 rounded-xl text-[11px] font-bold transition flex items-center justify-center gap-1 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300"
            >
              <Edit3 className="w-3 h-3 text-stone-600" />
              Sửa sách
            </button>
          )}

          {/* Admin Delete Button */}
          {isAdmin && onDeleteBook && (
            <button
              onClick={() => {
                if (window.confirm(`Bạn có chắc muốn XÓA VĨNH VIỄN sách "${book.title}" khỏi hệ thống?`)) {
                  onDeleteBook(book);
                }
              }}
              className="w-full py-1.5 rounded-xl text-[11px] font-bold transition flex items-center justify-center gap-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200"
            >
              <Trash2 className="w-3 h-3" />
              Xóa sách
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
