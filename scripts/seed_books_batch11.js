// Batch 11: 5 cuốn sách mới (BSNM-048 đến BSNM-052)
const books = [
  {
    title: "Hình Học Cao Cấp",
    author: "Văn Như Cương & Kiều Huy Luân",
    publishYear: 1976,
    publisher: "Nhà Xuất Bản Giáo Dục",
    category: "Giáo Trình Khoa Học Tự Nhiên & Toán Học",
    price: 35000,
    conditionNote: "Sách Đại học Sư phạm ấn hành năm 1976, bìa họa tiết quả trám màu xanh lơ cổ điển, có thủ bút lưu niệm của thế hệ sinh viên toán xưa, sờn mép phong trần, ruột nguyên vẹn",
    summary: "Giáo trình toán học kinh điển dành cho hệ Đại học Sư phạm do hai nhà toán học lỗi lạc Văn Như Cương và Kiều Huy Luân biên soạn, NXB Giáo Dục ấn hành năm 1976 — thời điểm non sông vừa thống nhất. Cuốn sách trang bị hệ thống kiến thức nền tảng chuẩn mực về không gian vectơ, không gian Afin và hình học Ơclít. Đây là cuốn sách gối đầu giường của biết bao thế hệ giảng viên và sinh viên ngành Toán Việt Nam.",
    quote: "Toán học không chỉ là những con số và hình hài khô khan, mà là sự hài hòa tuyệt đối của tư duy logic và cái đẹp thuần khiết.",
    coverImageUrl: "/book-hinh-hoc-cao-cap.jpg",
    qrCode: "BSNM-048"
  },
  {
    title: "Lửa Lạnh",
    author: "Nhật Tuấn",
    publishYear: 1988,
    publisher: "Nhà Xuất Bản Phụ Nữ",
    category: "Tiểu Thuyết Xã Hội Đổi Mới",
    price: 35000,
    conditionNote: "Ấn bản năm 1988 của NXB Phụ Nữ, bìa tranh vẽ người phụ nữ u buồn ấn tượng với nét typo chữ đỏ uốn lượn phong cách Đổi Mới, sờn mép thời gian, ruột nguyên vẹn",
    summary: "Tiểu thuyết tâm lý xã hội sâu sắc của nhà văn Nhật Tuấn (tác giả 'Lửa từ những ngôi nhà', 'Hạt đắng'), do NXB Phụ Nữ ấn hành năm 1988 vào giai đoạn văn học Đổi Mới sôi nổi nhất. Tác phẩm đi sâu vào những góc khuất số phận người phụ nữ, những trăn trở về hạnh phúc lứa đôi và cuộc đấu tranh nội tâm giữa đam mê cháy bỏng và sự lạnh giá của những ràng buộc định kiến xã hội.",
    quote: "Có những ngọn lửa không tỏa nhiệt để sưởi ấm, mà âm ỉ cháy lạnh lùng thiêu đốt những khát vọng thầm kín nhất của đời người.",
    coverImageUrl: "/book-lua-lanh.jpg",
    qrCode: "BSNM-049"
  },
  {
    title: "Những Quy Định Của Hội Đồng Nhân Dân & Ủy Ban Nhân Dân Thành Phố Hồ Chí Minh — Quyển 07",
    author: "Sở Tư Pháp Thành Phố Hồ Chí Minh",
    publishYear: 1990,
    publisher: "Sở Tư Pháp TP. Hồ Chí Minh",
    category: "Tư Liệu Pháp Lý & Lịch Sử Đô Thị",
    price: 30000,
    conditionNote: "Tập tư liệu văn bản pháp quy chính thức số lưu trữ 001 của Sở Tư Pháp TP.HCM, bìa giấy mộc viền khung xanh nghiêm cẩn, sờn mép tài liệu lịch sử, ruột nguyên vẹn",
    summary: "Tập văn bản quy phạm pháp luật tập hợp các chỉ thị, quyết định và quy định quan trọng của chính quyền TP.HCM trong giai đoạn phát triển kinh tế xã hội then chốt. Cuốn sách là một chứng tích lịch sử quý báu về quá trình quản lý, chuyển mình và tái thiết đô thị lớn nhất phương Nam trong giai đoạn xóa bỏ bao cấp và hòa nhập kinh tế thị trường.",
    quote: "Pháp luật và kỷ cương là nền tảng vững chắc để xây dựng một thành phố văn minh, nghĩa tình và phát triển bền vững.",
    coverImageUrl: "/book-nhung-quy-dinh-hdnd-ubnd-tphcm-q7.jpg",
    qrCode: "BSNM-050"
  },
  {
    title: "Đất Lành Nơi Người Lính Trở Về",
    author: "Nhiều Tác Giả (Tập đoàn Mai Linh đồng hành)",
    publishYear: 2005,
    publisher: "Nhà Xuất Bản Thanh Niên",
    category: "Ký Sự & Chân Dung Cựu Chiến Binh",
    price: 35000,
    conditionNote: "Ấn bản trang trọng của NXB Thanh Niên phối hợp Tập đoàn Mai Linh, bìa xanh lá đặc trưng với hình ảnh anh bộ đội Cụ Hồ và cô gái thanh niên xung phong, tình trạng rất tốt",
    summary: "Tập ký sự và hồi ức cảm động của nhiều tác giả do NXB Thanh Niên ấn hành, ngợi ca phẩm chất kiên cường của những người lính Cụ Hồ sau ngày rời tay súng trở về với đời thường. Dù mang trên mình những vết thương chiến tranh, họ vẫn tiếp tục cống hiến trên mặt trận lao động sản xuất kinh doanh, gìn giữ khí chất kiên trung, lập nên những kỳ tích mới trên mảnh đất quê hương.",
    quote: "Rời chiến hào về với đất lành quê hương, người lính lại bắt đầu một cuộc chiến mới — cuộc chiến xây dựng đời sống ấm no bằng chính mồ hôi và lòng quả cảm.",
    coverImageUrl: "/book-dat-lanh-noi-nguoi-linh-tro-ve.jpg",
    qrCode: "BSNM-051"
  },
  {
    title: "Truyện Cổ Dân Gian Lào",
    author: "Trần Văn Phách (Sưu tầm & Biên soạn)",
    publishYear: 1987,
    publisher: "Nhà Xuất Bản Trẻ",
    category: "Văn Học Dân Gian Đông Nam Á",
    price: 35000,
    conditionNote: "Thuộc tủ sách Truyện Cổ Dân Gian Thế Giới của NXB Trẻ (1987), bìa tranh vẽ nữ thần Kinnari chim vàng phong cách mỹ thuật dân gian Lào, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tập truyện cổ dân gian đặc sắc của đất nước Triệu Voi do nhà nghiên cứu Trần Văn Phách tuyển chọn và dịch thuật, được NXB Trẻ ấn hành năm 1987. Cuốn sách đưa độc giả vào thế giới thần thoại rực rỡ với các truyền thuyết Phật giáo nguyên thủy, các câu chuyện về nàng công chúa chim Kinnari, và đặc biệt là chuỗi truyện hài hước hóm hỉnh về chàng Xiêng Miệng thông minh — biểu tượng của trí tuệ và sự lạc quan của nhân dân các bộ tộc Lào anh em.",
    quote: "Dưới bóng tháp Thạt Luổng cổ kính, những câu chuyện cổ xưa như dòng nước Mekong hiền hòa nuôi dưỡng tâm hồn bao thế hệ.",
    coverImageUrl: "/book-truyen-co-dan-gian-lao.jpg",
    qrCode: "BSNM-052"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 11: BSNM-048 to BSNM-052)...`);

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
