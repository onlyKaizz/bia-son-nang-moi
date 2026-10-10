// Batch 17: 5 cuốn sách mới (BSNM-078 đến BSNM-082)
const books = [
  {
    title: "Gặp Gỡ Cuối Năm & Thời Gian Của Người",
    author: "Nguyễn Khải",
    publishYear: 1985,
    publisher: "Nhà Xuất Bản Tác Phẩm Mới (Hội Nhà Văn)",
    category: "Tiểu Thuyết Xã Hội & Thế Sự Đổi Mới",
    price: 35000,
    conditionNote: "Ấn bản năm 1985 của NXB Tác Phẩm Mới in gộp hai tiểu thuyết kinh điển, bìa typo chữ xanh đậm trên nền giấy mộc nâu tím thời bao cấp, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Tập hợp hai tiểu thuyết bước ngoặt đỉnh cao trong sự nghiệp của nhà văn Nguyễn Khải: 'Gặp gỡ cuối năm' (Giải thưởng Hội Nhà văn 1982) và 'Thời gian của người' (1985). Tác phẩm tái hiện bức tranh xã hội Sài Gòn và đất nước những năm đầu sau ngày thống nhất, đi sâu vào những cuộc đối thoại trí tuệ, những va đập tư tưởng và chiều sâu tâm lý con người trong thời kỳ chuyển mình của lịch sử.",
    quote: "Thời gian của đời người ngắn ngủi lắm, nhưng những cuộc tao ngộ chân thành và sự thức tỉnh lương tri sẽ còn đọng lại mãi với thời gian.",
    coverImageUrl: "/book-gap-go-cuoi-nam-thoi-gian-cua-nguoi.jpg",
    qrCode: "BSNM-078"
  },
  {
    title: "Nơi Đối Mặt (Truyện)",
    author: "Nguyễn Ngọc Mộc",
    publishYear: 1982,
    publisher: "Nhà Xuất Bản Quân Đội Nhân Dân",
    category: "Truyện Chiến Tranh & Tình Báo Vùng Sâu",
    price: 35000,
    conditionNote: "Ấn bản năm 1982 của NXB Quân Đội Nhân Dân, bìa đồ họa chia đôi mảng màu vàng - nâu đất với hai đôi mắt đối đầu đầy biểu cảm, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tác phẩm truyện chiến tranh phản gián đặc sắc của nhà văn quân đội Nguyễn Ngọc Mộc do NXB Quân Đội Nhân Dân ấn hành năm 1982. Cuốn sách tái hiện cuộc đấu trí và đấu lực cam go, thầm lặng của các chiến sĩ cách mạng ngay tại hang ổ quân thù — nơi ranh giới giữa sự sống và cái chết, giữa lòng trung kiên và sự phản bội mong manh như sợi tóc.",
    quote: "Nơi đối mặt với hiểm nguy và cám dỗ chính là nơi bản lĩnh và phẩm giá của người chiến sĩ được thử thách khắc nghiệt nhất.",
    coverImageUrl: "/book-noi-doi-mat.jpg",
    qrCode: "BSNM-079"
  },
  {
    title: "Calêvala (Truyện Dân Gian Phần Lan)",
    author: "Elias Lönnrot (Cao Xuân Nghiệp dịch)",
    publishYear: 1986,
    publisher: "Nhà Xuất Bản Mũi Cà Mau",
    category: "Sử Thi & Văn Học Dân Gian Bắc Âu",
    price: 35000,
    conditionNote: "Ấn bản năm 1986 của NXB Mũi Cà Mau, bìa tranh vẽ nữ nhân chơi đàn hạc Kantele cổ truyền trên nền giấy mộc bao cấp, sờn mép phong trần, ruột nguyên vẹn",
    summary: "Bản chuyển ngữ sử thi vĩ đại Kalevala của nhân dân Phần Lan do dịch giả Cao Xuân Nghiệp thực hiện, NXB Mũi Cà Mau ấn hành năm 1986. Tác phẩm dẫn dắt người đọc vào thế giới thần thoại huyền bí phương Bắc với những bản anh hùng ca về các dũng sĩ, các vị thần thiên nhiên và chiếc cối xay thần Sampo mang lại ấm no hạnh phúc, đậm đà bản sắc văn hóa dân gian Bắc Âu.",
    quote: "Tiếng đàn Kantele cất lên xua tan băng giá nghìn năm, gieo mầm sống và niềm tin vào sức mạnh bất diệt của con người.",
    coverImageUrl: "/book-calevala.jpg",
    qrCode: "BSNM-080"
  },
  {
    title: "Nữ Bá Tước Đơ Caliôxtrô (La Comtesse de Cagliostro)",
    author: "Maurice Leblanc (Môrix Lơblăng)",
    publishYear: 1988,
    publisher: "Nhà Xuất Bản Pháp Lý",
    category: "Tiểu Thuyết Trinh Thám & Phiêu Lưu Pháp",
    price: 35000,
    conditionNote: "Ấn bản năm 1988 của NXB Pháp Lý, bìa ảnh màu phong cách cổ điển Pháp với hình ảnh giai nhân thời Phục hưng và chân đèn 7 ngọn, sờn mép thời bao cấp, ruột nguyên vẹn",
    summary: "Tiểu thuyết trinh thám phiêu lưu ly kỳ trong series về siêu đạo chích hào hoa Arsène Lupin của Maurice Leblanc, do NXB Pháp Lý ấn hành năm 1988. Cuộc so tài nghẹt thở giữa chàng hiệp sĩ trộm Lupin thời trẻ và người đàn bà bí ẩn mưu mô — Nữ bá tước Cagliostro xoay quanh bí mật kho báu bốn tu viện cổ xưa, tràn ngập những màn suy luận sắc sảo và phiêu lưu mạo hiểm.",
    quote: "Trong trò chơi của trí tuệ và danh dự, kẻ chiến thắng thực sự không phải là người chiếm được kho báu mà là người giữ được trái tim hiệp sĩ.",
    coverImageUrl: "/book-nu-ba-tuoc-do-calioxtro.jpg",
    qrCode: "BSNM-081"
  },
  {
    title: "Ngôi Nhà Của Những Hồn Ma (La Casa de los Espíritus)",
    author: "Isabel Allende (Isaben Adenđê)",
    publishYear: 1987,
    publisher: "Nhà Xuất Bản Văn Học, Hà Nội",
    category: "Tiểu Thuyết Hiện Thực Huyền Ảo Mỹ Latinh",
    price: 35000,
    conditionNote: "Ấn bản năm 1987 của NXB Văn Học (Mạnh Tứ & Đoàn Đình Ca dịch), bìa mảng màu cam đất in tranh khắc nét ngôi nhà và các nhân vật ma mị, mép sờn thời gian, ruột nguyên vẹn",
    summary: "Kiệt tác tiểu thuyết hiện thực huyền ảo đầu tay chấn động văn đàn thế giới của nữ văn hào Chile Isabel Allende, NXB Văn Học ấn hành năm 1987. Tác phẩm kể về bốn thế hệ dòng họ Trueba trong bối cảnh những biến động chính trị bão táp của Chile thế kỷ XX, hòa quyện tuyệt vời giữa lịch sử đẫm máu, tình yêu say đắm và thế giới tâm linh kỳ bí.",
    quote: "Ký ức là sợi dây duy nhất kết nối những linh hồn đã khuất với sự sống, nhắc nhở chúng ta về cội nguồn và lòng tha thứ.",
    coverImageUrl: "/book-ngoi-nha-cua-nhung-hon-ma.jpg",
    qrCode: "BSNM-082"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 17: BSNM-078 to BSNM-082)...`);

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
