import React from 'react';
import { Book } from '../types';
import { X, Heart, QrCode, CheckCircle2, Calendar, Building2 } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FDFBF7] border border-[#D8C7B0] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in duration-200 relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-700 p-1.5 rounded-full shadow border border-[#D8C7B0] transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image */}
          <div className="bg-[#EBE4D5] h-64 md:h-full relative overflow-hidden flex items-center justify-center">
            <img
              src={book.cover_image_url}
              alt={book.title}
              className="w-full h-full object-cover max-h-[420px]"
            />
            <div className="absolute bottom-2 left-2 bg-[#3D2F24]/80 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur">
              Mã: {book.qr_code}
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C58940] bg-[#C58940]/10 px-2 py-0.5 rounded">
                  {book.category}
                </span>
                {isSold ? (
                  <span className="text-[11px] font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" /> Đã có chủ nhân
                  </span>
                ) : (
                  <span className="text-[11px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                    Còn sách
                  </span>
                )}
              </div>

              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#3D2F24] leading-snug mb-1">
                {book.title}
              </h2>
              <p className="text-xs text-[#7A6B5D] mb-3">Tác giả: <strong className="text-[#3D2F24]">{book.author}</strong></p>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#7A6B5D] bg-[#F6F0E6] p-2.5 rounded-lg border border-[#D8C7B0]/60 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C58940]" />
                  <span>Năm in: <strong>{book.publish_year}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C58940]" />
                  <span className="truncate">NXB: <strong>{book.publisher}</strong></span>
                </div>
              </div>

              {/* Quote */}
              {book.quote && (
                <div className="mb-4 bg-[#FAF6EE] border-l-4 border-[#9E2A2B] p-3 rounded-r text-xs italic font-serif text-[#3D2F24]">
                  "{book.quote}"
                </div>
              )}

              {/* Summary */}
              <div className="text-xs text-[#543D2B] leading-relaxed mb-4">
                <strong className="block text-[#3D2F24] mb-1 font-sans">Tóm tắt tác phẩm:</strong>
                <p className="max-h-32 overflow-y-auto pr-1">{book.summary}</p>
              </div>

              {/* Condition Note */}
              <p className="text-[11px] text-[#7A6B5D] mb-4">
                🔍 <em>Tình trạng: {book.condition_note}</em>
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[#D8C7B0]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#7A6B5D]">Giá bán gây quỹ:</span>
                <span className="text-xl font-bold font-serif text-[#9E2A2B]">
                  {book.price.toLocaleString('vi-VN')} đ
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onShowQR(book)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#FAF6EE] hover:bg-[#EAE1D2] border border-[#D8C7B0] text-xs font-semibold text-[#3D2F24] transition"
                >
                  <QrCode className="w-4 h-4 text-[#9E2A2B]" />
                  <span>In Bookmark</span>
                </button>

                {isAdmin ? (
                  <button
                    onClick={() => onToggleStatus(book)}
                    className={`flex-1 py-2 px-4 rounded-lg text-xs font-bold transition shadow ${
                      isSold
                        ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                        : 'bg-green-700 hover:bg-green-800 text-white'
                    }`}
                  >
                    {isSold ? 'Đổi lại Còn Sách' : 'Xác Nhận Đã Bán (+ Vào Quỹ)'}
                  </button>
                ) : (
                  <div className="flex-1 text-center py-2 px-3 rounded-lg bg-[#9E2A2B]/10 border border-[#9E2A2B]/30 text-[#9E2A2B] text-xs font-bold flex items-center justify-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#9E2A2B]" />
                    <span>Mua trực tiếp tại bàn SSG105</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
