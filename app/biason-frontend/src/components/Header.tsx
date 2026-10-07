import { createPortal } from 'react-dom';
import React, { useState } from 'react';
import { Shield, Lock, X, Check, LogOut } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  isBackendConnected?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin, setIsAdmin, isBackendConnected }) => {
  const [showPinModal, setShowPinModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password === '12345') {
      setIsAdmin(true);
      setShowPinModal(false);
      setUsername('');
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        {/* Brand identity - Large logo with UI text */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src="/Logo.png"
            alt="Logo Bìa Sờn Nắng Mới"
            className="h-10 sm:h-14 w-auto object-contain shrink-0"
          />
          <h1 className="text-base sm:text-xl font-bold text-stone-900 tracking-tight leading-tight whitespace-nowrap">
            Bìa Sờn Nắng Mới
          </h1>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Database Connection Status Indicator */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border transition ${
              isBackendConnected
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}
            title={
              isBackendConnected
                ? 'Đã kết nối trực tiếp cơ sở dữ liệu backend'
                : 'Đang chạy chế độ offline / lưu trình duyệt tạm thời (chưa kết nối backend DB)'
            }
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isBackendConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <span className="hidden sm:inline">
              {isBackendConnected ? 'Database: Đã kết nối' : 'Database: Chưa kết nối'}
            </span>
            <span className="sm:hidden">
              {isBackendConnected ? 'DB Live' : 'DB Offline'}
            </span>
          </div>

          {/* Admin Toggle */}
          {isAdmin ? (
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-semibold">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Quản Trị Viên</span>
              <button
                onClick={() => setIsAdmin(false)}
                className="ml-1 text-emerald-900 hover:text-red-700 flex items-center gap-1 p-0.5 rounded transition"
                title="Đăng xuất quản trị"
              >
                <LogOut className="w-3 h-3" />
                <span className="sm:hidden">Thoát</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowPinModal(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-[11px] sm:text-xs font-semibold shadow-xs transition active:scale-95"
            >
              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Quản trị</span>
            </button>
          )}
        </div>
      </div>

      {/* Admin Login Modal with createPortal to escape sticky header */}
      {showPinModal && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto">
          <div className="bg-white border border-stone-200 rounded-3xl max-w-sm w-full p-6 shadow-2xl relative my-auto">
            <button
              onClick={() => {
                setShowPinModal(false);
                setError(false);
                setUsername('');
                setPassword('');
              }}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 mx-auto flex items-center justify-center mb-2.5 shadow-xs">
                <Shield className="w-6 h-6 text-stone-800" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 tracking-tight">Đăng Nhập Quản Trị</h3>
              <p className="text-xs text-stone-500 mt-1">
                Khu vực dành riêng cho ban quản lý dự án Bìa Sờn Nắng Mới
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Tài khoản</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError(false);
                  }}
                  placeholder="Nhập tên tài khoản..."
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 transition"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Mật khẩu</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Nhập mật khẩu..."
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 transition"
                />
              </div>

              {error && (
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-medium">
                  Tài khoản hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại!
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#9E2A2B] hover:bg-[#852223] text-white py-2.5 rounded-xl font-semibold text-sm transition shadow-sm active:scale-98 mt-2"
              >
                <Check className="w-4 h-4" />
                <span>Xác nhận đăng nhập</span>
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
