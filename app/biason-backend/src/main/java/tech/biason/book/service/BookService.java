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
    public BookEntity createBook(BookEntity book, Long categoryId) {
        CategoryEntity cat = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy thể loại với ID: " + categoryId));
        book.setCategory(cat);
        return bookRepository.save(book);
    }
}
