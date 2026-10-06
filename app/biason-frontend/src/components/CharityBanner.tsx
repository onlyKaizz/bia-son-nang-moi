import React from 'react';
import { Heart, Landmark, CheckCircle2 } from 'lucide-react';
import { CharityCampaign } from '../types';

interface CharityBannerProps {
  campaign: CharityCampaign;
  currentRaised: number;
  booksSoldCount: number;
  totalBooks: number;
}

export const CharityBanner: React.FC<CharityBannerProps> = ({
  campaign,
  currentRaised,
  booksSoldCount,
  totalBooks,
}) => {
  const percent = Math.min(100, Math.round((currentRaised / campaign.target_amount) * 100));

  return (
    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5ECE1] border border-[#E3D7C5] rounded-3xl p-4 sm:p-7 shadow-sm relative overflow-hidden">
      {/* Decorative Stamp Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
        <div className="inline-flex items-center gap-1.5 bg-[#9E2A2B] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>100% Lợi Nhuận Thiện Nguyện</span>
        </div>
        <span className="text-[11px] sm:text-xs font-semibold text-stone-500 bg-white/70 px-2.5 py-1 rounded-full border border-stone-200">
          Mục tiêu: {campaign.target_amount.toLocaleString('vi-VN')} đ
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
        {/* Beneficiary Info */}
        <div className="md:col-span-7 space-y-1.5">
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
        </div>

        {/* Progress Stats Card */}
        <div className="md:col-span-5 bg-white/90 backdrop-blur-xs border border-[#DFD1BE] rounded-2xl p-3.5 sm:p-4 shadow-xs space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold text-stone-500">Đã gây quỹ</span>
            <span className="text-lg sm:text-2xl font-extrabold text-[#9E2A2B] tracking-tight">
              {currentRaised.toLocaleString('vi-VN')} đ
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden p-0.5 border border-stone-200">
              <div
                className="bg-gradient-to-r from-amber-600 to-[#9E2A2B] h-full rounded-full transition-all duration-700 ease-out shadow-xs"
                style={{ width: `${Math.max(5, percent)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-stone-600">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Đã bán: <b className="text-stone-900">{booksSoldCount}</b>/{totalBooks} cuốn
              </span>
              <span className="text-[#9E2A2B] font-bold">{percent}% tiến độ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
