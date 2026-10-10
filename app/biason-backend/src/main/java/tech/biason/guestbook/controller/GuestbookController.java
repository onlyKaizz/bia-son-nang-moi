package tech.biason.guestbook.controller;

import org.springframework.web.bind.annotation.*;
import tech.biason.common.response.ApiResponse;
import tech.biason.guestbook.entity.GuestbookEntity;
import tech.biason.guestbook.service.GuestbookService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {
    private final GuestbookService guestbookService;

    public GuestbookController(GuestbookService guestbookService) {
        this.guestbookService = guestbookService;
    }

    @GetMapping
    public ApiResponse<List<GuestbookEntity>> getEntries() {
        return ApiResponse.ok(guestbookService.getAllEntries());
    }

    @PostMapping
    public ApiResponse<GuestbookEntity> createEntry(@RequestBody Map<String, Object> body) {
        String senderName = (String) body.get("senderName");
        String message = (String) body.get("message");
        Long bookId = body.get("bookId") != null ? Long.valueOf(body.get("bookId").toString()) : null;
        String createdAtStr = (String) body.get("createdAt");

        GuestbookEntity saved = guestbookService.addEntry(senderName, bookId, message, createdAtStr);
        return ApiResponse.ok("Đã ghi nhận lời tri ân vào sổ lưu bút", saved);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteEntry(@PathVariable Long id) {
        guestbookService.deleteEntry(id);
        return ApiResponse.ok("Đã xóa lời nhắn thành công", null);
    }

    @DeleteMapping
    public ApiResponse<Void> deleteAllEntries() {
        guestbookService.deleteAllEntries();
        return ApiResponse.ok("Đã xóa toàn bộ lời nhắn thành công", null);
    }
}
