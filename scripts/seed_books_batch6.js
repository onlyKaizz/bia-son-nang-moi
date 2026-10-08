const books = [
  {
    title: "Mai Phục Trong Đêm Hè",
    author: "Hồ Anh Thái",
    publishYear: 1989,
    publisher: "NXB Kim Đồng",
    category: "Truyện Dài & Tuổi Trẻ Đổi Mới",
    price: 35000,
    conditionNote: "Ấn bản nguyên gốc năm 1989 của NXB Kim Đồng (logo chú mèo mộc mạc), bìa tranh sơn dầu đêm hè huyền bí pha sắc cam rực lửa, sờn góc gáy thời bao cấp",
    summary: "Truyện dài xuất sắc thời kỳ đầu cầm bút của nhà văn Hồ Anh Thái – một trong những cây bút tiên phong hàng đầu của văn học Việt Nam đương đại thời kỳ Đổi Mới. Tác phẩm kể về những chuyến phiêu lưu, trăn trở và nhiệt huyết tuổi trẻ của thế hệ thanh niên trong một mùa hè đầy thử thách và bí ẩn, qua ngòi bút sắc sảo, mới mẻ và giàu chất thơ.",
    quote: "Đêm hè không chỉ có sự tĩnh lặng của bóng tối, mà còn ẩn chứa những ngọn lửa âm ỉ của khát vọng và những cuộc mai phục số phận.",
    coverImageUrl: "/book-mai-phuc-trong-dem-he.jpg",
    qrCode: "BSNM-026"
  },
  {
    title: "Lê Vĩnh Hòa — Tuyển Tập",
    author: "Lê Vĩnh Hòa (Đoàn Thế Hối)",
    publishYear: 1986,
    publisher: "NXB Tổng Hợp Hậu Giang & NXB Văn Nghệ TP.HCM",
    category: "Văn Học Kháng Chiến Nam Bộ",
    price: 35000,
    conditionNote: "Ấn bản năm 1986 phối hợp giữa NXB Tổng Hợp Hậu Giang và Văn Nghệ TP.HCM, bìa hoa văn gấm cổ kính màu vàng đất, dán gáy bảo quản nguyên vẹn",
    summary: "Tuyển tập công phu tập hợp trọn vẹn các truyện ngắn, ký sự, tùy bút và thơ của nhà văn liệt sĩ Lê Vĩnh Hòa (Đoàn Thế Hối, 1932–1967) – người được truy tặng Giải thưởng Nhà nước về Văn học Nghệ thuật. Tác phẩm phản ánh chân thực, xúc động khí phách bất khuất và tình cảm nồng hậu của quân dân miền Tây Nam Bộ trong kháng chiến chống Mỹ.",
    quote: "Mỗi trang viết của người cầm bút - chiến sĩ là một tấc đất quê hương được gìn giữ bằng máu và tình yêu thương vô bờ bến.",
    coverImageUrl: "/book-le-vinh-hoa-tuyen-tap.jpg",
    qrCode: "BSNM-027"
  },
  {
    title: "Truyện Cổ Dân Gian Lào",
    author: "Nhiều Tác Giả (Văn Tiến Đào dịch & tuyển chọn)",
    publishYear: 1986,
    publisher: "NXB Kim Đồng",
    category: "Truyện Cổ Tích & Văn Hóa Dân Gian",
    price: 25000,
    conditionNote: "Thuộc Tủ Sách Truyện Cổ Dân Gian NXB Kim Đồng, bìa vàng rực rỡ minh họa nàng Kinari/tiên nữ cánh chim huyền ảo, giấy bãi bằng ngả màu cổ tích",
    summary: "Tập hợp những câu chuyện cổ tích và thần thoại dân gian đặc sắc nhất của xứ sở Triệu Voi (Lào) được NXB Kim Đồng ấn hành cho thiếu nhi Việt Nam. Cuốn sách mở ra thế giới thần tiên mầu nhiệm về tình bạn, lòng nhân ái, sự thủy chung và tình đoàn kết gắn bó keo sơn giữa hai dân tộc anh em Việt - Lào.",
    quote: "Truyện cổ tích là dòng suối mát lành nuôi dưỡng tâm hồn trẻ thơ về cái thiện, lòng nhân ái và ước mơ công bằng.",
    coverImageUrl: "/book-truyen-co-dan-gian-lao.jpg",
    qrCode: "BSNM-028"
  },
  {
    title: "Con Hổ Vùng Sangrila (Der Tiger von Shangri-La)",
    author: "Ha-ry Tuyr-kơ (Harry Thürk)",
    publishYear: 1984,
    publisher: "NXB Thuận Hóa",
    category: "Tiểu Thuyết Phiêu Lưu & Tình Báo",
    price: 35000,
    conditionNote: "Ấn bản tiếng Việt năm 1984 của NXB Thuận Hóa, bìa tranh vẽ người đàn ông kiên nghị bên tòa bảo tháp phương Đông huyền bí, sờn mép phong trần",
    summary: "Tiểu thuyết trinh thám phiêu lưu ly kỳ của nhà văn nổi tiếng người Đức Harry Thürk (nguyên tác 'Der Tiger von Shangri-La'). Bối cảnh trải dài nơi vùng núi non hiểm trở Sangrila bí ẩn ở Nam Á, theo chân cuộc đối đầu căng thẳng giữa những điệp viên quốc tế và các thế lực ngầm nhằm bảo vệ bí mật sống còn.",
    quote: "Nơi đỉnh non cao mù sương, bản lĩnh và lòng quả cảm của con người mới là thứ vũ khí lợi hại nhất trước mọi hiểm nguy rình rập.",
    coverImageUrl: "/book-con-ho-vung-sangrila.jpg",
    qrCode: "BSNM-029"
  },
  {
    title: "Mao — Tấn Thảm Kịch Của Đảng Cộng Sản Trung Quốc (Tập III)",
    author: "Viện Mác - Lênin Liên Xô (Ban Biên tập biên dịch)",
    publishYear: 1985,
    publisher: "NXB Thông Tin Lý Luận",
    category: "Lịch Sử & Tư Liệu Chính Trị",
    price: 35000,
    conditionNote: "Ấn bản Tập III năm 1985 của NXB Thông Tin Lý Luận, bìa giấy mộc màu nâu đất in typo chữ lớn nguyên bản, mép gáy sờn nhẹ, ruột sách nguyên vẹn",
    summary: "Tập III trong công trình nghiên cứu và khảo cứu lịch sử chính trị đồ sộ do NXB Thông Tin Lý Luận ấn hành vào giữa thập niên 1980. Cuốn sách cung cấp góc nhìn tư liệu lịch sử quan trọng về các biến động nội bộ phức tạp, đường lối và những giai đoạn thăng trầm của lịch sử phong trào cộng sản quốc tế giai đoạn cận hiện đại.",
    quote: "Nhìn thẳng vào những thảm kịch và bài học của lịch sử là con đường duy nhất để xây dựng một tương lai chân chính và tiến bộ.",
    coverImageUrl: "/book-mao-tan-tham-kich.jpg",
    qrCode: "BSNM-030"
  }
];

async function seedBatch6() {
  console.log("🚀 Bắt đầu thêm 5 cuốn sách Đợt 6 vào Database Render...");
  let successCount = 0;
  
  for (const book of books) {
    try {
      const res = await fetch("https://bia-son-nang-moi.onrender.com/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      });
      
      if (res.ok) {
        const json = await res.json();
        console.log(`✅ Đã thêm: ${book.title} (ID: ${json.data?.id || 'OK'})`);
        successCount++;
      } else {
        const text = await res.text();
        console.error(`❌ Lỗi khi thêm ${book.title}:`, res.status, text);
      }
    } catch (err) {
      console.error(`❌ Ngoại lệ khi thêm ${book.title}:`, err.message);
    }
  }

  console.log(`\n🎉 Hoàn thành: Đã thêm ${successCount}/${books.length} cuốn sách đợt 6.`);
}

seedBatch6();
