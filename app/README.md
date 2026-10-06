# Phân hệ Ứng dụng (App) - Bìa Sờn Nắng Mới

Hệ thống Fullstack hoàn chỉnh chuẩn kỹ thuật:

## 1. `biason-backend/` (Java Spring Boot 3 + H2 Persistent Database)
- **Công nghệ**: Java 21/25, Spring Boot 3.3.4, Spring Data JPA, H2 Database.
- **REST API Endpoints**:
  - `GET  /api/books`: Lấy danh sách 8 đầu sách kinh điển 1970–2000.
  - `GET  /api/books/{qrCode}`: Tra cứu sách theo mã QR Bookmark.
  - `PATCH /api/books/{id}/status`: Cập nhật trạng thái sách (`AVAILABLE` / `SOLD`).
  - `GET  /api/campaign`: Lấy dữ liệu quỹ thiện nguyện và tự động tính tiền đã bán.
  - `GET  /api/guestbook`: Lấy danh sách lưu bút tri ân.
  - `POST /api/guestbook`: Gửi lời tri ân mới vào cơ sở dữ liệu.
- **H2 Web Console**: `http://localhost:8080/h2-console`
  - JDBC URL: `jdbc:h2:file:./data/biason`
  - User: `sa`, Password: (để trống)

## 2. `biason-frontend/` (React 18 + TypeScript + Tailwind CSS)
- **Công nghệ**: React 18, TypeScript, Tailwind CSS, Lucide Icons, Vite 6.
- **Tính năng**:
  - Tự động phát hiện Backend và hiển thị huy hiệu `🟢 Database Thật (Spring Boot)`.
  - Quản trị viên (PIN: `1975`) đổi trạng thái sách -> Gửi API cập nhật trực tiếp vào Database và làm mới thanh tiến độ quỹ.
  - Sổ lưu bút gửi lời nhắn trực tiếp vào Database.
  - Hỗ trợ cơ chế Offline-First fallback nếu Backend chưa khởi động.
