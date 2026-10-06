package tech.biason.book.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.biason.book.entity.BookEntity;
import tech.biason.book.service.BookService;
import tech.biason.common.response.ApiResponse;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ApiResponse<List<BookEntity>> getAllBooks() {
        return ApiResponse.ok(bookService.getAllBooks());
    }

    @GetMapping("/{qrCode}")
    public ResponseEntity<ApiResponse<BookEntity>> getBookByQr(@PathVariable String qrCode) {
        return bookService.getBookByQrCode(qrCode)
                .map(b -> ResponseEntity.ok(ApiResponse.ok(b)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/status")
    public ApiResponse<BookEntity> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        String status = body.getOrDefault("status", "AVAILABLE");
        BookEntity updated = bookService.updateStatus(id, status);
        return ApiResponse.ok("Cập nhật trạng thái sách thành công", updated);
    }

    @PostMapping
    public ApiResponse<BookEntity> createBook(@RequestBody Map<String, Object> body) {
        String title = (String) body.get("title");
        String author = (String) body.get("author");
        Integer publishYear = body.get("publishYear") != null ? Integer.valueOf(body.get("publishYear").toString()) : null;
        String publisher = (String) body.get("publisher");
        String categoryName = body.get("category") != null ? (String) body.get("category") : "Ký sự & Hồi ức Chiến trường";
        String conditionNote = (String) body.get("conditionNote");
        Integer price = body.get("price") != null ? Integer.valueOf(body.get("price").toString()) : 30000;
        String summary = (String) body.get("summary");
        String quote = (String) body.get("quote");
        String coverImageUrl = (String) body.get("coverImageUrl");
        String qrCode = (String) body.get("qrCode");

        BookEntity saved = bookService.createBook(title, author, publishYear, publisher, categoryName, conditionNote, price, summary, quote, coverImageUrl, qrCode);
        return ApiResponse.ok("Thêm sách mới vào kho thành công", saved);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ApiResponse.ok("Đã xóa sách thành công", null);
    }
}
