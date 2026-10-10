// Batch 14: 5 cuốn sách mới (BSNM-063 đến BSNM-067)
const books = [
  {
    title: "Tơ Vương — Tập 2",
    author: "Vân Nhi",
    publishYear: 1990,
    publisher: "Nhà Xuất Bản Văn Nghệ",
    category: "Tiểu Thuyết Tình Cảm & Tâm Lý Xã Hội",
    price: 35000,
    conditionNote: "Ấn bản thập niên 1990, bìa ảnh màu chân dung thiếu nữ ngồi trầm ngâm phong cách điện ảnh xưa, tiêu đề chữ xanh viền trắng đặc trưng, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tập 2 trong bộ tiểu thuyết tình cảm lãng mạn 'Tơ Vương' của tác giả Vân Nhi, xuất bản vào thời kỳ đầu thập niên 1990. Tác phẩm khắc họa sâu sắc những cung bậc cảm xúc, những trắc trở và vương vấn tơ lòng của tuổi trẻ trước ngã rẽ tình yêu và cuộc sống mưu sinh đầy biến động của thời mở cửa.",
    quote: "Mối tơ vương của lòng người dẫu mỏng manh như sợi khói, nhưng lại đủ sức níu giữ cả một khoảng trời thanh xuân đầy thương nhớ.",
    coverImageUrl: "/book-to-vuong-tap-2.jpg",
    qrCode: "BSNM-063"
  },
  {
    title: "Chiếc Khuy Đồng (Truyện Tình Báo)",
    author: "Lev Ovalov (L. Ô-va-lốp)",
    publishYear: 1982,
    publisher: "Nhà Xuất Bản Thuận Hóa",
    category: "Tiểu Thuyết Tình Báo & Phản Gián Xô Viết",
    price: 35000,
    conditionNote: "Ấn bản năm 1982 của NXB Thuận Hóa, bìa tranh vẽ chân dung phong cách đồ họa xanh đen bí ẩn, dấu ấn thời bao cấp rõ nét, sờn mép phong trần, ruột nguyên vẹn",
    summary: "Tiểu thuyết tình báo lừng danh của nhà văn Liên Xô Lev Ovalov (Ô-va-lốp), do NXB Thuận Hóa ấn hành năm 1982. Lấy cảm hứng từ vụ án có thật tại thành phố Riga (Latvia) trong những năm đầu Chiến tranh thế giới thứ hai, tác phẩm theo chân cơ quan an ninh truy tìm manh mối từ một chiếc khuy áo bằng đồng kỳ lạ, từng bước bóc gỡ mạng lưới gián điệp tinh vi cài cắm trong lòng thành phố.",
    quote: "Một chi tiết nhỏ bé tưởng chừng vô hại như chiếc khuy đồng lại chính là chìa khóa mở toang bức màn bí mật của kẻ thù giấu mặt.",
    coverImageUrl: "/book-chiec-khuy-dong.jpg",
    qrCode: "BSNM-064"
  },
  {
    title: "Bến Lặng (Tập Truyện Ngắn Liên Xô)",
    author: "Nhiều Tác Giả",
    publishYear: 1984,
    publisher: "Nhà Xuất Bản Đồng Nai",
    category: "Truyện Ngắn Văn Học Xô Viết",
    price: 35000,
    conditionNote: "Ấn bản năm 1984 của NXB Đồng Nai, bìa tranh vẽ cây bạch dương mùa đông trên nền vòm xanh êm đềm, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tuyển tập truyện ngắn đặc sắc của các cây bút văn xuôi Xô Viết đương đại do NXB Đồng Nai ấn hành năm 1984. Cuốn sách tuyển chọn những câu chuyện dung dị mà thấm thía về tình người, lòng nhân ái, những khoảng lặng bình yên trong tâm hồn và khát vọng sống chân thành của con người lao động trên xứ sở bạch dương hiền hòa.",
    quote: "Sau những giông bão của cuộc đời, mỗi con người đều khao khát tìm về một bến lặng bình yên cho tâm hồn mình neo đậu.",
    coverImageUrl: "/book-ben-lang.jpg",
    qrCode: "BSNM-065"
  },
  {
    title: "Đấu Tranh Chống Tệ Quan Liêu",
    author: "Thiện Nhân",
    publishYear: 1983,
    publisher: "Nhà Xuất Bản Sự Thật",
    category: "Chính Luận & Lý Luận Xã Hội",
    price: 30000,
    conditionNote: "Ấn bản năm 1983 của NXB Sự Thật (tiền thân NXB Chính Trị Quốc Gia Sự Thật), bìa giấy mộc in typo typo đỏ - đen nghiêm cẩn, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tác phẩm chính luận lý luận sắc sảo của tác giả Thiện Nhân do NXB Sự Thật ấn hành năm 1983 — giai đoạn trăn trở trước thềm Đổi Mới. Cuốn sách phân tích nguồn gốc, tác hại khôn lường của tệ quan liêu, cửa quyền đối với bộ máy quản lý và đời sống nhân dân, từ đó đề ra các giải pháp tự phê bình, nâng cao tinh thần trách nhiệm và phục vụ nhân dân.",
    quote: "Quan liêu là kẻ thù nội xâm nguy hiểm nhất làm suy yếu niềm tin của nhân dân; đấu tranh chống quan liêu chính là bảo vệ sinh mệnh của chế độ.",
    coverImageUrl: "/book-dau-tranh-chong-te-quan-lieu.jpg",
    qrCode: "BSNM-066"
  },
  {
    title: "Tế Điên Tăng",
    author: "Từ Vô Cầu",
    publishYear: 1985,
    publisher: "Nhà Xuất Bản Tôn Giáo & Văn Hóa Dân Gian",
    category: "Truyện Cổ Phật Giáo & Dân Gian",
    price: 35000,
    conditionNote: "Bản in giấy bãi bằng vàng nâu thập niên 1980, bìa in typo chữ khối đen trên nền tranh minh họa Phật giáo màu vàng nắng mộc mạc, sờn mép phong trần, ruột nguyên vẹn",
    summary: "Tác phẩm văn học dân gian Phật giáo do cư sĩ Từ Vô Cầu biên soạn, kể lại cuộc đời và những giai thoại ly kỳ, hài hước mà sâu sắc của Tế Công Hoạt Phật (Đạo Tế Thiền Sư). Với phong thái 'rượu thịt đi qua ruột, Phật ở lại trong tâm', Tế Điên Tăng giả điên giả dại giữa chốn hồng trần để cứu nhân độ thế, trừng trị kẻ gian ác, thức tỉnh người mê lầm và truyền bá tinh thần từ bi vô cầu của đạo Phật.",
    quote: "Thế gian cười ta điên, ta cười thế gian mê muội; tâm không vướng bận danh lợi thì chốn nào cũng là cõi tịnh độ an nhiên.",
    coverImageUrl: "/book-te-dien-tang.jpg",
    qrCode: "BSNM-067"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 14: BSNM-063 to BSNM-067)...`);

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
