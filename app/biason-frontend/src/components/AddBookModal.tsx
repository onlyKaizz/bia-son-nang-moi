import React, { useState, useRef } from 'react';
import { X, Plus, ImagePlus } from 'lucide-react';

interface AddBookModalProps {
  onClose: () => void;
  onAddBook: (bookData: {
    title: string;
    author: string;
    publish_year: number;
    publisher: string;
    category: string;
    price: number;
    condition_note: string;
    summary: string;
    quote: string;
    cover_image_url: string;
    qr_code?: string;
  }) => Promise<void>;
}

export const AddBookModal: React.FC<AddBookModalProps> = ({ onClose, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState<number>(1985);
  const [publisher, setPublisher] = useState('NXB Hội Nhà Văn');
  const [price, setPrice] = useState<number>(30000);
  const [conditionNote, setConditionNote] = useState('Bìa sờn nguyên bản, gáy đóng chỉ phục chế');
  const [summary, setSummary] = useState('');
  const [quote, setQuote] = useState('');
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh (JPEG, PNG, WebP...)');
      return;
    }

    // Read and resize image
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 800;
        let width = img.width;
        let height = img.height;

        if (width > MAX_SIZE || height > MAX_SIZE) {
          if (width > height) {
            height = Math.round((height * MAX_SIZE) / width);
            width = MAX_SIZE;
          } else {
            width = Math.round((width * MAX_SIZE) / height);
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
          setCoverPreview(dataUrl);
        }
      };
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const finalCover = coverPreview || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600';

    setIsSubmitting(true);
    await onAddBook({
      title: title.trim(),
      author: author.trim(),
      publish_year: Number(publishYear),
      publisher: publisher.trim(),
      category: 'Sách Cũ Phục Chế',
      price: Number(price),
      condition_note: conditionNote.trim(),
      summary: summary.trim() || 'Tác phẩm văn học quý giá thời kỳ 1970 - 2000.',
      quote: quote.trim(),
      cover_image_url: finalCover,
    });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
              <Plus className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900 tracking-tight">Thêm Sách Cũ Vào Kho</h3>
              <p className="text-xs text-stone-500">Phục chế và số hóa sách</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Tên tác phẩm <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ví dụ: Rừng Xà Nu"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Tác giả <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Ví dụ: Nguyễn Trung Thành"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Năm XB</label>
              <input
                type="number"
                min={1900}
                max={2026}
                value={publishYear}
                onChange={(e) => setPublishYear(Number(e.target.value))}
                className="w-full text-sm px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Giá bán (VND)</label>
              <input
                type="number"
                step={5000}
                min={20000}
                max={100000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full text-sm px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Nhà xuất bản</label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                placeholder="Ví dụ: NXB Văn Học"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Tình trạng bìa phục chế</label>
              <input
                type="text"
                value={conditionNote}
                onChange={(e) => setConditionNote(e.target.value)}
                placeholder="Ví dụ: Bìa sờn mép, gáy tốt"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>
          </div>

          {/* Image Picker - Works with phone gallery */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">Ảnh bìa sách</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {coverPreview ? (
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-50">
                <img
                  src={coverPreview}
                  alt="Xem trước ảnh bìa"
                  className="w-full max-h-48 object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-3 flex justify-between items-end">
                  <span className="text-white text-xs font-medium">Ảnh bìa đã chọn</span>
                  <button
                    type="button"
                    onClick={() => {
                      setCoverPreview('');
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="text-white/90 hover:text-white text-xs font-semibold bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-lg transition"
                  >
                    Đổi ảnh
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-8 border-2 border-dashed border-stone-300 rounded-2xl bg-stone-50 hover:bg-stone-100 transition flex flex-col items-center gap-2 text-stone-500 hover:text-stone-700 active:scale-[0.98]"
              >
                <ImagePlus className="w-8 h-8" />
                <span className="text-sm font-semibold">Chọn ảnh từ thư viện</span>
                <span className="text-[11px] text-stone-400">Nhấn để mở thư viện ảnh trên điện thoại</span>
              </button>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Câu chuyện & Ý nghĩa lịch sử</label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Tóm tắt nội dung và bối cảnh lịch sử của cuốn sách..."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Trích dẫn xúc động</label>
            <input
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Câu nói chạm đến cảm xúc độc giả..."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-stone-200 text-stone-700 font-semibold text-sm hover:bg-stone-50 transition"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2.5 rounded-xl bg-[#9E2A2B] hover:bg-[#852223] text-white font-semibold text-sm transition shadow-sm flex items-center justify-center gap-1.5 active:scale-98"
            >
              <Plus className="w-4 h-4" />
              <span>{isSubmitting ? 'Đang lưu...' : 'Lưu Sách Mới'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
