import React from 'react';
import { ShieldCheck, QrCode } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  isAdmin: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, isAdmin }) => {
  return (
    <header className="border-b border-[#D8C7B0] bg-[#FDFBF7]/90 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/MiniLogo.png" alt="Logo" className="w-10 h-10 object-contain drop-shadow" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-serif text-[#3D2F24] tracking-tight flex items-center gap-2">
              Bìa Sờn Nắng Mới
              <span className="text-xs font-sans px-2 py-0.5 rounded bg-[#9E2A2B]/10 text-[#9E2A2B] font-semibold border border-[#9E2A2B]/30 hidden sm:inline-block">
                SSG105 • FPT University
              </span>
            </h1>
            <p className="text-xs text-[#7A6B5D] hidden md:block">
              Sách cũ 1970 – 2000 • Gây quỹ tri ân Thương binh & Người có công Long Đất
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#7A6B5D] bg-[#F6F0E6] px-3 py-1.5 rounded-full border border-[#D8C7B0]">
            <QrCode className="w-4 h-4 text-[#9E2A2B]" />
            <span>Quét QR trên bookmark để đọc câu chuyện</span>
          </div>

          <button
            onClick={onOpenAdmin}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition ${
              isAdmin
                ? 'bg-[#9E2A2B] text-white border-[#9E2A2B] shadow-sm'
                : 'bg-[#FDFBF7] text-[#543D2B] border-[#D8C7B0] hover:bg-[#F6F0E6]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isAdmin ? 'Quản Trị (Bật)' : 'Admin'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
