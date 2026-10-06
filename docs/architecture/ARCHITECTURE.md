# System Architecture — Bìa Sờn Nắng Mới

> **Dự án:** Bìa Sờn Nắng Mới  
> **Kiến trúc:** Web App Tinh Gọn (Mobile-First Architecture)  
> **Phiên bản:** v1.0.0  

---

## 1. Sơ Đồ Khối Kiến Trúc Hệ Thống

```text
[Khách hàng quét QR]        [Khách xem Web]            [Admin Ban Tổ Chức]
        │                         │                           │
        └─────────────┬───────────┴───────────────────────────┘
                      ▼
        ┌───────────────────────────┐
        │     React / Next.js UI    │  <-- Vercel Edge Hosting (HTTPS)
        │  (Retro Vintage Styling)  │
        └─────────────┬─────────────┘
                      │ REST API / Queries
                      ▼
        ┌───────────────────────────┐
        │  Application Service API  │
        │  - Book Catalog Service   │
        │  - QR Code Engine         │
        │  - Charity Fund Calculator│
        │  - Guestbook Moderation   │
        └─────────────┬─────────────┘
                      │
                      ▼
        ┌───────────────────────────┐
        │   Database & Storage      │  <-- SQLite / PostgreSQL
        │   - Books & Categories    │
        │   - Guestbook & Campaign  │
        │   - Cover Images Storage  │
        └───────────────────────────┘
```

---

## 2. Luồng Xử Lý Quét Mã QR (QR Scan Flow)

```text
1. Khách hàng dùng Camera điện thoại quét QR trên Bookmark
   │
   ▼
2. Trình duyệt mở link: https://ten-web.vercel.app/sach/BIA-001
   │
   ▼
3. Frontend gọi API: GET /api/books/BIA-001
   │
   ▼
4. Hiển thị trang câu chuyện cuốn sách:
   - Ảnh bìa sờn phục dựng
   - Tóm tắt & trích dẫn hào hùng
   - Giá bán & thông điệp tri ân Trung tâm Long Đất
```

---

## 3. Phong Cách Thiết Kế Giao Diện (Design Tokens)

* **Tone màu chủ đạo:**
  * `#F5EFEB`: Màu giấy bãi bằng cũ (Parchment White) — Nền chính.
  * `#4A3525`: Màu nâu bìa sách da cổ (Deep Vintage Brown) — Màu chữ & đường viền.
  * `#A83232`: Màu đỏ son tem thư kháng chiến (Brick Red) — Điểm nhấn, huy hiệu tri ân.
  * `#D4A373`: Màu vàng nắng mới (Warm Sun Accent) — Nút bấm, thanh tiến độ.
* **Typography:**
  * Tiêu đề: Serif cổ điển (`Merriweather`, `Playfair Display`).
  * Nội dung & Thông số: Sans-serif hiện đại, dễ đọc trên di động (`Inter`).
