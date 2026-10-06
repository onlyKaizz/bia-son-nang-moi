import React from 'react';
import { Book } from '../types';
import { X, Heart, QrCode, CheckCircle2, Calendar, Building2, BookOpen } from 'lucide-react';

interface BookDetailModalProps {
  book: Book;
  onClose: () => void;
  onShowQR: (book: Book) => void;
  isAdmin: boolean;
  onToggleStatus: (book: Book) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  onShowQR,
  isAdmin,
  onToggleStatus,
}) => {
  const isSold = book.status === 'SOLD';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-0 sm:my-8 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-500 hover:text-stone-900 shadow-sm border border-stone-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 p-5 sm:p-7 gap-5 sm:gap-7">
          {/* Left Column: Cover & Badge */}
          <div className="md:col-span-2 space-y-4">
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md bg-stone-100 border border-stone-200 relative">
              <img
                src={book.cover_image_url}
                alt={book.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                {isSold ? (
                  <span className="bg-stone-800 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                    ĐÃ BÁN
                  </span>
                ) : (
                  <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                    CÒN SÁCH
                  </span>
                )}
              </div>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-3.5 text-xs text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-900">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Tình trạng phục chế</span>
              </div>
              <p className="text-amber-800 font-medium leading-relaxed">{book.condition_note}</p>
            </div>
          </div>

          {/* Right Column: Details & Quote */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold text-[#9E2A2B] uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded-md">
                  {book.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-1.5 leading-snug">
                  {book.title}
                </h2>
                <p className="text-sm text-stone-600 font-semibold mt-0.5">
                  Tác giả: <span className="text-stone-900">{book.author}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-stone-500 font-medium py-2 border-y border-stone-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  Năm {book.publish_year}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-stone-400" />
                  {book.publisher}
                </span>
              </div>

              {/* Historical Context / Summary */}
              <div>
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wide mb-1">
                  Ý nghĩa & Câu chuyện tác phẩm
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {book.summary}
                </p>
              </div>

              {/* Inspirational Quote */}
              {book.quote && (
                <div className="border-l-4 border-[#9E2A2B] pl-3.5 py-1 bg-stone-50 rounded-r-xl">
                  <p className="text-xs sm:text-sm text-stone-800 italic leading-relaxed font-medium">
                    "{book.quote}"
                  </p>
                </div>
              )}
            </div>

            {/* Price & Action Footer */}
            <div className="pt-3 border-t border-stone-100 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 block font-medium">Giá bán đóng góp</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#9E2A2B] tracking-tight">
                    {book.price.toLocaleString('vi-VN')} đ
                  </span>
                </div>
                <div className="text-right text-[11px] text-stone-500">
                  <Heart className="w-4 h-4 text-[#9E2A2B] inline mr-1 fill-[#9E2A2B]" />
                  <span>100% ủng hộ TT Long Đất</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onShowQR(book)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition shadow-sm active:scale-98"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Xem Thẻ Bookmark</span>
                </button>

                {isAdmin && (
                  <button
                    onClick={() => onToggleStatus(book)}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                      isSold
                        ? 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isSold ? 'Mở bán lại' : 'Đã bán'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
