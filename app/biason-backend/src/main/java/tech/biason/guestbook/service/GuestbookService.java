package tech.biason.guestbook.service;

import org.springframework.stereotype.Service;
import tech.biason.guestbook.entity.GuestbookEntity;
import tech.biason.guestbook.repository.GuestbookRepository;

import java.util.List;

@Service
public class GuestbookService {
    private final GuestbookRepository guestbookRepository;

    public GuestbookService(GuestbookRepository guestbookRepository) {
        this.guestbookRepository = guestbookRepository;
    }

    public List<GuestbookEntity> getAllEntries() {
        return guestbookRepository.findAllByOrderByCreatedAtDesc();
    }

    public GuestbookEntity addEntry(String senderName, Long bookId, String message) {
        return addEntry(senderName, bookId, message, null);
    }

    public GuestbookEntity addEntry(String senderName, Long bookId, String message, String createdAtStr) {
        GuestbookEntity entry = new GuestbookEntity(senderName, bookId, message);
        if (createdAtStr != null && !createdAtStr.isBlank()) {
            try {
                entry.setCreatedAt(java.time.LocalDateTime.parse(createdAtStr));
            } catch (Exception ignored) {}
        }
        return guestbookRepository.save(entry);
    }

    public void deleteEntry(Long id) {
        guestbookRepository.deleteById(id);
    }

    public void deleteAllEntries() {
        guestbookRepository.deleteAll();
    }
}
