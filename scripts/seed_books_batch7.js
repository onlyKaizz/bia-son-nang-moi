const books = [
  {
    title: "Gương Mặt Cuộc Đời",
    author: "Hoàng Lại Giang",
    publishYear: 1987,
    publisher: "NXB Mũi Cà Mau & NXB Văn Nghệ TP.HCM",
    category: "Tiểu Thuyết Xã Hội Hiện Thực",
    price: 35000,
    conditionNote: "Ấn bản nguyên gốc năm 1987 của NXB Mũi Cà Mau (logo MCM), bìa typo chữ khối đen viền đỏ ấn tượng, sờn mép phong trần, ruột nguyên vẹn",
    summary: "Cuốn tiểu thuyết xã hội giàu tính hiện thực và gai góc của nhà văn Hoàng Lại Giang. Tác phẩm phản ánh chân thực những va đập dữ dội trong đời sống xã hội thời kỳ chuyển giao kinh tế, khắc họa diện mạo đa chiều của con người trước danh lợi, sự tha hóa và những cuộc đấu tranh nội tâm để giữ vẹn nhân cách lương thiện.",
    quote: "Gương mặt cuộc đời dẫu có muôn vàn góc cạnh khốc liệt, phẩm giá và sự tử tế vẫn là tấm gương sáng nhất soi rọi lòng người.",
    coverImageUrl: "/book-guong-mat-cuoc-doi.jpg",
    qrCode: "BSNM-031"
  },
  {
    title: "Cú Móc Vào Tim",
    author: "Nôen Vécxin (Noël Vexin)",
    publishYear: 1984,
    publisher: "NXB Thể Dục Thể Thao",
    category: "Tiểu Thuyết Tình Báo & Thể Thao",
    price: 35000,
    conditionNote: "Ấn bản năm 1984 của NXB Thể Dục Thể Thao, bìa tranh vẽ người phụ nữ bí ẩn bên Khải Hoàn Môn và võ sĩ quyền Anh, sờn mép giấy bãi bằng vàng đều",
    summary: "Tiểu thuyết trinh thám tình báo thể thao độc đáo và hiếm có của nhà văn Pháp Noël Vexin do Phan La Sơn & Phan Thanh Đẩu dịch. Lấy bối cảnh sàn đấu quyền Anh chuyên nghiệp quốc tế tại Paris, tác phẩm mở ra cuộc điều tra nghẹt thở về những âm mưu cá cược ngầm, rửa tiền và mạng lưới tình báo cài cắm đằng sau những đòn knock-out sinh tử.",
    quote: "Trên sàn đấu cũng như trong cuộc đời, cú đòn nguy hiểm nhất không nhắm vào thể xác mà nhắm thẳng vào lòng tin và trái tim con người.",
    coverImageUrl: "/book-cu-moc-vao-tim.jpg",
    qrCode: "BSNM-032"
  },
  {
    title: "Mao — Tấn Thảm Kịch Của Đảng Cộng Sản Trung Quốc (Tập IV)",
    author: "Viện Mác - Lênin Liên Xô (Ban Biên tập biên dịch)",
    publishYear: 1985,
    publisher: "NXB Thông Tin Lý Luận",
    category: "Lịch Sử & Tư Liệu Chính Trị",
    price: 35000,
    conditionNote: "Ấn bản Tập IV nguyên gốc năm 1985 của NXB Thông Tin Lý Luận, bìa giấy mộc màu nâu đất in typo tiêu đề cổ kính, sờn mép thời gian",
    summary: "Tập IV tiếp nối bộ khảo cứu chính trị tư liệu quan trọng do NXB Thông Tin Lý Luận xuất bản giữa thập niên 80. Cuốn sách tập trung phân tích những bước ngoặt đầy kịch tính, phong trào 'Đại nhảy vọt' và 'Cách mạng Văn hóa', cung cấp tư liệu lịch sử phong phú về bài học xây dựng đường lối phát triển xã hội chủ nghĩa.",
    quote: "Lịch sử luôn công bằng trong việc phán xét những sai lầm và vinh quang, để nhân loại tìm thấy con đường phát triển đúng đắn hơn.",
    coverImageUrl: "/book-mao-tan-tham-kich-tap-iv.jpg",
    qrCode: "BSNM-033"
  },
  {
    title: "Bông Hồng Cho Emily (A Rose for Emily)",
    author: "William Faulkner & Nhiều Tác Giả (Nobel 1949)",
    publishYear: 1985,
    publisher: "NXB Tác Phẩm Mới (TPM)",
    category: "Truyện Ngắn Thế Giới Chọn Lọc",
    price: 35000,
    conditionNote: "Thuộc bộ Truyện Ngắn Thế Giới Chọn Lọc (Tập II) của NXB Tác Phẩm Mới (TPM), bìa tranh vẽ chân dung người thiếu nữ huyền bí với gam màu hoài cổ, gáy sờn mộc mạc",
    summary: "Tuyển tập truyện ngắn kinh điển thế giới do NXB Tác Phẩm Mới tuyển chọn, nổi bật với kiệt tác 'Bông hồng cho Emily' của đại văn hào Mỹ William Faulkner (Giải Nobel Văn học 1949). Tác phẩm đi sâu vào bi kịch tinh thần, sự cô đơn cùng cực và sự suy tàn của tầng lớp quý tộc miền Nam nước Mỹ qua phong cách Gothic kinh điển.",
    quote: "Thời gian trôi qua chầm chậm như một bóng ma, và bông hồng của ký ức vĩnh viễn nằm lại trong căn phòng cô quạnh của số phận.",
    coverImageUrl: "/book-bong-hong-cho-emily.jpg",
    qrCode: "BSNM-034"
  },
  {
    title: "Hiệp Hai",
    author: "A. Ta-ra-đan-kin & I. Phê-xen-cô (Liên Xô)",
    publishYear: 1983,
    publisher: "NXB Lao Động",
    category: "Tiểu Thuyết Phản Gián & Trinh Thám Xô Viết",
    price: 35000,
    conditionNote: "Ấn bản năm 1983 của NXB Lao Động (Côi Thịnh & An Thư dịch), bìa tranh vẽ hai mảng màu đỏ cam - đen phong cách phản gián Liên Xô, sờn mép thời bao cấp",
    summary: "Tiểu thuyết trinh thám phản gián Xô Viết kinh điển của hai tác giả Taradankin và Fesenko. Tác phẩm tái hiện cuộc đấu trí âm thầm nhưng quyết liệt của lực lượng an ninh Liên Xô trong việc lần theo các manh mối gián điệp tinh vi thời Chiến tranh Lạnh, bảo vệ an ninh và bí mật quốc gia trong 'hiệp đấu' tiếp nối đầy cam go.",
    quote: "Trong cuộc đấu trí thầm lặng bảo vệ bình yên cho đất nước, người chiến sĩ an ninh không được phép lơ là dù chỉ một tích tắc.",
    coverImageUrl: "/book-hiep-hai.jpg",
    qrCode: "BSNM-035"
  }
];

async function seedBatch7() {
  console.log("🚀 Bắt đầu thêm 5 cuốn sách Đợt 7 vào Database Render...");
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

  console.log(`\n🎉 Hoàn thành: Đã thêm ${successCount}/${books.length} cuốn sách đợt 7.`);
}

seedBatch7();
