package tech.biason.guestbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.biason.guestbook.entity.GuestbookEntity;
import java.util.List;

public interface GuestbookRepository extends JpaRepository<GuestbookEntity, Long> {
    List<GuestbookEntity> findAllByOrderByCreatedAtDesc();
}
