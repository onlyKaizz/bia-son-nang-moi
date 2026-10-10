// Batch 10: 5 cuốn sách mới (BSNM-043 đến BSNM-047)
const books = [
  {
    title: "Yôxta Béc-ling (Gösta Berlings Saga)",
    author: "Selma Lagerlöf",
    publishYear: 1986,
    publisher: "NXB Văn Học, Hà Nội",
    category: "Tiểu Thuyết Bắc Âu Kinh Điển",
    price: 35000,
    conditionNote: "Ấn bản tiếng Việt năm 1986 của NXB Văn Học do Hoàng Thiếu Sơn dịch, bìa giấy mộc nâu đất in typo phong cách cổ điển, sờn mép thời gian, ruột nguyên vẹn",
    summary: "Kiệt tác tiểu thuyết đầu tay (1891) của nữ văn hào Thụy Điển Selma Lagerlöf - người phụ nữ đầu tiên đoạt giải Nobel Văn học (1909), do dịch giả Hoàng Thiếu Sơn chuyển ngữ công phu. Tác phẩm kể về cuộc đời phiêu lưu đầy trắc trở nhưng đậm chất thần thoại lãng mạn của Gösta Berling - một cựu mục sư bị phế truất, sống cùng mười hai 'kỵ sĩ' tại trang viên Ekeby ở vùng Värmland tươi đẹp. Giàu chất thơ dân gian Bắc Âu, tác phẩm khắc họa sâu sắc sự đấu tranh giữa cám dỗ, danh dự, tình yêu và con đường cứu rỗi tâm hồn.",
    quote: "Kẻ nào chỉ sống để tìm kiếm niềm vui cho riêng mình sẽ sớm nhận ra mình đang ôm ấp một nắm tro tàn; chỉ tình thương và đức hy sinh mới cứu chuộc được số phận.",
    coverImageUrl: "/book-yoxta-becling.jpg",
    qrCode: "BSNM-043"
  },
  {
    title: "Huế Mùa Xuân — Tập 1",
    author: "Thanh Hải",
    publishYear: 1970,
    publisher: "NXB Văn Nghệ Giải Phóng",
    category: "Thơ Kháng Chiến Miền Nam",
    price: 35000,
    conditionNote: "Ấn bản nguyên gốc thời chiến tranh của NXB Văn Nghệ Giải Phóng, bìa in hình cổng Ngọ Môn và lá cờ Giải phóng trên nền giấy mộc ố vàng thời gian, sờn mép chân thực, ruột nguyên vẹn",
    summary: "Tập thơ tiêu biểu của nhà thơ Thanh Hải (1930–1980) do NXB Văn Nghệ Giải Phóng ấn hành trong những năm tháng kháng chiến ác liệt chống Mỹ. Bìa sách khắc họa hình ảnh cổng thành Huế cổ kính hiên ngang tung bay lá cờ Mặt trận Dân tộc Giải phóng. Tác phẩm tập hợp những vần thơ nồng nàn tình yêu quê hương, đất nước, tái hiện khí phách kiên cường, bất khuất của quân và dân xứ Huế nơi tuyến đầu khói lửa.",
    quote: "Một mùa xuân nho nhỏ / Lặng lẽ dâng cho đời / Dù là tuổi hai mươi / Dù là khi tóc bạc...",
    coverImageUrl: "/book-hue-mua-xuan.jpg",
    qrCode: "BSNM-044"
  },
  {
    title: "Kể Chuyện Ăn Cơm Giữa Sân",
    author: "Nguyễn Khắc Phục (Lưu bút: Ngọc Trai)",
    publishYear: 1973,
    publisher: "Tập thơ / Trường ca Chiến trường Khu V (Bản in lưu hành nội bộ)",
    category: "Trường Ca Chiến Trường",
    price: 35000,
    conditionNote: "Bản in giấy mộc bìa nâu mộc mạc thời chiến tranh, trên bìa có lưu bút và chữ ký kỷ niệm của nhà phê bình/nhà báo Ngọc Trai (Phó TBT Báo Văn Nghệ), sờn mép phong trần, ruột vẹn nguyên",
    summary: "Bản trường ca đặc sắc được nhà văn, nhà thơ Nguyễn Khắc Phục (1947–2016) sáng tác năm 1973 giữa khói lửa chiến trường Khu V ác liệt. Tác phẩm mang phong cách tự sự độc đáo, mượn khung cảnh bữa cơm bình dị giữa khoảng sân bom đạn để kể câu chuyện về số phận con người, lý tưởng chiến đấu và tình đồng chí keo sơn của những người con ra trận. Điểm độc bản đặc biệt của cuốn sách này là chữ ký và thủ bút đề tựa của nhà phê bình văn học Ngọc Trai trên trang bìa.",
    quote: "Giữa bom rơi đạn nổ, bát cơm thơm tình đồng đội vẫn ấm nồng trên khoảng sân quê mẹ, nhắc ta về lẽ sống và ngày mai toàn thắng.",
    coverImageUrl: "/book-ke-chuyen-an-com-giua-san.jpg",
    qrCode: "BSNM-045"
  },
  {
    title: "Đứng Trước Biển",
    author: "Nguyễn Mạnh Tuấn",
    publishYear: 1982,
    publisher: "NXB Văn Nghệ Thành Phố Hồ Chí Minh",
    category: "Tiểu Thuyết Xã Hội Hiện Thực",
    price: 35000,
    conditionNote: "Ấn bản đầu tiên năm 1982 của NXB Văn Nghệ TP.HCM, bìa typo chữ nghệ thuật hai màu xanh rêu - đỏ đun trên nền giấy mộc bao cấp, sờn mép thời gian, ruột nguyên vẹn",
    summary: "Tiểu thuyết hiện thực gây chấn động văn đàn Việt Nam đầu thập niên 1980 của nhà văn Nguyễn Mạnh Tuấn, do NXB Văn Nghệ TP.HCM phát hành năm 1982. Lấy bối cảnh một xí nghiệp quốc doanh đánh bắt và chế biến thủy hải sản thời kỳ hậu chiến, tác phẩm dũng cảm đi thẳng vào cuộc xung đột gay gắt giữa cơ chế quan liêu bao cấp kìm hãm với những con người dám nghĩ, dám làm, mở đường cho tư duy Đổi mới kinh tế và giải phóng sức lao động.",
    quote: "Đứng trước biển lớn, con người không thể chèo lái con thuyền bằng những giáo điều cũ kỹ mà phải nhìn thẳng vào những con sóng dữ của thực tại.",
    coverImageUrl: "/book-dung-truoc-bien.jpg",
    qrCode: "BSNM-046"
  },
  {
    title: "Những Tiếng Nổ Rung Chuyển Sài Gòn",
    author: "Lam Giang — Nguyệt Bình",
    publishYear: 1984,
    publisher: "NXB Thành Phố Hồ Chí Minh",
    category: "Truyện Ký Lịch Sử & Biệt Động",
    price: 35000,
    conditionNote: "Ấn bản năm 1984 của NXB TP.HCM, bìa giấy mộc in typo kèm dấu mộc lưu niệm cơ quan, dấu ấn thời bao cấp rõ nét, mép sờn phong trần, ruột nguyên vẹn",
    summary: "Tập truyện ký lịch sử xuất sắc của bộ đôi tác giả Lam Giang và Nguyệt Bình, do NXB Thành Phố Hồ Chí Minh ấn hành năm 1984. Cuốn sách tái hiện chân thực và hào hùng những chiến công lẫy lừng của lực lượng Biệt động Sài Gòn — từ những trận đánh táo bạo vào các căn cứ đầu não, tòa Đại sứ, kho bom đạn địch ngay giữa lòng đô thị miền Nam, khắc họa lòng quả cảm vô song và mưu trí tuyệt vời của những người chiến sĩ thầm lặng.",
    quote: "Những tiếng nổ ấy không chỉ phá hủy những pháo đài kiên cố của đối phương, mà còn thức tỉnh niềm tin và làm rung chuyển cả chế độ tay sai ngay tại sào huyệt của chúng.",
    coverImageUrl: "/book-nhung-tieng-no-rung-chuyen-sai-gon.jpg",
    qrCode: "BSNM-047"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 10: BSNM-043 to BSNM-047)...`);

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
