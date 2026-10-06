import React, { useState, useEffect } from 'react';
import { Book, CharityCampaign, GuestbookEntry } from './types';
import { INITIAL_BOOKS, INITIAL_CAMPAIGN, INITIAL_GUESTBOOK } from './mockData';
import { api } from './services/api';
import { Header } from './components/Header';
import { CharityBanner } from './components/CharityBanner';
import { BookCard } from './components/BookCard';
import { BookDetailModal } from './components/BookDetailModal';
import { QRModal } from './components/QRModal';
import { GuestbookSection } from './components/GuestbookSection';
import { Search, Filter } from 'lucide-react';

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
    <div className="min-h-screen bg-[#fcfaf4] text-amber-950 font-sans selection:bg-amber-900 selection:text-amber-50">
      <Header
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        isBackendConnected={isBackendConnected}
      />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <CharityBanner
          campaign={campaign}
          currentRaised={currentRaised}
          booksSoldCount={booksSoldCount}
          totalBooks={books.length}
        />

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-900/15 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950 flex items-center gap-3">
                <span>Tủ Sách Hoài Niệm (1970 – 2000)</span>
                <span className="text-xs font-sans font-normal px-2.5 py-1 bg-amber-900/10 text-amber-900 rounded-full border border-amber-900/10">
                  {filteredBooks.length} cuốn
                </span>
              </h2>
              <p className="text-sm text-amber-800/80 mt-1 font-serif italic">
                "Mỗi cuốn sách cũ là một mảnh ghép lịch sử, một lời tri ấn thiêng liêng gửi tới các thế hệ cha anh."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-amber-800/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm tên sách, tác giả..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-xl text-xs bg-amber-50/90 border border-amber-900/20 focus:outline-none focus:ring-2 focus:ring-amber-800 w-full sm:w-56"
                />
              </div>

              <div className="relative">
                <Filter className="w-4 h-4 text-amber-800/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-9 pr-8 py-2 rounded-xl text-xs bg-amber-50/90 border border-amber-900/20 focus:outline-none focus:ring-2 focus:ring-amber-800 appearance-none cursor-pointer w-full"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c === 'ALL' ? 'Tất cả thể loại' : c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <div className="text-center py-12 border border-dashed border-amber-900/20 rounded-2xl bg-amber-50/40">
              <p className="text-amber-800/70 font-serif text-sm">Không tìm thấy cuốn sách nào phù hợp với từ khóa.</p>
            </div>
          )}
        </section>

        <GuestbookSection
          entries={guestbook}
          onAddEntry={(name, msg) => handleAddGuestbook(name, msg)}
        />
      </main>

      <footer className="border-t border-amber-900/15 bg-amber-900 text-amber-100/90 py-8 mt-16 font-serif">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
          <p className="text-base font-bold tracking-wide">DỰ ÁN BÌA SỜN NẮNG MỚI • MÔN HỌC SSG105 (ĐẠI HỌC FPT)</p>
          <p className="text-xs text-amber-200/80 font-sans">
            Toàn bộ 100% lợi nhuận thu được được gửi tặng Trung tâm Điều dưỡng Thương binh và Người có công Long Đất
          </p>
          <p className="text-[11px] text-amber-300/60 font-sans pt-2">
            Hệ thống Fullstack: React 18 + TypeScript + Spring Boot 3 + H2 Persistent Database
          </p>
        </div>
      </footer>

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
    </div>
  );
};
