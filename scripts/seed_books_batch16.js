// Batch 16: 5 cuốn sách mới (BSNM-073 đến BSNM-077)
const books = [
  {
    title: "Mái Nhà Xanh (Truyện Ký)",
    author: "Hoàng Minh Nhân",
    publishYear: 1985,
    publisher: "Nhà Xuất Bản Thanh Niên",
    category: "Truyện Ký & Tuổi Trẻ Vùng Cao",
    price: 35000,
    conditionNote: "Ấn bản năm 1985 của NXB Thanh Niên, bìa tranh vẽ ba gương mặt thanh niên xung phong đa sắc màu phong cách mỹ thuật bao cấp, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tập truyện ký giàu chất thơ và nhiệt huyết tuổi trẻ của nhà văn Hoàng Minh Nhân do NXB Thanh Niên ấn hành năm 1985. Tác phẩm kể về cuộc sống, lý tưởng và những cống hiến thầm lặng của thế hệ thanh niên trí thức tình nguyện lên công tác tại vùng cao biên giới Tây Bắc, cùng đồng bào dựng xây những 'mái nhà xanh' ấm áp giữa núi rừng đại ngàn.",
    quote: "Dưới mái nhà xanh giữa đại ngàn lộng gió, ngọn lửa của tuổi trẻ và tình yêu thương đồng bào sưởi ấm cả những mùa đông khắc nghiệt nhất.",
    coverImageUrl: "/book-mai-nha-xanh.jpg",
    qrCode: "BSNM-073"
  },
  {
    title: "Văn Kiện Đại Hội Đại Biểu Đảng Bộ TP. Hồ Chí Minh Lần Thứ Hai",
    author: "Đảng Bộ Thành Phố Hồ Chí Minh",
    publishYear: 1980,
    publisher: "Đảng Bộ Thành Phố Hồ Chí Minh",
    category: "Tư Liệu Lịch Sử Chính Trị Đô Thị",
    price: 30000,
    conditionNote: "Văn kiện chính thức lưu hành nội bộ tháng 10/1980, bìa giấy mộc viền khung chỉ đen in chữ đỏ trang nghiêm, dấu ố vàng nhuốm màu lịch sử, ruột nguyên vẹn",
    summary: "Tài liệu văn kiện lịch sử quý giá ghi lại toàn bộ nghị quyết, báo cáo chính trị và phương hướng phát triển của Đảng bộ TP.HCM tại Đại hội lần thứ II (tháng 10/1980). Đây là giai đoạn lịch sử mang tính bước ngoặt khi thành phố bắt đầu tìm tòi, thí điểm những cơ chế 'xé rào' sản xuất kinh doanh đầu tiên, đặt những viên gạch nền móng cho đường lối Đổi Mới toàn diện sau này.",
    quote: "Nhìn thẳng vào sự thật, gắn bó mật thiết với nhân dân để tìm ra con đường phát triển kinh tế và ổn định đời sống xã hội của thành phố mang tên Bác.",
    coverImageUrl: "/book-van-kien-dai-hoi-dang-bo-tphcm-lan-2.jpg",
    qrCode: "BSNM-074"
  },
  {
    title: "Bông Hồng Cho Êmily (Truyện Ngắn Thế Giới Chọn Lọc)",
    author: "Nhiều Tác Giả (William Faulkner, Kawabata Yasunari...)",
    publishYear: 1985,
    publisher: "Nhà Xuất Bản Tác Phẩm Mới (Hội Nhà Văn)",
    category: "Truyện Ngắn Kinh Điển Thế Giới",
    price: 35000,
    conditionNote: "Ấn bản năm 1985 của NXB Tác Phẩm Mới, bìa tranh vẽ chân dung người thiếu nữ huyền ảo đầy sức gợi, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tuyển tập truyện ngắn kinh điển thế giới do NXB Tác Phẩm Mới (tiền thân NXB Hội Nhà Văn) ấn hành năm 1985. Lấy kiệt tác 'A Rose for Emily' của đại văn hào đoạt giải Nobel William Faulkner làm tiêu đề, tập sách tuyển chọn những truyện ngắn đặc sắc nhất của các bậc thầy văn chương thế giới, khắc họa sâu sắc bi kịch số phận, chiều sâu tâm lý và vẻ đẹp nhân bản trường tồn.",
    quote: "Một bông hồng tặng người đã khuất, như một nén hương lòng dành cho những bi kịch âm thầm giấu kín dưới lớp bụi thời gian.",
    coverImageUrl: "/book-bong-hong-cho-emily.jpg",
    qrCode: "BSNM-075"
  },
  {
    title: "Những Trái Tim Không Tàn Tật",
    author: "Khuất Quang Thụy",
    publishYear: 1986,
    publisher: "Nhà Xuất Bản Quân Đội Nhân Dân",
    category: "Truyện Vừa & Ký Sự Người Lính Hậu Chiến",
    price: 35000,
    conditionNote: "Ấn bản năm 1986 của NXB Quân Đội Nhân Dân, bìa typo hình quả trám có nhiều chữ ký tay và thủ bút lưu niệm của đồng đội xưa, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tập truyện vừa xúc động của đại tá, nhà văn quân đội Khuất Quang Thụy do NXB Quân Đội Nhân Dân ấn hành năm 1986. Tác phẩm đi sâu vào đời sống của những người thương bệnh binh trở về sau cuộc chiến tranh vệ quốc: dù thân thể mang thương tật, nhưng trái tim và tâm hồn họ vẫn vẹn nguyên nhiệt huyết, tình yêu thương và ý chí quật cường vươn lên xây dựng cuộc sống mới.",
    quote: "Chiến tranh có thể cướp đi một phần thân thể của người lính, nhưng không bao giờ có thể làm tàn tật những trái tim biết yêu thương và hy sinh.",
    coverImageUrl: "/book-nhung-trai-tim-khong-tan-tat.jpg",
    qrCode: "BSNM-076"
  },
  {
    title: "Cái Đầm Ma (La Mare au Diable)",
    author: "George Sand (Giorgiơ Xăng)",
    publishYear: 1986,
    publisher: "Nhà Xuất Bản Văn Học",
    category: "Tiểu Thuyết Lãng Mạn Đồng Quê Pháp",
    price: 35000,
    conditionNote: "Ấn bản năm 1986 của NXB Văn Học, bìa giấy mộc in typo 'Cái Đầm Ma' cùng hình vẽ chân dung thiếu nữ Pháp đường nét tối giản, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Kiệt tác tiểu thuyết đồng quê lãng mạn của nữ văn hào Pháp George Sand (1804–1876), được NXB Văn Học ấn hành năm 1986. Tác phẩm kể về câu chuyện tình yêu mộc mạc, trong sáng và đầy chất thơ giữa chàng nông dân góa vợ Germain và cô gái nghèo Marie tốt bụng khi họ cùng lạc bước qua khu rừng bên chiếc đầm bí ẩn La Mare au Diable trong một đêm sương gió.",
    quote: "Tình yêu chân thực nảy nở từ sự chân thành và lòng trắc ẩn, xua tan mọi tăm tối lạnh lẽo như ánh bình minh rạng rỡ trên cánh đồng quê.",
    coverImageUrl: "/book-cai-dam-ma.jpg",
    qrCode: "BSNM-077"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 16: BSNM-073 to BSNM-077)...`);

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
