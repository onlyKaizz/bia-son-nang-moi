# ERD Workspace — Bìa Sờn Nắng Mới

Tài liệu hướng dẫn mô hình quan hệ thực thể (Entity Relationship Diagram) cho hệ thống Bìa Sờn Nắng Mới.

---

## 1. Danh Sách Thực Thể Cốt Lõi (5 Bảng)

1. **`CATEGORIES` (Thể loại sách):** Phân loại sách (Văn học thời chiến, Ký sự kháng chiến, Lịch sử cách mạng, Thơ ca,...).
2. **`BOOKS` (Kho sách cũ):** Chứa thông tin từng cuốn sách, ảnh bìa, tóm tắt, trích dẫn, mã QR, giá bán và trạng thái.
3. **`CHARITY_CAMPAIGN` (Chiến dịch gây quỹ):** Lưu thông tin mục tiêu quyên góp và đơn vị thụ hưởng (Trung tâm Điều dưỡng Thương binh Long Đất).
4. **`GUESTBOOK` (Sổ lưu bút cộng đồng):** Lưu trữ lời nhắn tri ân từ bạn đọc.
5. **`ADMIN_USERS` (Quản trị viên):** Quản lý tài khoản đăng nhập của ban tổ chức.

---

## 2. Bản Số & Mối Quan Hệ (Cardinality)

* `CATEGORIES` 1 ──< 0..* `BOOKS` (Một thể loại có nhiều sách).
* `BOOKS` 1 ──< 0..* `GUESTBOOK` (Khách có thể để lại lưu bút gắn với một cuốn sách cụ thể, hoặc lưu bút chung cho dự án).
