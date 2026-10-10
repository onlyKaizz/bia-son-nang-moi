// Batch 13: 5 cuốn sách mới (BSNM-058 đến BSNM-062)
const books = [
  {
    title: "Hiệp Hai (Tiểu Thuyết Chống Gián Điệp)",
    author: "A. Tarađankin & I. Phêxencô",
    publishYear: 1981,
    publisher: "Nhà Xuất Bản Lao Động",
    category: "Tiểu Thuyết Tình Báo & Phản Gián Xô Viết",
    price: 35000,
    conditionNote: "Ấn bản năm 1981 của NXB Lao Động, bản dịch Côi Thịnh, bìa tranh vẽ đồ họa kịch tính gam màu nâu đỏ - xám đen đậm chất trinh thám bao cấp, sờn mép phong trần, ruột nguyên vẹn",
    summary: "Tiểu thuyết phản gián lừng danh của hai tác giả Liên Xô A. Tarađankin và I. Phêxencô do NXB Lao Động ấn hành năm 1981 qua bản dịch của Côi Thịnh. Tác phẩm đưa độc giả vào cuộc đấu trí sinh tử, cân não giữa cơ quan an ninh Xô Viết và mạng lưới gián điệp phương Tây cài cắm thời Chiến tranh Lạnh. Những tình tiết bất ngờ, những đòn nghiệp vụ sắc bén cùng lòng quả cảm của các chiến sĩ an ninh tạo nên sức hấp dẫn nghẹt thở từ đầu đến cuối.",
    quote: "Trong hiệp hai của cuộc chiến thầm lặng, kẻ chiến thắng không phải là kẻ ra đòn trước, mà là người giữ được sự tỉnh táo và lòng trung thành kiên định nhất.",
    coverImageUrl: "/book-hiep-hai.jpg",
    qrCode: "BSNM-058"
  },
  {
    title: "Đất Nước — Tiểu Thuyết (Tập Một)",
    author: "Hữu Mai",
    publishYear: 1984,
    publisher: "Nhà Xuất Bản Quân Đội Nhân Dân",
    category: "Tiểu Thuyết Sử Thi & Chiến Tranh Cách Mạng",
    price: 35000,
    conditionNote: "Ấn bản đầu tiên năm 1984 của NXB Quân Đội Nhân Dân, bìa giấy mộc hai mảng màu nâu đất in typo chữ lớn trang nghiêm dạn dày sương gió, sờn mép thời gian, ruột nguyên vẹn",
    summary: "Tập I trong bộ tiểu thuyết sử thi đồ sộ 'Đất Nước' của đại tá, nhà văn Hữu Mai (người chắp bút hồi ký cho Đại tướng Võ Nguyên Giáp), do NXB Quân Đội Nhân Dân ấn hành năm 1984. Tác phẩm tái hiện bức tranh toàn cảnh hùng tráng và khốc liệt của cuộc kháng chiến trường kỳ, nơi vận mệnh của cả một dân tộc hòa quyện chặt chẽ vào số phận từng người chiến sĩ và người dân bình dị trên khắp mọi miền Tổ quốc.",
    quote: "Đất nước lớn lên trong từng giọt mồ hôi và máu của những người con ngã xuống, để màu xanh hòa bình mãi mãi phủ kín non sông.",
    coverImageUrl: "/book-dat-nuoc-tap-mot.jpg",
    qrCode: "BSNM-059"
  },
  {
    title: "Lê Vĩnh Hòa Tuyển Tập",
    author: "Lê Vĩnh Hòa (Liệt sĩ, Nhà văn)",
    publishYear: 1986,
    publisher: "NXB Tổng Hợp Hậu Giang & NXB Văn Nghệ TP.HCM",
    category: "Văn Học Kháng Chiến Nam Bộ",
    price: 35000,
    conditionNote: "Ấn bản tưởng niệm năm 1986 của NXB Tổng Hợp Hậu Giang và NXB Văn Nghệ TP.HCM, bìa hoa văn mây lượn cổ điển sắc nét trên nền giấy mộc bao cấp, sờn mép tư liệu quý, ruột nguyên vẹn",
    summary: "Tuyển tập tác phẩm đặc sắc của nhà văn, nhà báo liệt sĩ Lê Vĩnh Hòa (1937–1967) — ngòi bút cách mạng kiên cường của vùng đất Tây Nam Bộ đã anh dũng hy sinh trên chiến trường. Cuốn sách tập hợp những truyện ngắn, ký sự và bài báo xuất sắc nhất của ông phản ánh chân thực cuộc sống quật khởi, tình nghĩa thủy chung son sắt và tinh thần đấu tranh bất khuất của đồng bào, chiến sĩ miền Tây Nam Bộ trong kháng chiến chống Mỹ.",
    quote: "Ngòi bút của người chiến sĩ cách mạng là vũ khí sắc bén, viết bằng máu và tình yêu thương vô bờ đối với mảnh đất phương Nam ruột thịt.",
    coverImageUrl: "/book-le-vinh-hoa-tuyen-tap.jpg",
    qrCode: "BSNM-060"
  },
  {
    title: "Cuộc Tháo Chạy Tán Loạn (Decent Interval)",
    author: "Frank Snepp",
    publishYear: 1985,
    publisher: "Nhà Xuất Bản Thành Phố Hồ Chí Minh",
    category: "Hồi Ký & Tư Liệu Lịch Sử Chiến Tranh",
    price: 35000,
    conditionNote: "Ấn bản năm 1985 của NXB TP.HCM (Ngô Dư dịch), bìa typo chữ nghệ thuật độc đáo màu xanh rêu thời bao cấp, sờn mép và có vết mực kỷ niệm của chủ nhân xưa, ruột nguyên vẹn",
    summary: "Cuốn hồi ký chấn động quốc tế của Frank Snepp — cựu chuyên viên phân tích chiến lược của CIA tại Sài Gòn, do NXB TP.HCM phát hành năm 1985. Tác phẩm phơi bày toàn bộ sự thật hỗn loạn, hoảng loạn và sự sụp đổ không thể cứu vãn của chính quyền Sài Gòn cùng chiến dịch di tản của Mỹ trong những ngày tháng Tư năm 1975 lịch sử. Đây là một trong những tài liệu nhân chứng sống có giá trị lịch sử bậc nhất về sự kết thúc của chiến tranh Việt Nam.",
    quote: "Một khoảng cách thích hợp đã không bao giờ tồn tại; đó là một cuộc tháo chạy tán loạn phơi bày sự thất bại toàn diện của cả một cỗ máy chiến tranh.",
    coverImageUrl: "/book-cuoc-thao-chay-tan-loan.jpg",
    qrCode: "BSNM-061"
  },
  {
    title: "Nếu Ngày Mai Anh Chết",
    author: "Luis Rogelio Nogueras (Luitx Rôhêhô Nôghêratx)",
    publishYear: 1987,
    publisher: "Nhà Xuất Bản Thành Phố Hồ Chí Minh",
    category: "Tiểu Thuyết Trinh Thám & Tình Báo Cuba",
    price: 35000,
    conditionNote: "Ấn bản năm 1987 của NXB TP.HCM, bản dịch Mạnh Tư, bìa tranh vẽ minh họa phong cách khắc gỗ biểu cảm của hội họa Mỹ Latinh, có chữ ký lưu niệm 'Em có' viết tay, sờn mép cổ kính, ruột nguyên vẹn",
    summary: "Tiểu thuyết trinh thám tình báo nổi tiếng của nhà văn, nhà thơ Cuba Luis Rogelio Nogueras (1944–1985), do Mạnh Tư dịch và NXB TP.HCM xuất bản năm 1987. Cuốn sách tái hiện cuộc đấu tranh thầm lặng đầy hiểm nguy của các chiến sĩ an ninh Cuba chống lại âm mưu phá hoại và ám sát của các thế lực thù địch. Tác phẩm hòa quyện nhuần nhuyễn giữa tiết tấu trinh thám gay cấn và chất lãng mạn cách mạng sâu lắng đặc trưng Mỹ Latinh.",
    quote: "Nếu ngày mai tôi ngã xuống, xin đừng rơi nước mắt; hãy tiếp tục ngẩng cao đầu bước tiếp con đường vì tự do và nhân phẩm của đất nước chúng ta.",
    coverImageUrl: "/book-neu-ngay-mai-anh-chet.jpg",
    qrCode: "BSNM-062"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 13: BSNM-058 to BSNM-062)...`);

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
