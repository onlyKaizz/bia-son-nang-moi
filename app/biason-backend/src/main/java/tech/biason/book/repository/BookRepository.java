package tech.biason.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.biason.book.entity.BookEntity;
import java.util.Optional;
import java.util.List;

public interface BookRepository extends JpaRepository<BookEntity, Long> {
    Optional<BookEntity> findByQrCode(String qrCode);
    List<BookEntity> findByStatus(String status);
}
