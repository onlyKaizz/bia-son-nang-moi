# Dự án Bìa Sờn Nắng Mới - SSG105

> **Tên dự án:** Bìa Sờn Nắng Mới  
> **Môn học:** SSG105 - Đại học FPT  
> **Sứ mệnh xã hội:** Thu gom, phục chế sách cũ giai đoạn 1970–2000, truyền tải lòng biết ơn đối với thế hệ cha anh có công với cách mạng; **100% lợi nhuận thu được gửi tặng Trung tâm Điều dưỡng Thương binh và Người có công Long Đất** (Long Hải, Bà Rịa - Vũng Tàu).

---

## 📖 1. Giới thiệu Dự án

**Bìa Sờn Nắng Mới** là một sáng kiến nhân văn kết hợp giữa bảo tồn văn hóa đọc sách xưa và hành động tri ân sâu sắc:
- **Bìa Sờn**: Những cuốn sách quý xuất bản từ những năm 1970 đến 2000 mang theo hơi thở lịch sử, màu giấy thời gian và những câu chuyện chiến đấu anh dũng của các chiến sĩ cách mạng. Sách được các bạn sinh viên thu gom và phục chế nhẹ nhàng, giữ trọn nét hoài cổ.
- **Nắng Mới**: Ánh nắng của lòng biết ơn, năng lượng tích cực của thế hệ trẻ hướng về các bác thương binh, bệnh binh, người có công với đất nước.
- **Giá bán**: Cố định từ **25.000đ đến 40.000đ** mỗi cuốn để ai cũng có thể tiếp cận và chung tay góp sức.

---

## 🎯 2. Mục tiêu Thiện nguyện

Toàn bộ doanh thu trừ chi phí phục chế cơ bản (100% lợi nhuận) được chuyển trực tiếp tới:
**Trung tâm Điều dưỡng Thương binh và Người có công Long Đất**  
*(Khu phố Hải Sơn, Thị trấn Long Hải, Huyện Long Điền, Tỉnh Bà Rịa - Vũng Tàu)*  
Nơi đang điều dưỡng, nuôi dưỡng và chăm sóc các thương binh nặng, người có công cách mạng khu vực phía Nam.

---

## 🏛️ 3. Cấu trúc Dự án (Quy chuẩn như Mâm Xanh)

```text
bia-son-nang-moi/
├── .agents/                 # Quy chuẩn và chính sách dành cho AI Agent
├── .github/                 # Workflows CI, Issue templates, PR template, Labels
├── .vscode/                 # Cấu hình IDE VS Code tối ưu cho dự án
├── app/
│   ├── README.md
│   └── biason-frontend/     # Ứng dụng web React 18, TypeScript, Tailwind CSS
├── database/
│   ├── schema.sql           # Lược đồ cơ sở dữ liệu DDL
│   ├── sample-data.sql      # Dữ liệu mẫu 10 sách xưa 1970-2000 & chiến dịch
│   └── queries.sql          # Các câu lệnh SQL kiểm tra tồn kho & số dư quỹ
├── docs/                    # Hệ thống tài liệu kỹ thuật & nghiệp vụ chuẩn mực
│   ├── README.md            # Sổ đăng ký tài liệu (Documentation Register)
│   ├── api/                 # Quy chuẩn API & OpenAPI 3.0 specification
│   ├── architecture/        # Kiến trúc C4, ngăn xếp công nghệ
│   ├── decisions/           # Bản ghi quyết định kiến trúc (ADR)
│   ├── diagrams/            # Sơ đồ ERD, C4, UseCase
│   ├── requirements/        # PRD, SRS và chi tiết các yêu cầu FR/BR/NFR
│   ├── research/            # Báo cáo nghiên cứu giá trị sách cũ & tri ân
│   └── testing/             # Chiến lược kiểm thử phần mềm
├── scripts/                 # Scripts tự động khởi chạy môi trường dev và build
├── AGENTS.md                # Điểm khởi đầu quy định cho AI Agents
├── CHANGELOG.md             # Nhật ký phiên bản (Keep a Changelog)
├── CONTRIBUTING.md          # Hướng dẫn đóng góp & Git Flow của nhóm
├── docker-compose.yml       # Tệp cấu hình chạy vật chứa Docker
├── LICENSE                  # Giấy phép nguồn mở MIT
└── README.md
```

---

## 🚀 4. Khởi chạy Ứng dụng Web

### Yêu cầu tiên quyết:
- Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 18+ hoặc 20+).

### Các bước khởi động:
1. Mở terminal tại thư mục dự án và chuyển vào thư mục frontend:
   ```bash
   cd app/biason-frontend
   ```
2. Cài đặt thư viện:
   ```bash
   npm install
   ```
3. Chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
4. Truy cập trình duyệt: **`http://localhost:3000`**

### Quản trị viên:
- Bấm vào nút **Quản trị viên** góc trên bên phải.
- Mã PIN mặc định: `1975`.
- Bạn có thể chuyển đổi trạng thái sách sang `ĐÃ BÁN` để thanh tiến độ quỹ tự động tăng tiền quyên góp!
