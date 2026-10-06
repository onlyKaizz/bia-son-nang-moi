import React, { useState, useEffect } from 'react';
import { Book, CharityCampaign, GuestbookEntry } from './types';
import { INITIAL_BOOKS, INITIAL_CAMPAIGN, INITIAL_GUESTBOOK } from './mockData';
import { api } from './services/api';
import { Header } from './components/Header';
import { CharityBanner } from './components/CharityBanner';
import { BookCard } from './components/BookCard';
import { BookDetailModal } from './components/BookDetailModal';
import { QRModal } from './components/QRModal';
import { AddBookModal } from './components/AddBookModal';
import { GuestbookSection } from './components/GuestbookSection';
import { Search, Plus, BookOpen } from 'lucide-react';

export const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [campaign, setCampaign] = useState<CharityCampaign>(INITIAL_CAMPAIGN);
  const [currentRaised, setCurrentRaised] = useState<number>(0);
  const [booksSoldCount, setBooksSoldCount] = useState<number>(0);
  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>(INITIAL_GUESTBOOK);
  const [isBackendConnected, setIsBackendConnected] = useState<boolean>(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [qrModalBook, setQrModalBook] = useState<Book | null>(null);
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const loadData = async () => {
    const isLive = await api.isBackendLive();
    setIsBackendConnected(isLive);

    if (isLive) {
      const [bList, cData, gList] = await Promise.all([
        api.getBooks(),
        api.getCampaign(),
        api.getGuestbook()
      ]);
      setBooks(bList);
      setCampaign(cData.campaign);
      setCurrentRaised(cData.currentRaised);
      setBooksSoldCount(cData.booksSoldCount);
      setGuestbook(gList);
    } else {
      const savedBooks = localStorage.getItem('BSNM_BOOKS');
      if (savedBooks) {
        const parsed = JSON.parse(savedBooks);
        setBooks(parsed);
        const sold = parsed.filter((b: Book) => b.status === 'SOLD');
        setCurrentRaised(sold.reduce((sum: number, b: Book) => sum + b.price, 0));
        setBooksSoldCount(sold.length);
      } else {
        const sold = INITIAL_BOOKS.filter(b => b.status === 'SOLD');
        setCurrentRaised(sold.reduce((sum, b) => sum + b.price, 0));
        setBooksSoldCount(sold.length);
      }

      const savedGuestbook = localStorage.getItem('BSNM_GUESTBOOK');
      if (savedGuestbook) setGuestbook(JSON.parse(savedGuestbook));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!isBackendConnected) {
      const soldBooks = books.filter(b => b.status === 'SOLD');
      const total = soldBooks.reduce((sum, b) => sum + b.price, 0);
      setCurrentRaised(total);
      setBooksSoldCount(soldBooks.length);
      localStorage.setItem('BSNM_BOOKS', JSON.stringify(books));
    }
  }, [books, isBackendConnected]);

  const handleToggleStatus = async (targetBook: Book) => {
    const newStatus = targetBook.status === 'AVAILABLE' ? 'SOLD' : 'AVAILABLE';

    if (isBackendConnected) {
      await api.updateBookStatus(targetBook.id, newStatus);
      const [freshBooks, freshCamp] = await Promise.all([
        api.getBooks(),
        api.getCampaign()
      ]);
      setBooks(freshBooks);
      setCampaign(freshCamp.campaign);
      setCurrentRaised(freshCamp.currentRaised);
      setBooksSoldCount(freshCamp.booksSoldCount);
    } else {
      setBooks(prev =>
        prev.map(b => (b.id === targetBook.id ? { ...b, status: newStatus } : b))
      );
    }

    if (selectedBook && selectedBook.id === targetBook.id) {
      setSelectedBook(prev => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleAddBook = async (bookData: {
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
  }) => {
    if (isBackendConnected) {
      const created = await api.createBook(bookData);
      if (created) {
        setBooks(prev => [created, ...prev]);
      } else {
        await loadData();
      }
    } else {
      const newBook: Book = {
        id: Date.now(),
        qr_code: `BSNM-${String(books.length + 1).padStart(3, '0')}`,
        title: bookData.title,
        author: bookData.author,
        publish_year: bookData.publish_year,
        publisher: bookData.publisher,
        category: bookData.category,
        price: bookData.price,
        condition_note: bookData.condition_note,
        summary: bookData.summary,
        quote: bookData.quote,
        cover_image_url: bookData.cover_image_url,
        status: 'AVAILABLE'
      };
      const updated = [newBook, ...books];
      setBooks(updated);
      localStorage.setItem('BSNM_BOOKS', JSON.stringify(updated));
    }
  };

  const handleAddGuestbook = async (sender_name: string, message: string) => {
    if (isBackendConnected) {
      await api.addGuestbook(sender_name, message);
      const freshG = await api.getGuestbook();
      setGuestbook(freshG);
    } else {
      const newEntry: GuestbookEntry = {
        id: Date.now(),
        sender_name,
        message,
        created_at: new Date().toISOString().replace('T', ' ').substring(0, 16)
      };
      const updated = [newEntry, ...guestbook];
      setGuestbook(updated);
      localStorage.setItem('BSNM_GUESTBOOK', JSON.stringify(updated));
    }
  };

  const categories = ['ALL', ...Array.from(new Set(books.map(b => b.category)))];

  const filteredBooks = books.filter(b => {
    const matchesCategory = selectedCategory === 'ALL' || b.category === selectedCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.publisher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 font-sans selection:bg-[#9E2A2B] selection:text-white">
      <Header
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        isBackendConnected={isBackendConnected}
      />

      <main className="flex-1 max-w-6xl mx-auto px-3.5 sm:px-6 py-6 sm:py-8 space-y-8 sm:space-y-12 w-full">
        {/* Real-time Charity Banner */}
        <CharityBanner
          campaign={campaign}
          currentRaised={currentRaised}
          booksSoldCount={booksSoldCount}
          totalBooks={books.length}
        />

        {/* Section: Tủ Sách Xưa Phục Chế */}
        <section className="space-y-5">
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Tủ Sách Hoài Niệm
                </h2>
                <span className="text-xs font-semibold px-2 py-0.5 bg-stone-100 text-stone-700 rounded-full border border-stone-200">
                  {filteredBooks.length} cuốn
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                Mỗi cuốn sách cũ là một mảnh ghép lịch sử, trao đi nghĩa tình thiêng liêng
              </p>
            </div>

            {/* Admin Add Book Button */}
            {isAdmin && (
              <button
                onClick={() => setShowAddBookModal(true)}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#9E2A2B] hover:bg-[#852223] text-white text-xs sm:text-sm font-semibold shadow-xs transition active:scale-95 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm Sách Mới</span>
              </button>
            )}
          </div>

          {/* Search bar & Horizontal Scrollable Category Pills (Mobile-First) */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên sách, tác giả, nhà xuất bản..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-white border border-stone-200/90 focus:outline-none focus:ring-2 focus:ring-stone-900 shadow-xs"
              />
            </div>

            {/* Horizontal Scrollable Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((c) => {
                const isSelected = selectedCategory === c;
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
                      isSelected
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    {c === 'ALL' ? 'Tất cả' : c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Books Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isAdmin={isAdmin}
                onSelect={setSelectedBook}
                onShowQR={setQrModalBook}
                onToggleStatus={handleToggleStatus}
              />
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12 border border-dashed border-stone-200 rounded-3xl bg-white p-6">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-2" />
              <p className="text-stone-500 text-sm font-medium">Không tìm thấy cuốn sách nào phù hợp với bộ lọc hiện tại.</p>
            </div>
          )}
        </section>

        {/* Section: Sổ Lưu Bút Tri Ân */}
        <GuestbookSection
          entries={guestbook}
          onAddEntry={(name, msg) => handleAddGuestbook(name, msg)}
        />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200/80 bg-white text-stone-600 py-6 text-xs w-full">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-1.5">
          <p className="font-bold text-stone-900 text-sm tracking-tight">DỰ ÁN BÌA SỜN NẮNG MỚI • MÔN HỌC SSG105 (ĐẠI HỌC FPT)</p>
          <p className="text-stone-500 font-medium">
            100% lợi nhuận thu được gửi tặng Trung tâm Điều dưỡng Thương binh và Người có công Long Đất
          </p>
        </div>
      </footer>

      {/* Modals */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onShowQR={(b) => {
            setSelectedBook(null);
            setQrModalBook(b);
          }}
          isAdmin={isAdmin}
          onToggleStatus={handleToggleStatus}
        />
      )}

      {qrModalBook && (
        <QRModal
          book={qrModalBook}
          onClose={() => setQrModalBook(null)}
        />
      )}

      {showAddBookModal && (
        <AddBookModal
          onClose={() => setShowAddBookModal(false)}
          onAddBook={handleAddBook}
          existingCategories={categories.filter(c => c !== 'ALL')}
        />
      )}
    </div>
  );
};
