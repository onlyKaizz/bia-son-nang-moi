# ADR-001: Lựa chọn Kiến trúc SPA Offline-First cho Dự án SSG105

## Trạng thái: Chấp thuận (Approved)

## Bối cảnh
Dự án Bìa Sờn Nắng Mới phục vụ môn học SSG105 tại Đại học FPT. Ứng dụng cần phục vụ hai nhóm đối tượng:
1. Độc giả quét mã QR từ bookmark để đọc câu chuyện sách ngay tức thì mà không bị gián đoạn bởi màn hình đăng nhập.
2. Nhóm sinh viên vận hành bán sách trực tiếp tại quầy có thể đánh dấu trạng thái sách và kiểm tra quỹ tức thời mà không phụ thuộc vào hạ tầng backend phức tạp.

## Quyết định
Xây dựng ứng dụng dạng Single Page Application (SPA) với React + TypeScript + Vite, sử dụng LocalStorage để lưu giữ trạng thái bền vững.

## Hệ quả
- Khởi chạy cực nhanh, mượt mà trên mọi thiết bị di động.
- Không phát sinh chi phí duy trì cơ sở dữ liệu đám mây.
