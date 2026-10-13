import React, { useState } from 'react';
import { Heart, Landmark, CheckCircle2, Edit3, Coins, BookOpen, Sparkles, X, Check } from 'lucide-react';
import { CharityCampaign } from '../types';

interface CharityBannerProps {
  campaign: CharityCampaign;
  currentRaised: number; // Tiền bán sách
  booksSoldCount: number;
  totalBooks: number;
  isAdmin: boolean;
  onUpdateTotalFund: (newTotal: number) => void;
}

export const CharityBanner: React.FC<CharityBannerProps> = ({
  campaign,
  currentRaised,
  booksSoldCount,
  totalBooks,
  isAdmin,
  onUpdateTotalFund,
}) => {
  // Tổng quỹ hiển thị: nếu Admin đã nhập total_fund thì lấy giá trị đó, nếu chưa nhập hoặc < tiền bán sách thì mặc định ít nhất bằng tiền bán sách
  const effectiveTotalFund = Math.max(currentRaised, campaign.total_fund ?? currentRaised);
  const extraDonation = Math.max(0, effectiveTotalFund - currentRaised);

  // Tiến độ % tổng quỹ so với mục tiêu
  const totalFundPercent = Math.min(
    100,
    Math.round((effectiveTotalFund / campaign.target_amount) * 100)
  );

  // Modal / Inline Edit state cho Admin
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string>(String(effectiveTotalFund));

  const handleOpenEdit = () => {
    setInputValue(String(effectiveTotalFund));
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(inputValue.replace(/\D/g, ''), 10);
    if (!isNaN(parsed) && parsed >= 0) {
      onUpdateTotalFund(parsed);
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5ECE1] border border-[#E3D7C5] rounded-3xl p-4 sm:p-7 shadow-sm relative overflow-hidden space-y-4 sm:space-y-6">
      {/* Decorative Stamp Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 bg-[#9E2A2B] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>100% Lợi Nhuận & Quyên Góp Thiện Nguyện</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-semibold text-stone-500 bg-white/70 px-2.5 py-1 rounded-full border border-stone-200">
            Mục tiêu: {campaign.target_amount.toLocaleString('vi-VN')} đ
          </span>
          {isAdmin && (
            <button
              type="button"
              onClick={handleOpenEdit}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#9E2A2B] hover:text-white bg-white/80 hover:bg-[#9E2A2B] border border-[#9E2A2B]/40 px-2.5 py-1 rounded-full transition shadow-2xs cursor-pointer"
              title="Quản trị viên chỉnh sửa tổng quỹ thực tế"
            >
              <Edit3 className="w-3 h-3" />
              <span>Sửa Tổng Quỹ</span>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
        {/* Beneficiary Info */}
        <div className="md:col-span-5 space-y-2">
          <h2 className="text-lg sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
            {campaign.campaign_name}
          </h2>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-stone-600 font-medium">
            <Landmark className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-bold text-stone-800">Đơn vị thụ hưởng: </span>
              {campaign.beneficiary_name} — {campaign.beneficiary_address}
            </p>
          </div>
          <p className="text-xs text-stone-500 italic pt-1">
            * Toàn bộ lợi nhuận bán sách và các khoản ủng hộ từ bạn đọc đều được công khai minh bạch.
          </p>
        </div>

        {/* 2 Progress Bars Card: Tổng Quỹ Hiện Tại + Doanh Thu Bán Sách */}
        <div className="md:col-span-7 bg-white/95 backdrop-blur-xs border border-[#DFD1BE] rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
          {/* THANH 1: TỔNG QUỸ HIỆN TẠI (BAO GỒM CẢ ỦNG HỘ RIÊNG) */}
          <div className="space-y-2 pb-3 border-b border-stone-100">
            <div className="flex items-baseline justify-between flex-wrap gap-1">
              <div className="flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-[#9E2A2B]" />
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  Tổng Quỹ Hiện Tại
                </span>
                {extraDonation > 0 && (
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    +{extraDonation.toLocaleString('vi-VN')}đ ủng hộ riêng
                  </span>
                )}
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#9E2A2B] tracking-tight">
                {effectiveTotalFund.toLocaleString('vi-VN')} đ
              </span>
            </div>

            {/* Thanh tiến độ tổng quỹ */}
            <div className="w-full bg-stone-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-stone-200">
              <div
                className="bg-gradient-to-r from-amber-500 via-orange-600 to-[#9E2A2B] h-full rounded-full transition-all duration-700 ease-out shadow-xs"
                style={{ width: `${Math.max(5, totalFundPercent)}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-[11px] font-semibold text-stone-600">
              <span className="flex items-center gap-1 text-stone-500">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                (Bao gồm tiền bán sách & ủng hộ trực tiếp)
              </span>
              <span className="text-[#9E2A2B] font-bold text-xs">{totalFundPercent}% mục tiêu</span>
            </div>
          </div>

          {/* THANH 2: DOANH THU TỪ BÁN SÁCH CŨ (GIỮ NGUYÊN BẢN SỐ LIỆU TỰ ĐỘNG) */}
          <div className="space-y-1.5 pt-0.5">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-semibold text-stone-700">
                <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                Lợi nhuận từ bán sách:
              </span>
              <span className="font-bold text-stone-900">
                {currentRaised.toLocaleString('vi-VN')} đ
              </span>
            </div>

            <div className="flex justify-between text-[11px] font-medium text-stone-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Đã bán: <b className="text-stone-800">{booksSoldCount}</b>/{totalBooks} cuốn
              </span>
              <span>100% sung quỹ Long Đất</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Dialog chỉnh sửa Tổng Quỹ cho Admin */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-5 sm:p-6 w-full max-w-md shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base sm:text-lg">
                <Coins className="w-5 h-5 text-[#9E2A2B]" />
                <span>Cập Nhật Tổng Quỹ Thiện Nguyện</span>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">
                  Số tiền Tổng Quỹ Hiện Tại (VNĐ)
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, '');
                    setInputValue(raw ? Number(raw).toLocaleString('vi-VN') : '');
                  }}
                  placeholder="Nhập số tiền..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 font-bold text-lg text-[#9E2A2B] focus:outline-none focus:ring-2 focus:ring-[#9E2A2B]"
                  autoFocus
                />
                <div className="text-[11px] text-stone-500 space-y-0.5 pt-1">
                  <p>• Tiền từ bán sách hiện tại: <b>{currentRaised.toLocaleString('vi-VN')} đ</b></p>
                  <p>• Số tiền này bao gồm tiền bán sách và khoản quyên góp độc lập của các nhà hảo tâm.</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#9E2A2B] hover:bg-[#852223] shadow-xs cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  Lưu Tổng Quỹ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
