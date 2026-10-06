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
        GuestbookEntity entry = new GuestbookEntity(senderName, bookId, message);
        return guestbookRepository.save(entry);
    }
}
