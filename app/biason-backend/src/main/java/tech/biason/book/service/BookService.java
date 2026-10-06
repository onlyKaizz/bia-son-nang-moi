package tech.biason.book.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tech.biason.book.entity.BookEntity;
import tech.biason.book.entity.CategoryEntity;
import tech.biason.book.repository.BookRepository;
import tech.biason.book.repository.CategoryRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository bookRepository;
    private final CategoryRepository categoryRepository;

    public BookService(BookRepository bookRepository, CategoryRepository categoryRepository) {
        this.bookRepository = bookRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<BookEntity> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<BookEntity> getBookByQrCode(String qrCode) {
        return bookRepository.findByQrCode(qrCode);
    }

    @Transactional
    public BookEntity updateStatus(Long bookId, String newStatus) {
        BookEntity book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sách với ID: " + bookId));
        book.setStatus(newStatus);
        if ("SOLD".equalsIgnoreCase(newStatus)) {
            book.setSoldAt(LocalDateTime.now());
        } else {
            book.setSoldAt(null);
        }
        return bookRepository.save(book);
    }

    @Transactional
    public BookEntity createBook(String title, String author, Integer publishYear,
                                 String publisher, String categoryName, String conditionNote,
                                 Integer price, String summary, String quote,
                                 String coverImageUrl, String qrCode) {
        CategoryEntity category = categoryRepository.findByName(categoryName)
                .orElseGet(() -> categoryRepository.save(new CategoryEntity(categoryName, "Thể loại sách")));

        BookEntity book = new BookEntity();
        book.setTitle(title != null ? title.trim() : "Sách Chưa Đặt Tên");
        book.setAuthor(author != null ? author.trim() : "Nhiều tác giả");
        book.setPublishYear(publishYear != null ? publishYear : 1985);
        book.setPublisher(publisher != null && !publisher.isBlank() ? publisher.trim() : "NXB Hội Nhà Văn");
        book.setCategory(category);
        book.setConditionNote(conditionNote != null && !conditionNote.isBlank() ? conditionNote.trim() : "Bìa sờn nguyên bản, đã tân trang");
        book.setPrice(price != null ? price : 30000);
        book.setSummary(summary != null && !summary.isBlank() ? summary.trim() : "Tác phẩm văn học lịch sử quý giá.");
        book.setQuote(quote != null ? quote.trim() : "");
        book.setCoverImageUrl(coverImageUrl != null && !coverImageUrl.isBlank() ? coverImageUrl.trim() : "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600");

        if (qrCode == null || qrCode.isBlank()) {
            long count = bookRepository.count() + 1;
            qrCode = String.format("BSNM-%03d", count);
        }
        book.setQrCode(qrCode);
        book.setStatus("AVAILABLE");

        return bookRepository.save(book);
    }

    @Transactional
    public void deleteBook(Long bookId) {
        BookEntity book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sách với ID: " + bookId));
        bookRepository.delete(book);
    }
}
