import React, { useState } from 'react';
import { BookStatus } from '../types';
import { CheckCircle2, ChevronDown, Filter, RotateCcw, SlidersHorizontal, X } from 'lucide-react';

export type CategoryGroupId =
  | 'ALL'
  | 'TIEU_THUYET'
  | 'TRUYEN_NGAN'
  | 'KY_SU'
  | 'THO_VAN'
  | 'LICH_SU'
  | 'KHOA_HOC';

export type PriceFilterId = 'ALL' | '25_30' | '31_35' | '36_40';

export interface FilterState {
  categoryGroup: CategoryGroupId;
  status: 'ALL' | BookStatus;
  priceRange: PriceFilterId;
}

export const CATEGORY_GROUPS: {
  id: CategoryGroupId;
  label: string;
  icon: string;
  keywords: string[];
}[] = [
  {
    id: 'ALL',
    label: 'Tất cả thể loại',
    icon: '✨',
    keywords: [],
  },
  {
    id: 'TIEU_THUYET',
    label: 'Tiểu Thuyết',
    icon: '📖',
    keywords: ['tiểu thuyết', 'trinh thám', 'phiêu lưu'],
  },
  {
    id: 'TRUYEN_NGAN',
    label: 'Truyện Ngắn & Vừa',
    icon: '📝',
    keywords: ['truyện ngắn', 'truyện vừa', 'truyện dài', 'truyện ký', 'truyện cổ', 'truyện thiếu nhi', 'truyện tranh', 'truyện'],
  },
  {
    id: 'KY_SU',
    label: 'Ký Sự & Hồi Ký',
    icon: '📜',
    keywords: ['ký sự', 'hồi ký', 'nhật ký', 'ghi chép', 'tư liệu chiến trường', 'người lính'],
  },
  {
    id: 'THO_VAN',
    label: 'Thơ Ca & Văn Học',
    icon: '🎵',
    keywords: ['thơ', 'trường ca', 'văn học', 'phê bình', 'sử thi', 'dân gian', 'văn nghệ'],
  },
  {
    id: 'LICH_SU',
    label: 'Lịch Sử & Chính Trị',
    icon: '📚',
    keywords: ['lịch sử', 'chính trị', 'chính luận', 'đổi mới', 'pháp lý', 'xã hội', 'tư liệu cách mạng'],
  },
  {
    id: 'KHOA_HOC',
    label: 'Khoa Học & Đời Sống',
    icon: '🔬',
    keywords: ['khoa học', 'giáo trình', 'toán', 'tiểu sử danh nhân', 'âm nhạc'],
  },
];

export const mapCategoryToGroup = (rawCategory: string = ''): CategoryGroupId => {
  const norm = rawCategory.toLowerCase();
  
  if (norm.includes('tiểu thuyết') || norm.includes('trinh thám')) {
    return 'TIEU_THUYET';
  }
  if (norm.includes('ký sự') || norm.includes('hồi ký') || norm.includes('nhật ký')) {
    return 'KY_SU';
  }
  if (norm.includes('thơ') || norm.includes('trường ca')) {
    return 'THO_VAN';
  }
  if (norm.includes('truyện')) {
    return 'TRUYEN_NGAN';
  }
  if (norm.includes('chính trị') || norm.includes('lịch sử') || norm.includes('chính luận') || norm.includes('đổi mới') || norm.includes('pháp lý')) {
    return 'LICH_SU';
  }
  if (norm.includes('khoa học') || norm.includes('giáo trình') || norm.includes('âm nhạc')) {
    return 'KHOA_HOC';
  }
  if (norm.includes('văn học') || norm.includes('phê bình') || norm.includes('sử thi')) {
    return 'THO_VAN';
  }
  return 'THO_VAN';
};

interface FilterBarProps {
  filter: FilterState;
  onChangeFilter: (next: FilterState) => void;
  totalFiltered: number;
  totalBooks: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onChangeFilter,
  totalFiltered,
  totalBooks,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const activeFiltersCount =
    (filter.categoryGroup !== 'ALL' ? 1 : 0) +
    (filter.status !== 'ALL' ? 1 : 0) +
    (filter.priceRange !== 'ALL' ? 1 : 0);

  const isFiltered = activeFiltersCount > 0;

  const handleReset = () => {
    onChangeFilter({
      categoryGroup: 'ALL',
      status: 'ALL',
      priceRange: 'ALL',
    });
  };

  const selectedCategoryLabel =
    CATEGORY_GROUPS.find((g) => g.id === filter.categoryGroup)?.label || '';

