import React from 'react';
import { Heart, Landmark, TrendingUp, CheckCircle2 } from 'lucide-react';
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
    <div className="bg-[#FAF6EE] border border-[#D8C7B0] rounded-2xl p-5 md:p-6 shadow-sm mb-8 relative overflow-hidden">
      {/* Decorative vintage stamp badge */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#9E2A2B] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow border-2 border-white flex items-center gap-1">
        <Heart className="w-3.5 h-3.5 fill-white" />
        <span>100% Gây Quỹ Tri Ân</span>
      </div>

      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#9E2A2B] mb-1">
          <Landmark className="w-4 h-4" />
          <span>ĐƠN VỊ THỤ HƯỞNG CHIẾN DỊCH</span>
        </div>
        <h2 className="text-lg md:text-2xl font-serif font-bold text-[#3D2F24] mb-1">
          {campaign.beneficiary_name}
        </h2>
        <p className="text-xs md:text-sm text-[#7A6B5D] mb-4">
          Địa chỉ: {campaign.beneficiary_address}
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-baseline text-xs md:text-sm">
            <span className="font-semibold text-[#3D2F24] flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#C58940]" />
              Tiến độ gây quỹ: <strong className="text-[#9E2A2B] text-base">{currentRaised.toLocaleString('vi-VN')} đ</strong> / {campaign.target_amount.toLocaleString('vi-VN')} đ
            </span>
            <span className="font-bold text-[#9E2A2B]">{percent}%</span>
          </div>

          <div className="w-full bg-[#E8DEC8] h-3.5 rounded-full overflow-hidden p-0.5 border border-[#D8C7B0]">
            <div
              className="bg-gradient-to-r from-[#C58940] to-[#9E2A2B] h-full rounded-full transition-all duration-700 shadow-inner"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-3 border-t border-[#D8C7B0]/60 text-xs">
          <div>
            <span className="text-[#7A6B5D] block">Sách đã trao đi:</span>
            <strong className="text-sm text-[#3D2F24]">{booksSoldCount} cuốn</strong>
          </div>
          <div>
            <span className="text-[#7A6B5D] block">Sách còn trong kho:</span>
            <strong className="text-sm text-[#3D2F24]">{totalBooks - booksSoldCount} cuốn</strong>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center gap-1 text-[#9E2A2B] font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Minh bạch theo thời gian thực</span>
          </div>
        </div>
      </div>
    </div>
  );
};
