import React, { useState, useRef, useEffect } from 'react';
import { X, Save, ImagePlus, Edit3 } from 'lucide-react';
import { Book } from '../types';

interface EditBookModalProps {
  book: Book;
  onClose: () => void;
  onSaveBook: (updatedData: {
    id: number;
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
  }) => Promise<void>;
}

export const EditBookModal: React.FC<EditBookModalProps> = ({ book, onClose, onSaveBook }) => {
  const [title, setTitle] = useState(book.title || '');
  const [author, setAuthor] = useState(book.author || '');
  const [publishYear, setPublishYear] = useState<number | ''>(book.publish_year || '');
  const [publisher, setPublisher] = useState(book.publisher || '');
  const [category, setCategory] = useState(book.category || 'Ký sự & Hồi ức Chiến trường');
  const [price, setPrice] = useState<number | ''>(book.price || 30000);
  const [conditionNote, setConditionNote] = useState(book.condition_note || '');
  const [summary, setSummary] = useState(book.summary || '');
  const [quote, setQuote] = useState(book.quote || '');
  const [coverPreview, setCoverPreview] = useState<string>(book.cover_image_url || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitle(book.title || '');
    setAuthor(book.author || '');
    setPublishYear(book.publish_year || '');
    setPublisher(book.publisher || '');
    setCategory(book.category || 'Ký sự & Hồi ức Chiến trường');
    setPrice(book.price || 30000);
    setConditionNote(book.condition_note || '');
    setSummary(book.summary || '');
    setQuote(book.quote || '');
    setCoverPreview(book.cover_image_url || '');
  }, [book]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh hợp lệ');
      return;
    }

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

    setIsSubmitting(true);
    await onSaveBook({
      id: book.id,
      title: title.trim() || 'Sách Chưa Đặt Tên',
      author: author.trim() || 'Chưa rõ tác giả',
      publish_year: publishYear ? Number(publishYear) : 1985,
      publisher: publisher.trim() || 'Đang cập nhật',
      category: category.trim() || 'Ký sự & Hồi ức Chiến trường',
      price: price ? Number(price) : 30000,
      condition_note: conditionNote.trim() || 'Bìa sờn nguyên bản, đã tân trang',
      summary: summary.trim() || 'Đang cập nhật tóm tắt và câu chuyện của cuốn sách.',
      quote: quote.trim(),
      cover_image_url: coverPreview || book.cover_image_url || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600',
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
              <Edit3 className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900 tracking-tight">Chỉnh Sửa Sách</h3>
              <p className="text-xs text-stone-500">Mã định danh: {book.qr_code}</p>
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
                Tên tác phẩm
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ví dụ: Rừng Xà Nu"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Tác giả
              </label>
              <input
                type="text"
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
                onChange={(e) => setPublishYear(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Ví dụ: 1985"
                className="w-full text-sm px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Giá bán (VND)</label>
              <input
                type="number"
                step={5000}
                min={0}
                value={price}
                onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Ví dụ: 30000"
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
              <label className="block text-xs font-semibold text-stone-700 mb-1">Thể loại</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Ví dụ: Ký sự & Hồi ức Chiến trường"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>
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

          {/* Image Picker */}
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
                  <span className="text-white text-xs font-medium">Ảnh bìa hiện tại</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-white text-xs font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-xs px-2.5 py-1 rounded-lg transition"
                    >
                      Đổi ảnh
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCoverPreview('');
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      className="text-red-200 hover:text-red-100 text-xs font-semibold bg-red-600/40 backdrop-blur-xs px-2.5 py-1 rounded-lg transition"
                    >
                      Xóa ảnh
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-8 border-2 border-dashed border-stone-300 rounded-2xl bg-stone-50 hover:bg-stone-100 transition flex flex-col items-center gap-2 text-stone-500 hover:text-stone-700 active:scale-[0.98]"
              >
                <ImagePlus className="w-8 h-8" />
                <span className="text-sm font-semibold">Chọn ảnh bìa từ thiết bị</span>
                <span className="text-[11px] text-stone-400">Có thể để trống để dùng ảnh mặc định</span>
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
              <Save className="w-4 h-4" />
              <span>{isSubmitting ? 'Đang lưu...' : 'Lưu Thay Đổi'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
