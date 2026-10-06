import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Book } from '../types';
import { X, Printer, Heart } from 'lucide-react';

interface QRModalProps {
  book: Book;
  onClose: () => void;
}

export const QRModal: React.FC<QRModalProps> = ({ book, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // URL encoded for bookmark
    const currentOrigin = window.location.origin;
    const targetUrl = `${currentOrigin}/#book-${book.qr_code}`;
    
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, targetUrl, {
        width: 150,
        margin: 1,
        color: {
          dark: '#2A1B12',
          light: '#FDFBF7',
        },
      });
    }
  }, [book]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-stone-900 tracking-tight">Thẻ Đánh Dấu Sách (Bookmark)</h3>
          <p className="text-xs text-stone-500 mt-0.5">Kẹp trực tiếp vào sách thật để người mua quét mã</p>
        </div>

        {/* Vintage Physical Bookmark Simulation */}
        <div className="w-56 bg-[#FAF6EE] border-2 border-[#D8C7B0] rounded-2xl p-4 shadow-md flex flex-col items-center text-center space-y-3 relative overflow-hidden">
          {/* Top Hole for Ribbon */}
          <div className="w-4 h-4 rounded-full border border-stone-400 bg-stone-200/80 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-stone-200 p-0.5 flex items-center justify-center shadow-xs">
            <img src="/Logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>

          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#9E2A2B]">
              Bìa Sờn Nắng Mới
            </div>
            <div className="text-[10px] text-stone-500 font-medium">Sách cũ 1970–2000</div>
          </div>

          {/* Canvas QR Code */}
          <div className="p-2 bg-white rounded-xl border border-stone-200 shadow-xs">
            <canvas ref={canvasRef} className="rounded-lg"></canvas>
          </div>

          <div className="space-y-0.5">
            <div className="text-[11px] font-bold text-stone-900 leading-tight line-clamp-1">
              {book.title}
            </div>
            <div className="text-[10px] font-mono text-stone-500">Mã: {book.qr_code}</div>
          </div>

          <div className="text-[9px] text-[#9E2A2B] font-semibold border-t border-stone-200/80 pt-2 flex items-center justify-center gap-1">
            <Heart className="w-2.5 h-2.5 fill-[#9E2A2B]" />
            <span>Tri ân TTĐDTB Long Đất</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-5 flex gap-2.5">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-stone-200 text-stone-700 font-semibold text-xs sm:text-sm hover:bg-stone-50 transition"
          >
            Đóng
          </button>
          <button
            onClick={handlePrint}
            className="flex-1 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
          >
            <Printer className="w-4 h-4" />
            <span>In Bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
};
