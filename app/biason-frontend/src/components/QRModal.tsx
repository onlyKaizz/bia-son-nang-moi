import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Book } from '../types';
import { X, Printer, Heart } from 'lucide-react';

interface QRModalProps {
  book: Book;
  onClose: () => void;
}

export const QRModal: React.FC<QRModalProps> = ({ book, onClose }) => {
  const [qrUrl, setQrUrl] = useState<string>('');

  useEffect(() => {
    // Generate QR pointing to book's hash route
    const targetUrl = `${window.location.origin}${window.location.pathname}#${book.qr_code}`;
    QRCode.toDataURL(targetUrl, {
      width: 260,
      margin: 1,
      color: {
        dark: '#3D2F24',
        light: '#FFFFFF'
      }
    }).then(setQrUrl);
  }, [book]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FDFBF7] border border-[#D8C7B0] rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Bookmark Printable Card Preview */}
        <div className="border-2 border-dashed border-[#C58940] rounded-xl p-4 bg-[#FAF6EE] shadow-inner mb-4">
          <div className="flex items-center justify-center gap-1.5 text-xs font-serif font-bold text-[#9E2A2B] uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#9E2A2B]" />
            <span>Bìa Sờn Nắng Mới</span>
          </div>

          <h3 className="font-serif font-bold text-sm text-[#3D2F24] line-clamp-1 mb-0.5">
            {book.title}
          </h3>
          <p className="text-[11px] text-[#7A6B5D] mb-3">{book.author} ({book.publish_year})</p>

          <div className="bg-white p-2.5 rounded-lg border border-[#D8C7B0] inline-block shadow-sm mb-3">
            {qrUrl && <img src={qrUrl} alt={book.title} className="w-44 h-44 object-contain" />}
          </div>

          <p className="text-[10px] text-[#7A6B5D] leading-tight">
            Quét mã để đọc câu chuyện cuốn sách & hành trình ủng hộ Trung tâm Thương binh Long Đất
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#9E2A2B] hover:bg-[#802223] text-white text-xs font-semibold shadow transition"
          >
            <Printer className="w-4 h-4" />
            <span>In Bookmark Này</span>
          </button>
          <button
            onClick={onClose}
            className="py-2 px-3 rounded-lg border border-[#D8C7B0] text-xs font-semibold text-[#7A6B5D] hover:bg-[#F6F0E6]"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
