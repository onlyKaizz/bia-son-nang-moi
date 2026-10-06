# Data Dictionary — Bìa Sờn Nắng Mới

> **Phiên bản:** v1.0.0  
> **Cơ sở dữ liệu:** SQLite / PostgreSQL / SQL Server  

---

### 1. Bảng `CATEGORIES` (Thể loại sách)

| Tên cột | Ý nghĩa | Kiểu dữ liệu | Nullable | Ràng buộc |
|---|---|---|---|---|
| `category_id` | Khóa chính tự tăng | INTEGER | NOT NULL | PK, Auto Increment |
| `name` | Tên thể loại | VARCHAR(100) | NOT NULL | UNIQUE |
| `description` | Mô tả thể loại | VARCHAR(255) | NULL | — |

---

### 2. Bảng `BOOKS` (Kho sách cũ)

| Tên cột | Ý nghĩa | Kiểu dữ liệu | Nullable | Ràng buộc |
|---|---|---|---|---|
| `book_id` | Khóa chính | INTEGER | NOT NULL | PK, Auto Increment |
| `qr_code` | Mã định danh quét QR | VARCHAR(50) | NOT NULL | UNIQUE (`UQ_BOOK_qr_code`) |
| `title` | Tên sách | VARCHAR(255) | NOT NULL | `CK_BOOK_title_len` (>= 2 ký tự) |
| `author` | Tác giả | VARCHAR(150) | NOT NULL | — |
| `publish_year` | Năm xuất bản (1970–2000+) | INTEGER | NOT NULL | `CK_BOOK_publish_year` (1900..2026) |
| `publisher` | Nhà xuất bản (Kim Đồng, Văn Học,...) | VARCHAR(150) | NOT NULL | — |
| `category_id` | Thể loại | INTEGER | NOT NULL | FK $\rightarrow$ `CATEGORIES(category_id)` |
| `condition_note`| Tình trạng phục dựng | VARCHAR(255) | NOT NULL | Default 'Bìa sờn nguyên bản, đã tân trang gia cố gáy' |
| `price` | Giá bán gây quỹ (VNĐ) | INTEGER | NOT NULL | `CK_BOOK_price` (20000..100000) |
| `summary` | Tóm tắt nội dung | TEXT | NOT NULL | — |
| `quote` | Trích dẫn tâm đắc / cảm xúc | TEXT | NULL | — |
| `cover_image_url` | Đường dẫn ảnh bìa thật | VARCHAR(500) | NOT NULL | — |
| `status` | Trạng thái sách | VARCHAR(20) | NOT NULL | `CK_BOOK_status` ('AVAILABLE', 'SOLD') |
| `sold_at` | Thời điểm khách mua | DATETIME | NULL | Ghi nhận khi status chuyển sang SOLD |
| `created_at` | Ngày thêm vào kho | DATETIME | NOT NULL | Default Current Timestamp |

---

### 3. Bảng `CHARITY_CAMPAIGN` (Chiến dịch gây quỹ)

| Tên cột | Ý nghĩa | Kiểu dữ liệu | Nullable | Ràng buộc |
|---|---|---|---|---|
| `campaign_id` | Khóa chính | INTEGER | NOT NULL | PK |
| `campaign_name` | Tên chiến dịch | VARCHAR(200) | NOT NULL | — |
| `beneficiary_name` | Đơn vị thụ hưởng | VARCHAR(255) | NOT NULL | 'Trung tâm Điều dưỡng Thương binh và Người có công Long Đất' |
| `target_amount` | Mục tiêu gây quỹ | INTEGER | NOT NULL | Default 3.000.000đ |
| `updated_at` | Thời điểm cập nhật | DATETIME | NOT NULL | Current Timestamp |

---

### 4. Bảng `GUESTBOOK` (Sổ lưu bút cộng đồng)

| Tên cột | Ý nghĩa | Kiểu dữ liệu | Nullable | Ràng buộc |
|---|---|---|---|---|
| `entry_id` | Khóa chính | INTEGER | NOT NULL | PK, Auto Increment |
| `sender_name` | Tên người viết | VARCHAR(100) | NOT NULL | — |
| `book_id` | Cuốn sách được nhắc tới | INTEGER | NULL | FK $\rightarrow$ `BOOKS(book_id)` (Optional) |
| `message` | Lời chúc, cảm nghĩ | TEXT | NOT NULL | `CK_GUESTBOOK_len` (5..1000 ký tự) |
| `created_at` | Thời điểm gửi | DATETIME | NOT NULL | Default Current Timestamp |
