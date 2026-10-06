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
}
