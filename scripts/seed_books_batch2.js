const books = [
  {
    title: "Thành Phố Hồ Chí Minh 10 Năm",
    author: "Nguyễn Văn Linh",
    publishYear: 1985,
    publisher: "NXB Sự Thật Hà Nội",
    category: "Chính Trị & Xây Dựng Đất Nước",
    price: 30000,
    conditionNote: "Bìa sờn mép nguyên bản năm 1985 của NXB Sự Thật, giấy ngả vàng thời bao cấp, ruột nguyên vẹn, gáy vững",
    summary: "Tập hợp các bài viết, phát biểu quan trọng của đồng chí Nguyễn Văn Linh khi còn là Bí thư Thành ủy TP. Hồ Chí Minh, tổng kết chặng đường 10 năm xây dựng, cải tạo và phát triển kinh tế - xã hội của thành phố sau ngày giải phóng (1975–1985). Cuốn sách phản ánh sinh động những trăn trở, tháo gỡ cơ chế và bài học kinh nghiệm quý báu mở đường cho thời kỳ Đổi Mới.",
    quote: "Mười năm xây dựng thành phố mang tên Bác là mười năm thử thách lớn lao, nhưng cũng là mười năm hun đúc bản lĩnh và ý chí của cả một thế hệ.",
    coverImageUrl: "",
    qrCode: "BSNM-006"
  },
  {
    title: "Đổi Mới Và Chính Sách Xã Hội Văn Hóa",
    author: "Trần Độ",
    publishYear: 1988,
    publisher: "NXB Thành Phố Hồ Chí Minh",
    category: "Chính Luận & Tư Tưởng Đổi Mới",
    price: 35000,
    conditionNote: "Ấn bản gốc 1988, bìa thiết kế đồ họa mũi tên cam - đỏ biểu tượng Đổi Mới, sờn mép cổ kính, ruột nguyên vẹn",
    summary: "Tác phẩm chính luận quan trọng của Trung tướng Trần Độ – nguyên Trưởng ban Văn hóa Văn nghệ Trung ương, Phó Chủ tịch Quốc hội. Cuốn sách trình bày góc nhìn đột phá về chính sách xã hội, cởi trói tư duy văn hóa, nghệ thuật và báo chí, kêu gọi dân chủ hóa và tôn trọng quy luật sáng tạo trong giai đoạn đầu đất nước bước vào công cuộc Đổi Mới.",
    quote: "Đổi mới không chỉ là thay đổi cơ chế kinh tế, mà trước hết phải là cuộc giải phóng tư duy văn hóa và tôn trọng nhân cách con người.",
    coverImageUrl: "",
    qrCode: "BSNM-007"
  },
  {
    title: "Khoảng Rừng Có Những Ngôi Sao",
    author: "Văn Lê",
    publishYear: 1985,
    publisher: "NXB Phụ Nữ",
    category: "Truyện Dài & Văn Học Kháng Chiến",
    price: 35000,
    conditionNote: "Ấn bản gốc 1985 NXB Phụ Nữ, bìa giấy craft in typo xưa có họa tiết ngôi sao, gáy chắc chắn, trang ruột đẹp",
    summary: "Truyện dài cảm động của nhà văn Văn Lê (Lê Chí Thụy) về những năm tháng chiến tranh biên giới Tây Nam. Tác phẩm khắc họa số phận những nữ thanh niên xung phong, người lính trẻ kiên cường giữa rừng già biên ải, nơi tình đồng đội, tình yêu và phẩm giá con người tỏa sáng rực rỡ như những vì sao trên nền trời rừng thẳm.",
    quote: "Giữa khoảng rừng thăm thẳm của bom đạn và hy sinh, những ngôi sao của niềm tin và tình người chưa bao giờ tắt.",
    coverImageUrl: "",
    qrCode: "BSNM-008"
  },
  {
    title: "Cù Lao Tràm",
    author: "Nguyễn Mạnh Tuấn",
    publishYear: 1985,
    publisher: "NXB Văn Nghệ TP. Hồ Chí Minh",
    category: "Tiểu Thuyết Xã Hội Hiện Thực",
    price: 35000,
    conditionNote: "Ấn bản Quyển I năm 1985, bìa mộc in vệt sóng xanh miền đồng bằng, gáy nguyên vẹn, giấy ngả màu thời gian",
    summary: "Tiểu thuyết nổi tiếng nằm trong bộ ba tác phẩm đỉnh cao của Nguyễn Mạnh Tuấn (cùng 'Đứng trước biển' và 'Những khoảng cách còn lại'). Sách phản ánh chân thực cuộc đấu tranh quyết liệt giữa lối tư duy bảo thủ, bao cấp trì trệ với tinh thần dám nghĩ dám làm, đổi mới phương thức sản xuất tại nông thôn miền Tây Nam Bộ những năm sau giải phóng.",
    quote: "Cù lao giữa dòng sông như một ốc đảo thu nhỏ của thời đại, nơi mọi trăn trở và khát vọng đổi thay đều cuộn sóng.",
    coverImageUrl: "",
    qrCode: "BSNM-009"
  },
  {
    title: "Thư Vào Nam",
    author: "Lê Duẩn",
    publishYear: 1985,
    publisher: "NXB Sự Thật Hà Nội",
    category: "Lịch Sử & Tư Liệu Kháng Chiến",
    price: 35000,
    conditionNote: "Ấn bản lần đầu năm 1985 NXB Sự Thật, bìa ngả vàng trầm mặc, chữ in typo trang trọng, ruột đầy đủ không rách",
    summary: "Tác phẩm tư liệu lịch sử vô giá tập hợp các bức thư, bức điện chỉ đạo chiến lược của Bí thư thứ nhất Ban Chấp hành Trung ương Đảng Lê Duẩn gửi Trung ương Cục miền Nam và các chiến trường trong suốt cuộc kháng chiến chống Mỹ (1961 - 1975). Tác phẩm minh chứng cho tư duy quân sự, chính trị sắc bén và tình cảm sâu nặng hướng về đồng bào, chiến sĩ miền Nam ruột thịt.",
    quote: "Những bức thư gửi vào miền Nam là sự kết tinh của đường lối độc lập tự chủ và tấm lòng son sắt hướng về ngày toàn thắng non sông.",
    coverImageUrl: "",
    qrCode: "BSNM-010"
  }
];

async function seed() {
  console.log("Seeding 5 new books (batch 2) to Render Backend...");
  for (const b of books) {
    try {
      const res = await fetch("https://bia-son-nang-moi.onrender.com/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(b)
      });
      const data = await res.json();
      console.log("Inserted:", b.title, "-> status:", res.status, "bookId:", data.data?.bookId);
    } catch (e) {
      console.error("Error inserting", b.title, e);
    }
  }
  console.log("Done!");
}

if (require.main === module) {
  seed();
}

module.exports = books;
