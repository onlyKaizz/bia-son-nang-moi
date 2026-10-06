# Hướng Dẫn Đóng Góp — Bìa Sờn Nắng Mới

Tài liệu này quy định quy chuẩn làm việc nhóm, quản lý mã nguồn và tài liệu cho dự án môn học SSG105.

---

## 1. Quy Tắc Chung

1. **Giữ code sạch & tối giản:** Ứng dụng phục vụ sự kiện bán sách thực tế, ưu tiên giao diện đẹp, tốc độ tải trang nhanh và không phát sinh lỗi khi khách quét mã QR.
2. **Commit rõ ràng (Conventional Commits):**
   * `feat(...)`: Tính năng mới (ví dụ: `feat(qr): generate qr code for book`).
   * `fix(...)`: Sửa lỗi.
   * `docs(...)`: Thêm hoặc chỉnh sửa tài liệu.
   * `style(...)`: Tinh chỉnh giao diện Retro/Vintage.
3. **Quy tắc phân nhánh (Branching):**
   * `main`: Nhánh ổn định, deploy lên Vercel để khách và giảng viên truy cập.
   * `develop`: Nhánh tích hợp các tính năng đang phát triển.
   * `feature/...`: Nhánh tính năng cá nhân.

---

## 2. Tiêu Chuẩn Trình Bày Giao Diện

* Màu sắc chủ đạo: Màu giấy hoài niệm (`#F5EFEB`), Nâu cổ kính (`#4A3525`), Đỏ tem thư (`#A83232`), Nắng mới (`#D4A373`).
* Font chữ: Font có chân cổ điển (Merriweather / Noto Serif) cho tiêu đề và trích dẫn sách.
