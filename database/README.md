# Database Workspace — Bìa Sờn Nắng Mới

Hướng dẫn thiết kế và kiểm thử cơ sở dữ liệu cho dự án Bìa Sờn Nắng Mới (SSG105).

---

## 1. Cấu Trúc Script

* `schema.sql`: DDL tạo bảng, khóa chính, khóa ngoại, ràng buộc giá (`CK_BOOK_price`), ràng buộc trạng thái (`CK_BOOK_status`) và Unique mã QR (`UQ_BOOK_qr_code`).
* `sample-data.sql`: Dữ liệu seed 10 cuốn sách văn học kháng chiến thật (1970–2000), thông tin Trung tâm Long Đất và lưu bút mẫu.
* `queries.sql`: Các câu truy vấn mẫu tính toán quỹ và truy vấn quét mã QR.

---

## 2. Hướng Dẫn Chạy Thử Trên SQLite (hoặc DBeaver / VSCode)

```bash
# Tạo database sạch và nạp dữ liệu
sqlite3 biason.db < schema.sql
sqlite3 biason.db < sample-data.sql

# Chạy kiểm tra thống kê
sqlite3 biason.db < queries.sql
```
