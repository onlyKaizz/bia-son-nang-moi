import React, { useState } from 'react';
import { Shield, Lock, X, Check, Database, Wifi } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  isBackendConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin, setIsAdmin, isBackendConnected }) => {
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1975') {
      setIsAdmin(true);
      setShowPinModal(false);
      setPin('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <header className="border-b border-amber-900/10 bg-amber-50/70 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-800 shadow-inner bg-amber-100 flex items-center justify-center">
            <img src="/MiniLogo.png" alt="Bìa Sờn Nắng Mới" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-amber-950 tracking-wide">
              Bìa Sờn Nắng Mới
            </h1>
            <p className="text-xs text-amber-800/80 font-sans tracking-wide">
              Sách cũ 1970–2000 • Tri ân Thương binh & Người có công Long Đất
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Database Status Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-amber-900/15 bg-white/70 shadow-sm">
            {isBackendConnected ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <Database className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-800 font-sans font-semibold">Database Thật (Spring Boot)</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <Wifi className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-amber-800 font-sans">Chế độ Ngoại tuyến</span>
              </>
            )}
          </div>

          {isAdmin ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 text-xs font-semibold">
              <Shield className="w-4 h-4 text-emerald-700" />
              <span>Chế độ Quản trị (Admin)</span>
              <button
                onClick={() => setIsAdmin(false)}
                className="ml-1 text-emerald-950 hover:underline"
              >
                (Thoát)
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowPinModal(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-900/10 hover:bg-amber-900/20 text-amber-950 text-xs font-medium transition"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Quản trị viên</span>
            </button>
          )}
        </div>
      </div>

      {/* Admin PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-amber-50 border border-amber-900/30 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowPinModal(false)}
              className="absolute top-4 right-4 text-amber-900/60 hover:text-amber-950"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-800/10 text-amber-900 mx-auto flex items-center justify-center mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-amber-950">Xác thực Quản trị viên</h3>
              <p className="text-xs text-amber-800/80 mt-1">
                Nhập mã PIN để mở quyền cập nhật trạng thái sách và quản lý quỹ (Mặc định: <span className="font-mono font-bold">1975</span>)
              </p>
            </div>

            <form onSubmit={handleVerifyPin} className="space-y-4">
              <div>
                <input
                  type="password"
                  maxLength={6}
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError(false);
                  }}
                  placeholder="Nhập mã PIN..."
                  className="w-full text-center tracking-widest text-lg font-mono px-4 py-2.5 rounded-xl border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                  autoFocus
                />
                {error && (
                  <p className="text-red-700 text-xs text-center mt-2">Mã PIN chưa chính xác. Vui lòng thử lại!</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-900 hover:bg-amber-950 text-amber-50 py-2.5 rounded-xl font-medium text-sm transition shadow-md"
              >
                <Check className="w-4 h-4" />
                <span>Xác nhận quyền</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
