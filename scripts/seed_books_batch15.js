// Batch 15: 5 cuốn sách mới (BSNM-068 đến BSNM-072)
const books = [
  {
    title: "Những Dấu Vết Lẩn Trốn (Tập Truyện Hình Sự)",
    author: "Nguyễn Mạnh Tuấn, Nhật Tuấn, Trần Văn Tuấn",
    publishYear: 1987,
    publisher: "Sở Văn Hóa Thông Tin Vũng Tàu — Côn Đảo",
    category: "Truyện Hình Sự & Vụ Án",
    price: 35000,
    conditionNote: "Ấn bản năm 1987 của Sở VH-TT Vũng Tàu - Côn Đảo, bìa đỏ gạch in tranh minh họa vụ án phong cách khắc nét thời bao cấp, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tập truyện hình sự đặc sắc quy tụ ba cây bút văn xuôi nổi tiếng: Nguyễn Mạnh Tuấn, Nhật Tuấn và Trần Văn Tuấn, do Sở VH-TT Vũng Tàu - Côn Đảo ấn hành năm 1987. Cuốn sách tái hiện những vụ án ly kỳ, những cuộc điều tra phá án truy bắt tội phạm gay cấn của lực lượng công an nhân dân, đồng thời đi sâu phân tích tâm lý tội phạm và những cạm bẫy cám dỗ trong đời sống xã hội thời kỳ đầu Đổi Mới.",
    quote: "Dù thủ đoạn có tinh vi đến đâu, tội ác luôn để lại những dấu vết lẩn trốn không thể xóa nhòa trước ánh sáng công lý.",
    coverImageUrl: "/book-nhung-dau-vet-lan-tron.jpg",
    qrCode: "BSNM-068"
  },
  {
    title: "Cú Móc Vào Tim (Truyện Tình Báo Thể Thao)",
    author: "Noël Vexin (Nôen Vêcxin)",
    publishYear: 1984,
    publisher: "Nhà Xuất Bản Thể Dục Thể Thao",
    category: "Tiểu Thuyết Tình Báo & Trinh Thám Quốc Tế",
    price: 35000,
    conditionNote: "Ấn bản năm 1984 của NXB Thể Dục Thể Thao, bìa tranh vẽ đồ họa Khải Hoàn Môn Paris và võ sĩ quyền anh ấn tượng, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tiểu thuyết trinh thám tình báo thể thao hấp dẫn của nhà văn Pháp Noël Vexin do NXB Thể Dục Thể Thao ấn hành năm 1984. Lấy bối cảnh sàn đấu quyền Anh quốc tế và những âm mưu tình báo ngầm tại châu Âu, câu chuyện xoay quanh võ sĩ thượng đài vô tình bị cuốn vào vòng xoáy của các tổ chức tội phạm xuyên quốc gia, nơi mỗi trận so găng không chỉ vì danh hiệu mà là cuộc chiến sinh tử giữ lấy mạng sống.",
    quote: "Trên võ đài hay trên đường đời, đòn đánh hiểm hóc nhất không nhắm vào thể xác mà nhắm thẳng vào trái tim và ý chí con người.",
    coverImageUrl: "/book-cu-moc-vao-tim.jpg",
    qrCode: "BSNM-069"
  },
  {
    title: "Cuộc Thử Thách Trí Tuệ",
    author: "Nhiều Tác Giả",
    publishYear: 1986,
    publisher: "Nhà Xuất Bản Khoa Học Và Kỹ Thuật",
    category: "Truyện Khoa Học Viễn Tưởng & Giả Tưởng",
    price: 35000,
    conditionNote: "Ấn bản năm 1986 của NXB Khoa Học Và Kỹ Thuật, bìa tranh vẽ cách điệu bộ não và tư duy con người phong cách đồ họa viễn tưởng thập niên 80, sờn mép thời gian, ruột nguyên vẹn",
    summary: "Tuyển tập truyện ngắn khoa học viễn tưởng đặc sắc do NXB Khoa Học Và Kỹ Thuật ấn hành năm 1986. Cuốn sách mở ra những chân trời tưởng tượng kỳ thú về tương lai: trí tuệ nhân tạo, du hành không gian, những bí ẩn của bộ não con người và những thử thách đạo đức khi khoa học kỹ thuật tiến vượt bậc, thôi thúc niềm đam mê khám phá của bao thế hệ thanh thiếu niên Việt Nam.",
    quote: "Trí tưởng tượng chính là đôi cánh đưa khoa học vượt qua mọi giới hạn của hiện thực để chạm tới tương lai.",
    coverImageUrl: "/book-cuoc-thu-thach-tri-tue.jpg",
    qrCode: "BSNM-070"
  },
  {
    title: "Một Lễ Cưới Khác Thường (Le Secret de Wilhelm Storitz)",
    author: "Jules Verne (Giuyn Véc-nơ)",
    publishYear: 1988,
    publisher: "Nhà Xuất Bản Trẻ",
    category: "Tiểu Thuyết Phiêu Lưu & Giả Tưởng Kinh Điển",
    price: 35000,
    conditionNote: "Ấn bản năm 1988 của NXB Trẻ (Bạch Lan dịch), bìa tranh vẽ cô dâu trong trang phục cưới cùng bóng hình nhân vật bí ẩn đầy kịch tính, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tiểu thuyết kỳ ảo hấp dẫn của đại văn hào Pháp Jules Verne — người cha đẻ của dòng văn học khoa học viễn tưởng, do Bạch Lan dịch và NXB Trẻ ấn hành năm 1988. Câu chuyện mở ra tại một thị trấn cổ kính ven sông Danube, nơi đám cưới hạnh phúc của chàng kỹ sư Marc Roderich bất ngờ bị đe dọa bởi Wilhelm Storitz — kẻ sở hữu bí mật về loại thuốc tàng hình ghê gớm từ người cha giả kim thuật.",
    quote: "Tình yêu chân chính và lòng dũng cảm sẽ luôn tìm ra ánh sáng để vạch trần những âm mưu đen tối núp dưới bóng vô hình.",
    coverImageUrl: "/book-mot-le-cuoi-khac-thuong.jpg",
    qrCode: "BSNM-071"
  },
  {
    title: "Gặp Lại Giữa Đời",
    author: "Nhiều Tác Giả (Tuyển Tập Nước Ngoài)",
    publishYear: 1986,
    publisher: "Nhà Xuất Bản Văn Nghệ Cần Thơ",
    category: "Truyện Ngắn Nước Ngoài Chọn Lọc",
    price: 35000,
    conditionNote: "Ấn bản năm 1986 của NXB Văn Nghệ Cần Thơ, bìa giấy mộc nâu đất in typo tiêu đề giản dị mộc mạc thời bao cấp, vết sờn mép phong trần, ruột nguyên vẹn",
    summary: "Tuyển tập truyện ngắn văn học nước ngoài chọn lọc do NXB Văn Nghệ Cần Thơ ấn hành năm 1986. Tập sách quy tụ những tác phẩm giàu tính nhân văn của các tác giả quốc tế, khắc họa những cuộc tao ngộ bất ngờ giữa dòng đời xuôi ngược, những ký ức không phai và sức mạnh nâng đỡ diệu kỳ của tình yêu thương con người giữa những thăng trầm thời đại.",
    quote: "Giữa biển đời mênh mông vạn lối, gặp lại nhau một lần đã là duyên phận, thấu hiểu nhau trọn đời chính là phúc lành.",
    coverImageUrl: "/book-gap-lai-giua-doi.jpg",
    qrCode: "BSNM-072"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 15: BSNM-068 to BSNM-072)...`);

  for (const b of books) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(b)
      });
      if (res.ok) {
        const created = await res.json();
        console.log(`✅ Seeded successfully: ${b.qrCode} - "${b.title}" (ID: ${created.id})`);
      } else {
        const err = await res.text();
        console.error(`❌ Failed ${b.qrCode} - "${b.title}": ${res.status} ${err}`);
      }
    } catch (e) {
      console.error(`❌ Network error for ${b.qrCode}:`, e.message);
    }
  }
}

seed();
