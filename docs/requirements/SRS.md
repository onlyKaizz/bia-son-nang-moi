# Software Requirements Specification (SRS) — Bìa Sờn Nắng Mới

> **Dự án:** Bìa Sờn Nắng Mới  
> **Tài liệu:** Yêu cầu phần mềm chi tiết  
> **Phiên bản:** v1.0.0  

---

## 1. Yêu Cầu Chức Năng (Functional Requirements - FR)

### FR-01: Quét Mã QR Tra Cứu Chi Tiết Sách (Book QR Lookup)
- **Actor:** Khách vãng lai (Public).
- **Mô tả:** Khi khách quét mã QR trên bookmark/bìa sách bằng camera điện thoại, hệ thống mở trực tiếp trang hồ sơ chi tiết của cuốn sách (`/sach/:code`).
- **Dữ liệu hiển thị:**
  - Tên tác phẩm, tác giả, năm xuất bản, nhà xuất bản.
  - Thể loại (Văn học thời chiến, Lịch sử, Ký sự cách mạng, Thơ ca,...).
  - Tình trạng sách (Tân trang bìa, giấy ngả vàng nguyên bản,...).
  - Đoạn tóm tắt nội dung và câu trích dẫn đắt giá.
  - Giá bán (25.000đ – 40.000đ) và huy hiệu cam kết gây quỹ gửi Trung tâm Long Đất.
  - Trạng thái hiện tại: `AVAILABLE` (Đang chờ bạn đọc) hoặc `SOLD` (Đã tìm thấy chủ nhân).

### FR-02: Khám Phá & Lọc Danh Mục Sách (Catalog Search & Filter)
- **Actor:** Khách vãng lai.
- **Mô tả:** Cho phép duyệt toàn bộ kho sách đã được nhóm phục dựng và số hóa.
- **Tiêu chí lọc:**
  - Tìm kiếm theo từ khóa (Tên sách hoặc Tác giả).
  - Lọc theo thể loại.
  - Lọc theo trạng thái: Tất cả / Còn sách / Đã bán.

### FR-03: Bảng Minh Bạch Quỹ Từ Thiện (Charity Transparency Tracker)
- **Actor:** Khách vãng lai & Giảng viên.
- **Mô tả:** Hiển thị thời gian thực thanh tiến độ chiến dịch:
  - Tổng số tiền tích lũy: tự động tính từ tổng giá các cuốn sách đã chuyển sang trạng thái `SOLD`.
  - Mục tiêu chiến dịch và % hoàn thành.
  - Tổng số cuốn sách đã được trao đi.
  - Thông tin đơn vị thụ hưởng: Trung tâm Điều dưỡng Thương binh và Người có công Long Đất.

### FR-04: Sổ Lưu Bút Tri Ân (Community Guestbook)
- **Actor:** Khách vãng lai.
- **Mô tả:** Khách có thể nhập tên/nickname và viết một lời chúc, cảm nghĩ gửi tới thế hệ cha anh hoặc chia sẻ cảm xúc về cuốn sách.
- **Quy tắc:** Lời nhắn được hiển thị công khai trên web sau khi đi qua bộ lọc từ ngữ tự động.

### FR-05: Đăng Nhập Quản Trị Viên (Admin Authentication)
- **Actor:** Admin (Ban tổ chức).
- **Mô tả:** Xác thực đơn giản, an toàn bằng mật khẩu quản trị để truy cập trang điều hành `/admin`.

### FR-06: Quản Lý Kho Sách (Book Inventory CRUD)
- **Actor:** Admin.
- **Mô tả:**
  - Thêm mới cuốn sách: Nhập tên, tác giả, năm in, nhà xuất bản, thể loại, giá tiền, tóm tắt, câu trích dẫn, ảnh bìa.
  - Tự động sinh mã định danh QR ngắn gọn (slug/uuid).
  - Chỉnh sửa hoặc xóa thông tin sách.

### FR-07: Sinh Mã QR & Xuất Mẫu In Bookmark (QR Code Generator)
- **Actor:** Admin.
- **Mô tả:**
  - Tự động tạo ảnh mã QR (dạng PNG/SVG) trỏ thẳng về URL chi tiết của cuốn sách.
  - Hỗ trợ xem trước và in mẫu thẻ Bookmark kèm mã QR và logo dự án.

### FR-08: Điểm Bán Tại Quầy (Point of Sale Action)
- **Actor:** Admin.
- **Mô tả:** Khi khách thanh toán tại quầy sách, Admin bấm nút chuyển trạng thái sách từ `AVAILABLE` $ightarrow$ `SOLD`. Hệ thống lập tức cập nhật thanh tiến độ từ thiện trên toàn trang.

---

## 2. Quy Tắc Nghiệp Vụ (Business Rules - BR)

* **BR-01 (Biên độ giá bán):** Giá bán mỗi cuốn sách nằm trong khoảng từ 20.000đ đến 100.000đ (phổ biến từ 25.000đ – 40.000đ).
* **BR-02 (Vòng đời trạng thái sách):** Sách chỉ chuyển trạng thái một chiều: `AVAILABLE` $ightarrow$ `SOLD`. Sách đã bán không xóa khỏi cơ sở dữ liệu để bảo đảm tính minh bạch.
* **BR-03 (Công thức quỹ từ thiện):**  
  $$\text{Quỹ tích lũy} = \sum \text{price của các sách có status = 'SOLD'}$$
* **BR-04 (Mã QR duy nhất):** Mỗi cuốn sách có một `qr_code` là chuỗi định danh duy nhất (Unique), không trùng lặp.
* **BR-05 (Lọc lưu bút):** Chặn các từ ngữ thô tục, xúc phạm hoặc nội dung không phù hợp với thuần phong mỹ tục.

---

## 3. Yêu Cầu Phi Chức Năng (Non-Functional Requirements - NFR)

* **NFR-01 (Tốc độ):** Thời gian tải trang chi tiết sách khi quét QR $\le 1.5$ giây trên kết nối di động 3G/4G.
* **NFR-02 (Mobile First):** Tối ưu 100% hiển thị trên mọi kích thước màn hình smartphone phổ biến.
* **NFR-03 (Dung lượng):** Ảnh bìa sách được tự động nén tối ưu (WebP/JPEG) để tiết kiệm băng thông.
* **NFR-04 (Bảo mật):** Khu vực quản trị được bảo vệ bằng session/token an toàn, không lộ API key.
