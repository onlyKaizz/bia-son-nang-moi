# Chiến Lược Kiểm Thử (Test Strategy)

## 1. Phạm vi
- Kiểm thử tĩnh: TypeScript Compiler (`tsc --noEmit`)
- Kiểm thử đóng gói: Vite Production Build (`vite build`)
- Kiểm thử luồng nghiệp vụ:
  - Luồng xem chi tiết sách & quét QR
  - Luồng gửi lưu bút
  - Luồng Admin đổi trạng thái `AVAILABLE` -> `SOLD` và kiểm tra thanh tiến độ quỹ