  return (
    <div className="space-y-2">
      {/* Nút rút gọn mở/đóng bộ lọc */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer shadow-2xs ${
              isOpen || isFiltered
                ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Bộ lọc</span>
            {activeFiltersCount > 0 && (
              <span className="inline-flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#9E2A2B] text-white text-[10px] font-bold">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Quick Active Chips khi đang đóng */}
          {!isOpen && isFiltered && (
            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              {filter.status !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200 font-medium">
                  {filter.status === 'AVAILABLE' ? 'Chưa bán' : 'Đã bán'}
                  <button
                    type="button"
                    onClick={() => onChangeFilter({ ...filter, status: 'ALL' })}
                    className="hover:text-red-600 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filter.categoryGroup !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200 font-medium">
                  {selectedCategoryLabel}
                  <button
                    type="button"
                    onClick={() =>
                      onChangeFilter({ ...filter, categoryGroup: 'ALL' })
                    }
                    className="hover:text-red-600 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filter.priceRange !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200 font-medium">
                  {filter.priceRange === '25_30'
                    ? '25k-30k'
                    : filter.priceRange === '31_35'
                    ? '31k-35k'
                    : '36k-40k'}
                  <button
                    type="button"
                    onClick={() =>
                      onChangeFilter({ ...filter, priceRange: 'ALL' })
                    }
                    className="hover:text-red-600 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
          <span>
            {totalFiltered}/{totalBooks} cuốn
          </span>
          {isFiltered && (
            <button
              onClick={handleReset}
              className="text-[#9E2A2B] hover:text-[#7f2223] underline cursor-pointer ml-1"
            >
              Xóa lọc
            </button>
          )}
        </div>
      </div>

      {/* Bảng tùy chọn mở rộng khi nhấn */}
      {isOpen && (
        <div className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-5 shadow-xs space-y-4 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2">
            <span className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#9E2A2B]" />
              Tùy chọn lọc chi tiết
            </span>
            {isFiltered && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs text-[#9E2A2B] hover:text-[#7f2223] font-medium transition cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Đặt lại tất cả</span>
              </button>
            )}
          </div>

          {/* Row 1: Tình trạng bán */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-medium text-stone-500 shrink-0 sm:w-24">
              Tình trạng:
            </span>
            <div className="inline-flex p-1 bg-stone-100/90 rounded-xl gap-1 text-xs font-medium flex-wrap">
              <button
                type="button"
                onClick={() => onChangeFilter({ ...filter, status: 'ALL' })}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter.status === 'ALL'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Tất cả
              </button>
              <button
                type="button"
                onClick={() => onChangeFilter({ ...filter, status: 'AVAILABLE' })}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter.status === 'AVAILABLE'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-emerald-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Chưa bán (Còn sách)
              </button>
              <button
                type="button"
                onClick={() => onChangeFilter({ ...filter, status: 'SOLD' })}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter.status === 'SOLD'
                    ? 'bg-stone-200 text-stone-800 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <CheckCircle2 className="w-3 h-3 text-stone-500" />
                Đã bán (Gây quỹ)
              </button>
            </div>
          </div>

          {/* Row 2: Thể loại */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
            <span className="text-xs font-medium text-stone-500 shrink-0 sm:w-24 pt-1.5">
              Thể loại:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORY_GROUPS.map((group) => {
                const isSelected = filter.categoryGroup === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() =>
                      onChangeFilter({
                        ...filter,
                        categoryGroup: group.id,
                      })
                    }
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition active:scale-95 cursor-pointer ${
                      isSelected
                        ? 'bg-[#9E2A2B] text-white font-medium shadow-xs shadow-[#9E2A2B]/20'
                        : 'bg-stone-100/80 text-stone-700 hover:bg-stone-200/70 border border-stone-200/50'
                    }`}
                  >
                    <span>{group.icon}</span>
                    <span>{group.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Mức giá */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-medium text-stone-500 shrink-0 sm:w-24">
              Mức giá:
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => onChangeFilter({ ...filter, priceRange: 'ALL' })}
                className={`px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  filter.priceRange === 'ALL'
                    ? 'border-stone-900 bg-stone-900 text-white font-medium'
                    : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                Tất cả mức giá
              </button>
              <button
                type="button"
                onClick={() => onChangeFilter({ ...filter, priceRange: '25_30' })}
                className={`px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  filter.priceRange === '25_30'
                    ? 'border-stone-900 bg-stone-900 text-white font-medium'
                    : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                25.000đ – 30.000đ
              </button>
              <button
                type="button"
                onClick={() => onChangeFilter({ ...filter, priceRange: '31_35' })}
                className={`px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  filter.priceRange === '31_35'
                    ? 'border-stone-900 bg-stone-900 text-white font-medium'
                    : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                31.000đ – 35.000đ
              </button>
              <button
                type="button"
                onClick={() => onChangeFilter({ ...filter, priceRange: '36_40' })}
                className={`px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  filter.priceRange === '36_40'
                    ? 'border-stone-900 bg-stone-900 text-white font-medium'
                    : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                36.000đ – 40.000đ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
