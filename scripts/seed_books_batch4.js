const books = [
  {
    title: "Đấu Tranh Chống Tệ Quan Liêu",
    author: "Thiện Nhân",
    publishYear: 1983,
    publisher: "NXB Sự Thật Hà Nội",
    category: "Chính Luận & Tư Tưởng Xã Hội",
    price: 30000,
    conditionNote: "Ấn bản nguyên gốc năm 1983 của NXB Sự Thật, bìa giấy mộc màu nâu đất, chữ in typo đỏ - đen nổi bật, sờn mép thời bao cấp, gáy chắc chắn",
    summary: "Tác phẩm chính luận quan trọng của tác giả Thiện Nhân do NXB Sự Thật ấn hành năm 1983. Cuốn sách thẳng thắn mổ xẻ hiện tượng quan liêu, hách dịch, giấy tờ trì trệ trong bộ máy hành chính và quản lý thời kỳ bao cấp; đề xuất các giải pháp nâng cao kỷ luật, phục vụ nhân dân, mở đường cho tư duy cải cách trước thềm Đại hội Đổi Mới 1986.",
    quote: "Kiên quyết đấu tranh chống tệ quan liêu là điều kiện tiên quyết để bảo vệ niềm tin của nhân dân và xây dựng bộ máy phụng sự đất nước.",
    coverImageUrl: "/book-dau-tranh-chong-te-quan-lieu.jpg",
    qrCode: "BSNM-016"
  },
  {
    title: "Nếu Ngày Mai Anh Chết",
    author: "Luítx Rôhêliô Nôghêrátx (Luis Rogelio Nogueras)",
    publishYear: 1987,
    publisher: "NXB Thành Phố Hồ Chí Minh",
    category: "Tiểu Thuyết Trinh Thám & Tình Báo",
    price: 35000,
    conditionNote: "Ấn bản tiếng Việt năm 1987, bìa tranh vẽ đồ họa trừu tượng phong cách mỹ thuật thập niên 80, sờn mép mộc mạc, giấy bãi bằng vàng đều",
    summary: "Kiệt tác tiểu thuyết trinh thám tình báo kinh điển của nhà văn Cuba lừng danh Luis Rogelio Nogueras (nguyên tác 'Y si mañana me muero'). Câu chuyện nghẹt thở xoay quanh những chiến sĩ tình báo hoạt động bí mật, đối đầu căng thẳng với mạng lưới gián điệp tinh vi, khắc họa sự hy sinh thầm lặng và lòng trung thành kiên định.",
    quote: "Dù ngày mai có phải hy sinh, lý tưởng cao cả và tình yêu cuộc sống này sẽ mãi là ngọn lửa cháy rực không bao giờ tắt.",
    coverImageUrl: "/book-neu-ngay-mai-anh-chet.jpg",
    qrCode: "BSNM-017"
  },
  {
    title: "Mùa Ve Trong Thành Phố",
    author: "Nhiều Tác Giả (Tủ Sách Tuổi Mới Lớn)",
    publishYear: 2004,
    publisher: "NXB Trẻ",
    category: "Truyện Ngắn & Tuổi Học Trò",
    price: 25000,
    conditionNote: "Ấn bản Tủ sách Tuổi Mới Lớn của NXB Trẻ, bìa màu đỏ hoa phượng vàng hoài niệm, sờn mép nhẹ, ruột sách sạch đẹp nguyên vẹn",
    summary: "Tập truyện ngắn tinh khôi thuộc Tủ sách Tuổi Mới Lớn của NXB Trẻ. Tác phẩm gom góp những câu chuyện học trò trong sáng, những rung động đầu đời và kỷ niệm mùa hè rộn rã tiếng ve trong lòng phố thị, mang đến cho người đọc cảm xúc bồi hồi về một thời áo trắng đã qua.",
    quote: "Tiếng ve râm ran đánh thức góc phố quen, nhắc nhở ta về một mùa hè trong veo với những ước mơ đầu đời không thể nào quên.",
    coverImageUrl: "/book-mua-ve-trong-thanh-pho.jpg",
    qrCode: "BSNM-018"
  },
  {
    title: "Jăng Krixtốp (Jean-Christophe) — Tập I",
    author: "Rômanh Rôlăng (Romain Rolland)",
    publishYear: 1983,
    publisher: "NXB Văn Học",
    category: "Văn Học Kinh Điển Thế Giới",
    price: 40000,
    conditionNote: "Ấn bản Tập I kinh điển của NXB Văn Học, bìa vàng - xanh rêu sờn gáy cổ kính, dấu thư viện xưa, giấy ngả vàng nhuốm màu lịch sử",
    summary: "Bộ tiểu thuyết sử thi trường thiên vĩ đại gồm 10 tập của đại văn hào Pháp Romain Rolland – tác phẩm đã mang về cho ông Giải Nobel Văn học năm 1915. Sách khắc họa cuộc đời người nhạc sĩ thiên tài Jean-Christophe từ thuở ấu thơ đến lúc trưởng thành, là bản anh hùng ca bất diệt về nghệ thuật, khát vọng tự do và tình bác ái nhân loại.",
    quote: "Tạo ra cái đẹp là chinh phục cái chết. Hãy sống và sáng tạo bằng tất cả ngọn lửa cháy bỏng trong trái tim mình.",
    coverImageUrl: "/book-jang-krixtop.jpg",
    qrCode: "BSNM-019"
  },
  {
    title: "Chiếc Khuy Đồng",
    author: "Ô-va-lốp (Lev Ovalov)",
    publishYear: 1982,
    publisher: "NXB Thuận Hóa",
    category: "Tiểu Thuyết Tình Báo Kinh Điển",
    price: 35000,
    conditionNote: "Ấn bản năm 1982 của NXB Thuận Hóa, bìa tranh vẽ người mang kính đen phong cách trinh thám Xô Viết, sờn rách mép gáy mộc mạc",
    summary: "Cuốn tiểu thuyết tình báo kinh điển của nhà văn Liên Xô Lev Ovalov dựa trên sự kiện có thật tại thành phố Riga đầu Thế chiến II. Tác phẩm kể về cuộc đấu trí vô cùng căng thẳng, mạo hiểm giữa lực lượng phản gián Xô Viết và mạng lưới tình báo phương Tây xoay quanh manh mối kỳ bí là chiếc khuy áo bằng đồng.",
    quote: "Trong bóng tối của những cuộc đấu trí vô hình, sự quả cảm và lòng trung kiên chính là ánh sáng dẫn lối cho người chiến sĩ.",
    coverImageUrl: "/book-chiec-khuy-dong.jpg",
    qrCode: "BSNM-020"
  }
];

async function seedBatch4() {
  console.log("🚀 Bắt đầu thêm 5 cuốn sách Đợt 4 vào Database Render...");
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

  console.log(`\n🎉 Hoàn thành: Đã thêm ${successCount}/${books.length} cuốn sách đợt 4.`);
}

seedBatch4();
