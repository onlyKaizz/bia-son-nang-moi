# Product Requirements Document (PRD) — Bìa Sờn Nắng Mới

> **Dự án:** Bìa Sờn Nắng Mới  
> **Môn học:** SSG105 (Giao tiếp & Kỹ năng xã hội) — Đại học FPT  
> **Phiên bản:** v1.0.0  
> **Đơn vị thụ hưởng:** Trung tâm Điều dưỡng Thương binh và Người có công Long Đất  

---

## 1. Tầm Nhìn & Sứ Mệnh (Vision & Mission)

### 1.1 Bối cảnh
Trong thời đại số hóa, giới trẻ và sinh viên ít có cơ hội tiếp xúc trực tiếp với các ấn phẩm sách báo xuất bản trong các thời kỳ kháng chiến và hậu chiến (1970 – 2000). Những cuốn sách in trên giấy bãi bằng, bìa sờn theo năm tháng chứa đựng không chỉ tri thức mà còn là ký ức lịch sử hào hùng, sự hy sinh thầm lặng của các chiến sĩ và thương bệnh binh vì nền độc lập tự do của Tổ quốc.

### 1.2 Tuyên ngôn sứ mệnh
**Bìa Sờn Nắng Mới** không chỉ là một gian hàng bán sách cũ gây quỹ đơn thuần, mà là một **chiến dịch truyền thông xã hội kết hợp công nghệ**:
- Đưa những cuốn sách cũ giai đoạn 1970–2000 trở lại với đời sống sinh viên.
- Khơi gợi lòng biết ơn và sự thấu hiểu của thế hệ trẻ đối với người có công với cách mạng.
- Gây quỹ ủng hộ: **100% lợi nhuận thu được được gửi tặng trực tiếp tới Trung tâm Điều dưỡng Thương binh và Người có công Long Đất** (thị trấn Long Hải, tỉnh Bà Rịa – Vũng Tàu).

---

## 2. Mục Tiêu & Chỉ Số Đóng Góp (KPIs)

1. **Về văn hóa & cộng đồng:**
   - Thu gom và phục hồi, tân trang tối thiểu **50 – 100 cuốn sách cũ** giai đoạn 1970–2000.
   - 100% sách được gắn Bookmark in mã QR tra cứu lịch sử, hoàn cảnh sáng tác và trích dẫn ý nghĩa.
2. **Về tài chính & từ thiện:**
   - Mục tiêu doanh thu: 2.500.000đ – 4.000.000đ.
   - Mức giá san sẻ: 25.000đ – 40.000đ/cuốn.
   - Minh bạch 100% dòng tiền quyên góp thời gian thực trên website.
3. **Về công nghệ & trải nghiệm:**
   - Trải nghiệm quét mã QR không cần đăng nhập, hiển thị chi tiết sách trong dưới 1.5 giây.
   - Sổ lưu bút số thu hút tối thiểu 30+ lời nhắn tri ân gửi tới các bác thương binh.

---

## 3. Chân Dung Người Dùng (User Personas)

| Persona | Đặc điểm | Nhu cầu chính |
|---|---|---|
| **Bạn đọc / Người mua sách** | Sinh viên FPT, giảng viên, người yêu sách cũ | Quét mã QR xem nội dung sách tại chỗ, tìm kiếm sách theo sở thích, ủng hộ từ thiện, viết lưu bút |
| **Ban tổ chức (Admin)** | Thành viên nhóm thực hiện dự án SSG105 | Nhập thông tin sách, tạo và in mã QR, cập nhật trạng thái "Đã bán" khi khách mua, xem thống kê quỹ |

---

## 4. Phạm Vi Tính Năng MVP

1. **Dành cho Bạn đọc (Public - Không cần đăng nhập):**
   - Quét QR xem ngay chi tiết cuốn sách (ảnh bìa sờn, tác giả, năm in, tóm tắt, trích dẫn truyền cảm hứng).
   - Xem bảng tiến độ quyên góp thời gian thực tới Trung tâm Long Đất.
   - Duyệt danh mục sách, lọc theo thể loại và tình trạng.
   - Gửi lời nhắn tri ân vào Sổ lưu bút.
2. **Dành cho Ban tổ chức (Admin - Xác thực mật khẩu):**
   - Đăng nhập bảo mật.
   - Thêm/sửa/xóa sách và tải ảnh bìa.
   - Tự động sinh mã QR và xem trước bookmark in.
   - Đổi trạng thái sách sang `SOLD` chỉ với 1 chạm.
   - Bảng tổng kết số lượng và doanh thu tự động.
