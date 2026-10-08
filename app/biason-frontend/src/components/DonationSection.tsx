import React, { useState } from 'react';
import { QrCode, Copy, Check, HeartHandshake, ShieldCheck } from 'lucide-react';

export const DonationSection: React.FC = () => {
  const [copiedAcc, setCopiedAcc] = useState(false);

  const bankInfo = {
    bankName: 'Vietcombank (Ngân hàng TMCP Ngoại thương Việt Nam)',
    accountNumber: '1042323184',
    accountHolder: 'TRAN GIA HY',
    branch: 'Vietcombank',
    note: 'Quyen gop Bia Son Nang Moi',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankInfo.accountNumber);
    setCopiedAcc(true);
    setTimeout(() => setCopiedAcc(false), 2000);
  };

  return (
    <section className="bg-gradient-to-br from-amber-50/70 via-white to-stone-50 border border-amber-200/80 rounded-3xl p-5 sm:p-8 shadow-sm">
      <div className="max-w-3xl mb-6">
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300 mb-2">
          <HeartHandshake className="w-3.5 h-3.5 text-[#9E2A2B]" />
          <span>Ủng Hộ & Quyên Góp Minh Bạch</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
          Mã QR Quyên Góp & Đồng Hành Cùng Dự Án
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
          Mọi khoản ủng hộ và tiền mua sách được chuyển trực tiếp vào tài khoản dự án, công khai và chuyển giao 100% tới Trung tâm Điều dưỡng Thương binh và Người có công Long Đất.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-7 shadow-xs">
        {/* Cột hiển thị hình ảnh QR cận cảnh, to rõ nét */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-stone-50/90 rounded-2xl border border-stone-200">
          <div className="w-64 sm:w-72 max-w-full rounded-2xl overflow-hidden shadow-md border-2 border-stone-100 bg-white p-2">
            <img
              src="/qr-donation.png"
              alt="Mã QR Vietcombank - TRAN GIA HY - 1042323184"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <span className="text-xs text-stone-600 font-semibold mt-3 flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-stone-200 shadow-2xs">
            <QrCode className="w-3.5 h-3.5 text-[#9E2A2B]" /> Quét mã nhanh qua App Ngân hàng / Napas 247
          </span>
        </div>

        {/* Cột thông tin chi tiết người nhận & tài khoản */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold w-fit">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Tài khoản chính thức của đại diện dự án</span>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
              <span className="text-xs text-stone-500 font-medium block mb-0.5">Ngân hàng thụ hưởng</span>
              <span className="text-sm sm:text-base font-bold text-stone-900">{bankInfo.bankName}</span>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
              <span className="text-xs text-stone-500 font-medium block mb-0.5">Chủ tài khoản (Người nhận)</span>
              <span className="text-base sm:text-lg font-black text-stone-900 tracking-wide">{bankInfo.accountHolder}</span>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/70 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 font-medium block mb-0.5">Số tài khoản</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-[#9E2A2B] tracking-wider">{bankInfo.accountNumber}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white transition active:scale-95 shadow-xs cursor-pointer"
              >
                {copiedAcc ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép STK</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
