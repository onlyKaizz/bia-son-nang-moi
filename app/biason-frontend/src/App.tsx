import React, { useState, useEffect } from 'react';
import { Book, CharityCampaign, GuestbookEntry } from './types';
import { INITIAL_BOOKS, INITIAL_CAMPAIGN, INITIAL_GUESTBOOK } from './mockData';
import { Header } from './components/Header';
import { CharityBanner } from './components/CharityBanner';
import { BookCard } from './components/BookCard';
import { BookDetailModal } from './components/BookDetailModal';
import { QRModal } from './components/QRModal';
import { GuestbookSection } from './components/GuestbookSection';
import { Search, Filter } from 'lucide-react';

export const App: React.FC = () => {
  // Persistence via localStorage
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem('BSNM_BOOKS');
    return saved ? JSON.parse(saved) : INITIAL_BOOKS;
  });

  const [campaign] = useState<CharityCampaign>(INITIAL_CAMPAIGN);

  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>(() => {
    const saved = localStorage.getItem('BSNM_GUESTBOOK');
    return saved ? JSON.parse(saved) : INITIAL_GUESTBOOK;
  });

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [qrBook, setQrBook] = useState<Book | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  useEffect(() => {
    localStorage.setItem('BSNM_BOOKS', JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem('BSNM_GUESTBOOK', JSON.stringify(guestbook));
  }, [guestbook]);

  // Handle URL hash for QR scan lookup (e.g. #BSNM-001)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash) {
        const found = books.find((b) => b.qr_code.toUpperCase() === hash.toUpperCase());
        if (found) {
          setSelectedBook(found);
        }
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [books]);

  // Calculations
  const currentRaised = books
    .filter((b) => b.status === 'SOLD')
    .reduce((sum, b) => sum + b.price, 0);

  const booksSoldCount = books.filter((b) => b.status === 'SOLD').length;

  const categories = ['ALL', ...Array.from(new Set(books.map((b) => b.category)))];

  // Filtered books
  const filteredBooks = books.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || b.category === selectedCategory;
    const matchesStatus =
      selectedStatus === 'ALL' ||
      (selectedStatus === 'AVAILABLE' && b.status === 'AVAILABLE') ||
      (selectedStatus === 'SOLD' && b.status === 'SOLD');
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleToggleStatus = (target: Book) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === target.id
          ? {
              ...b,
              status: b.status === 'AVAILABLE' ? 'SOLD' : 'AVAILABLE',
              sold_at: b.status === 'AVAILABLE' ? new Date().toISOString() : undefined,
            }
          : b
      )
    );
    if (selectedBook && selectedBook.id === target.id) {
      setSelectedBook((prev) =>
        prev
          ? {
              ...prev,
              status: prev.status === 'AVAILABLE' ? 'SOLD' : 'AVAILABLE',
            }
          : null
      );
    }
  };

  const handleAddGuestbook = (name: string, message: string) => {
    const newEntry: GuestbookEntry = {
      id: Date.now(),
      sender_name: name,
      message,
      created_at: new Date().toLocaleString('vi-VN', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
    };
    setGuestbook([newEntry, ...guestbook]);
  };

  return (
    <div className="min-h-screen bg-[#F6F0E6] flex flex-col justify-between">
      <div>
        <Header
          isAdmin={isAdmin}
          onOpenAdmin={() => {
            const pass = prompt('Nhập mã PIN quản trị (mặc định: 1234):');
            if (pass === '1234') {
              setIsAdmin(!isAdmin);
            } else if (pass !== null) {
              alert('Sai mã PIN!');
            }
          }}
        />

        <main className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          {/* Charity Campaign Progress */}
          <CharityBanner
            campaign={campaign}
            currentRaised={currentRaised}
            booksSoldCount={booksSoldCount}
            totalBooks={books.length}
          />

          {/* Search and Filters Bar */}
          <div className="bg-[#FAF6EE] border border-[#D8C7B0] p-4 rounded-xl mb-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#7A6B5D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên sách, tác giả..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs md:text-sm rounded-lg bg-[#FDFBF7] border border-[#D8C7B0] focus:outline-none focus:border-[#9E2A2B]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 items-center flex-wrap">
              <div className="flex items-center gap-1 text-xs text-[#7A6B5D]">
                <Filter className="w-3.5 h-3.5 text-[#C58940]" />
                <span>Thể loại:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs py-2 px-2.5 rounded-lg bg-[#FDFBF7] border border-[#D8C7B0] text-[#3D2F24] focus:outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === 'ALL' ? 'Tất cả thể loại' : c}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="text-xs py-2 px-2.5 rounded-lg bg-[#FDFBF7] border border-[#D8C7B0] text-[#3D2F24] focus:outline-none"
              >
                <option value="ALL">Tất cả tình trạng</option>
                <option value="AVAILABLE">Còn sách</option>
                <option value="SOLD">Đã có chủ nhân</option>
              </select>
            </div>
          </div>

          {/* Book Catalog Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-xl font-serif font-bold text-[#3D2F24]">
                Kệ Sách Cổ (1970 – 2000)
              </h2>
              <span className="text-xs text-[#7A6B5D]">
                Hiển thị {filteredBooks.length} / {books.length} cuốn
              </span>
            </div>

            {filteredBooks.length === 0 ? (
              <div className="text-center py-16 bg-[#FDFBF7] rounded-xl border border-[#D8C7B0]">
                <p className="text-[#7A6B5D] text-sm font-serif">
                  Không tìm thấy cuốn sách nào khớp với từ khóa tìm kiếm.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onSelect={setSelectedBook}
                    onShowQR={setQrBook}
                    isAdmin={isAdmin}
                    onToggleStatus={handleToggleStatus}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Guestbook Section */}
          <GuestbookSection entries={guestbook} onAddEntry={handleAddGuestbook} />
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#D8C7B0] bg-[#FAF6EE] py-6 text-center text-xs text-[#7A6B5D] mt-12">
        <p className="font-serif font-semibold text-[#3D2F24] mb-1">
          Dự án "Bìa Sờn Nắng Mới" — Môn học SSG105 • Đại học FPT
        </p>
        <p>100% Lợi nhuận gửi tặng Trung tâm Điều dưỡng Thương binh và Người có công Long Đất</p>
      </footer>

      {/* Modals */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onShowQR={setQrBook}
          isAdmin={isAdmin}
          onToggleStatus={handleToggleStatus}
        />
      )}

      {qrBook && <QRModal book={qrBook} onClose={() => setQrBook(null)} />}
    </div>
  );
};
