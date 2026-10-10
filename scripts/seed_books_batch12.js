// Batch 12: 5 cuốn sách mới (BSNM-053 đến BSNM-057)
const books = [
  {
    title: "Mai Phục Trong Đêm Hè",
    author: "Hồ Anh Thái",
    publishYear: 1989,
    publisher: "Nhà Xuất Bản Trẻ",
    category: "Tiểu Thuyết Trinh Thám & Xã Hội",
    price: 35000,
    conditionNote: "Ấn bản đầu tiên năm 1989 của NXB Trẻ, bìa tranh vẽ trừu tượng huyền bí tông đỏ mận - vàng trên nền quả trám, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tác phẩm trinh thám tâm lý xã hội đặc sắc của nhà văn Hồ Anh Thái thời kỳ đầu sự nghiệp văn chương, do NXB Trẻ ấn hành năm 1989. Lấy bối cảnh những đêm hè oi bức nơi thành thị thời kỳ đầu mở cửa, câu chuyện dẫn dắt người đọc qua cuộc điều tra vụ án ly kỳ nghẹt thở, đồng thời bóc trần những mảng sáng tối trong tâm lý con người trước những cám dỗ vật chất của thời cuộc.",
    quote: "Trong bóng đêm của sự phục kích, điều nguy hiểm nhất không phải là họng súng của kẻ thù, mà là bóng tối ẩn nấp ngay trong lòng trắc ẩn của chính mình.",
    coverImageUrl: "/book-mai-phuc-trong-dem-he.jpg",
    qrCode: "BSNM-053"
  },
  {
    title: "Ngọc Trong Đá",
    author: "Nguyễn Đông Thức",
    publishYear: 1991,
    publisher: "Nhà Xuất Bản Trẻ",
    category: "Tiểu Thuyết Thanh Niên Xung Phong",
    price: 35000,
    conditionNote: "Ấn bản tái bản lần thứ 2 năm 1991 của NXB Trẻ (cùng năm phim chuyển thể công chiếu), bìa giấy mộc in typo thư pháp mềm mại trang nhã, bìa bọc nylon giữ gìn cẩn thận, ruột nguyên vẹn",
    summary: "Tiểu thuyết bất hủ của nhà văn Nguyễn Đông Thức viết về tuổi trẻ Thanh niên xung phong TP.HCM những năm tháng khai hoang mở đất gian khổ sau 1975. Tác phẩm đã được Hãng phim Trẻ chuyển thể thành bộ phim kinh điển cùng tên năm 1991 đưa tên tuổi các diễn viên như Việt Trinh, Lý Hùng lên tầm ngôi sao. Cuốn sách là khúc tráng ca tôn vinh lý tưởng sống, tình bạn, tình yêu trong sáng và nghị lực vượt lên mọi gian khó của thế hệ thanh niên.",
    quote: "Như viên ngọc ẩn giấu trong đá sần sùi, phẩm chất cao quý của con người chỉ thực sự tỏa sáng qua những thử thách cam go của đời sống.",
    coverImageUrl: "/book-ngoc-trong-da.jpg",
    qrCode: "BSNM-054"
  },
  {
    title: "Jăng Krixtốp (Jean-Christophe) — Tập I",
    author: "Romain Rolland (Rômanh Rôlăng)",
    publishYear: 1976,
    publisher: "Nhà Xuất Bản Văn Học",
    category: "Tiểu Thuyết Sử Thi & Âm Nhạc Kinh Điển",
    price: 35000,
    conditionNote: "Thuộc tủ sách Văn Học Cổ Điển Thế Giới của NXB Văn Học, bản dịch Đặng Thị Hạnh, bìa hai tông màu vàng cát và xanh rêu in typo mỹ thuật cổ điển, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tập I trong bộ trường thiên tiểu thuyết vĩ đại đoạt giải Nobel Văn học 1915 của đại văn hào Pháp Romain Rolland. Tác phẩm khắc họa cuộc đời và sự nghiệp đầy dằn vặt nhưng tràn trề khát vọng sáng tạo của thiên tài âm nhạc Jean-Christophe Krafft (lấy cảm hứng từ hình tượng Beethoven). Bộ sách là một bản giao hưởng ngôn từ tráng lệ ngợi ca tự do tư tưởng, tình yêu nhân loại và sức mạnh bất diệt của nghệ thuật đích thực.",
    quote: "Sống là phải hành động, sáng tạo và đấu tranh không ngừng nghỉ; khi âm nhạc cất lên, tâm hồn con người được tái sinh giữa bể khổ cuộc đời.",
    coverImageUrl: "/book-jang-krixtop-tap-1.jpg",
    qrCode: "BSNM-055"
  },
  {
    title: "Mao — Tấn Thảm Kịch Của Đảng Cộng Sản Trung Quốc (Tập III)",
    author: "Viện Nghiên Cứu Mác - Lênin (Liên Xô)",
    publishYear: 1985,
    publisher: "Nhà Xuất Bản Thông Tin Lý Luận",
    category: "Tư Liệu Lịch Sử Chính Trị Thế Giới",
    price: 35000,
    conditionNote: "Ấn bản nguyên gốc năm 1985 của NXB Thông Tin Lý Luận, bìa giấy mộc in typo chữ khối đen viền khung trang trọng, có dấu ngọn đuốc đỏ NXB, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tập III trong bộ tư liệu lịch sử chính trị chuyên sâu gồm 5 tập do NXB Thông Tin Lý Luận xuất bản năm 1985. Cuốn sách cung cấp góc nhìn học thuật và tư liệu lịch sử chi tiết về những biến động chính trị sâu sắc tại Trung Quốc thời kỳ Cách mạng Văn hóa, phân tích những sai lầm giáo điều và tác động to lớn của giai đoạn này đối với phong trào cộng sản quốc tế.",
    quote: "Lịch sử luôn là tấm gương soi công bằng nhất, phán xét mọi biến cố và cá nhân bằng sự thật khách quan và bài học xương máu của thời đại.",
    coverImageUrl: "/book-mao-tan-tham-kich-tap-3.jpg",
    qrCode: "BSNM-056"
  },
  {
    title: "Mao — Tấn Thảm Kịch Của Đảng Cộng Sản Trung Quốc (Tập IV)",
    author: "Viện Nghiên Cứu Mác - Lênin (Liên Xô)",
    publishYear: 1985,
    publisher: "Nhà Xuất Bản Thông Tin Lý Luận",
    category: "Tư Liệu Lịch Sử Chính Trị Thế Giới",
    price: 35000,
    conditionNote: "Ấn bản nguyên gốc năm 1985 của NXB Thông Tin Lý Luận, bìa giấy mộc nâu đất in typo giản dị thanh thoát, mép sờn nhuốm màu thời gian, ruột nguyên vẹn",
    summary: "Tập IV tiếp nối bộ tư liệu nghiên cứu chính trị học xuất bản năm 1985. Tập sách tập trung phân tích những diễn biến phức tạp trong nội bộ Đảng Cộng sản Trung Quốc vào những năm cuối đời của Mao Trạch Đông và cuộc chuyển giao quyền lực sau đó, mang đến cho độc giả nguồn tư liệu quý hiếm về lịch sử quan hệ quốc tế và địa chính trị thế kỷ XX.",
    quote: "Nhận thức đúng đắn những bi kịch trong quá khứ là con đường duy nhất để các dân tộc tránh lặp lại những vết xe đổ trên chặng đường phát triển tương lai.",
    coverImageUrl: "/book-mao-tan-tham-kich-tap-4.jpg",
    qrCode: "BSNM-057"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 12: BSNM-053 to BSNM-057)...`);

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
