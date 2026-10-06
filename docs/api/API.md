# Quy chuẩn Giao diện Dữ liệu (API Conventions)

Ứng dụng định nghĩa giao diện dữ liệu nội bộ và sẵn sàng kết nối API RESTful:

### Các thực thể cốt lõi:
- `GET /api/books`: Lấy danh sách sách có sẵn và lịch sử đã bán
- `GET /api/books/{qrCode}`: Tra cứu sách thông qua mã QR trên bookmark
- `PATCH /api/books/{id}/status`: Cập nhật trạng thái sách (`AVAILABLE` / `SOLD`)
- `GET /api/campaign`: Lấy thông tin tiến độ gây quỹ Long Đất
- `POST /api/guestbook`: Gửi lời tri ân vào sổ lưu bút
