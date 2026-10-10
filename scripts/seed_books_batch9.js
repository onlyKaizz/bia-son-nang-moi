// Batch 9: 5 cuốn sách mới (BSNM-038 đến BSNM-042)
const books = [
  {
    title: "Con Hổ Vùng Sangrila",
    author: "Harry Thürk (Ha-ry Tuyr-kơ)",
    publishYear: 1970,
    publisher: "NXB Văn Hóa (bản dịch tiếng Việt)",
    category: "Tiểu Thuyết Phiêu Lưu & Chính Trị",
    price: 35000,
    conditionNote: "Bản in tiếng Việt thời bao cấp, bìa tranh vẽ xanh lục phong cách khắc gỗ — chân dung người đàn ông cùng ngôi đền Á Đông bí ẩn, giấy bãi bằng vàng nâu, mép sờn phong trần, ruột nguyên vẹn",
    summary: "Tiểu thuyết phiêu lưu chính trị đầy kịch tính của nhà văn Đức Harry Thürk (1927–2005), xuất bản lần đầu năm 1970. Lấy bối cảnh vùng núi non huyền bí Shangri-La ở Trung Á, tác phẩm theo chân nhân vật chính xâm nhập vào lãnh địa hoang dã nơi những thế lực ngầm đang thao túng, hé mở cuộc đấu trí sinh tử giữa các mạng lưới tình báo quốc tế thời Chiến tranh Lạnh.",
    quote: "Trong vùng đất huyền thoại ấy, ranh giới giữa thiên đường và địa ngục mỏng manh như sợi tóc, và con hổ chính là kẻ cai quản luật chơi.",
    coverImageUrl: "/book-con-ho-vung-sangrila.jpg",
    qrCode: "BSNM-038"
  },
  {
    title: "Aivanhô (Ivanhoe) — Tập I",
    author: "Walter Scott (Oantơ Scốt)",
    publishYear: 1988,
    publisher: "NXB Văn Học, Hà Nội",
    category: "Tiểu Thuyết Lịch Sử Kinh Điển",
    price: 35000,
    conditionNote: "Thuộc tủ sách Văn Học Cổ Điển Nước Ngoài — Văn Học Anh, bản in lần thứ hai do Trần Kiêm dịch và giới thiệu, bìa giấy mộc màu nâu đất in typo tinh giản, sờn mép cổ kính, ruột nguyên vẹn",
    summary: "Tập I trong bộ tiểu thuyết lịch sử kinh điển 'Ivanhoe' của đại văn hào Scotland Walter Scott, do dịch giả Trần Kiêm chuyển ngữ công phu và NXB Văn Học ấn hành. Lấy bối cảnh nước Anh thế kỷ XII thời vua Richard Sư Tử Tâm đi Thập tự chinh, tác phẩm kể về cuộc phiêu lưu của hiệp sĩ Wilfred xứ Ivanhoe giữa cuộc xung đột giữa người Saxon bản địa và người Norman, đan xen tình yêu, danh dự và âm mưu tranh ngôi của Hoàng tử John.",
    quote: "Vinh quang thực sự của hiệp sĩ không nằm ở lưỡi kiếm sắc bén mà ở trái tim can đảm dám đứng lên bảo vệ công lý và kẻ yếu thế.",
    coverImageUrl: "/book-aivanho.jpg",
    qrCode: "BSNM-039"
  },
  {
    title: "Trò Chơi",
    author: "Iuri Bônđarép (Yuri Bondarev)",
    publishYear: 1986,
    publisher: "Hội Văn Nghệ Nghĩa Bình",
    category: "Tiểu Thuyết Xã Hội Xô Viết",
    price: 35000,
    conditionNote: "Ấn bản năm 1986 của Hội Văn Nghệ Nghĩa Bình, bản dịch Lê Khánh Trường, bìa giấy mộc nâu vàng giản dị đặc trưng xuất bản địa phương thời bao cấp, sờn mép thời gian",
    summary: "Tiểu thuyết xã hội gây tranh cãi của nhà văn Xô Viết lừng danh Yuri Bondarev (1924–2020), xuất bản năm 1985 — đúng giai đoạn Liên Xô bước vào thời kỳ cải tổ Perestroika. Khác với phong cách chiến tranh quen thuộc, Bondarev chuyển hướng khắc họa đời sống tầng lớp trí thức thượng lưu Moscow — đạo diễn, họa sĩ, viện sĩ — qua đó phơi bày những 'trò chơi' quyền lực, danh vọng và sự tha hóa đạo đức đang âm thầm gặm nhấm nền tảng xã hội.",
    quote: "Cuộc đời là một trò chơi mà kẻ thua cuộc đáng thương nhất là người đánh mất chính mình giữa những ván cờ danh lợi.",
    coverImageUrl: "/book-tro-choi.jpg",
    qrCode: "BSNM-040"
  },
  {
    title: "Tự Do Hay Là Chết — Tập I",
    author: "Nikos Kazantzakis (Nikôx Kazanzaki)",
    publishYear: 1985,
    publisher: "NXB Văn Học, Hà Nội",
    category: "Tiểu Thuyết Lịch Sử Hy Lạp",
    price: 35000,
    conditionNote: "Thuộc tủ sách Văn Học Hiện Đại Nước Ngoài — Văn Học Hy Lạp, bản dịch Hoàng Nguyên Kỳ, bìa giấy mộc nâu đất in typo nghiêm cẩn, sờn mép cổ kính",
    summary: "Tập I trong bộ tiểu thuyết lịch sử hùng tráng 'Freedom or Death' (tên gốc: Captain Michalis) của đại văn hào Hy Lạp Nikos Kazantzakis, do Hoàng Nguyên Kỳ dịch. Lấy bối cảnh cuộc khởi nghĩa năm 1889 của nhân dân đảo Crete chống ách thống trị Ottoman, tác phẩm xoay quanh thủ lĩnh Đội trưởng Michalis — con người kiên cường thề không cạo râu, không mặc trang phục nào ngoài màu đen cho đến ngày Crete giải phóng. Đan xen cuộc chiến là mối quan hệ giằng xé giữa Michalis và sĩ quan Thổ Nhĩ Kỳ Nuri Bey — người anh em kết nghĩa phía bên kia chiến tuyến.",
    quote: "Tự do hay là chết — không có con đường thứ ba cho những ai đã chọn sống với phẩm giá và lý tưởng.",
    coverImageUrl: "/book-tu-do-hay-la-chet.jpg",
    qrCode: "BSNM-041"
  },
  {
    title: "Ngày Cuối Của Cuộc Chiến Tranh",
    author: "Lam Giang",
    publishYear: 1986,
    publisher: "NXB Văn Nghệ Thành Phố Hồ Chí Minh",
    category: "Truyện Chiến Tranh Cách Mạng",
    price: 35000,
    conditionNote: "Ấn bản nguyên gốc năm 1986 của NXB Văn Nghệ TP.HCM, bìa giấy mộc nâu vàng in typo giản dị, sờn mép và bìa bọc nhựa thủ công kỷ niệm, ruột nguyên vẹn",
    summary: "Tập truyện chiến tranh cách mạng của nhà văn Lam Giang, do NXB Văn Nghệ TP.HCM ấn hành năm 1986. Tác phẩm tái hiện những ngày tháng cuối cùng trước giải phóng — khoảnh khắc sinh tử đầy bi tráng của người lính và nhân dân nơi tuyến lửa, nơi hy vọng hòa bình và nỗi đau mất mát đan xen trong từng trang giấy thấm đẫm nghĩa tình đồng đội.",
    quote: "Ngày cuối cùng của cuộc chiến tranh không phải là ngày hết đau thương, mà là ngày bắt đầu của những ký ức không bao giờ lãng quên.",
    coverImageUrl: "/book-ngay-cuoi-cua-cuoc-chien-tranh.jpg",
    qrCode: "BSNM-042"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 9)...`);

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
