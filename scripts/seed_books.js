const books = [
  {
    title: "Dì Hulia Và Nhà Văn Quèn",
    author: "Mariô Vargax Lôxa (Mario Vargas Llosa)",
    publishYear: 1986,
    publisher: "NXB Tác Phẩm Mới",
    category: "Văn Học Dịch Thời Bao Cấp",
    price: 35000,
    conditionNote: "Bìa sờn mép nguyên bản, giấy bãi bằng ngả vàng thời kỳ 1986, gáy vững",
    summary: "Kiệt tác hài hước tự truyện của đại văn hào giải Nobel Mario Vargas Llosa. Tác phẩm đan xen giữa mối tình sóng gió của chàng thanh niên Mario 18 tuổi với người dì họ Hulia, và những câu chuyện kịch truyền thanh kỳ lạ, đầy châm biếm sâu sắc của nhà biên kịch Pedro Camacho.",
    quote: "Tình yêu và văn chương là hai điều cám dỗ lớn nhất của cuộc đời, khiến con người ta dám vượt qua mọi định kiến.",
    coverImageUrl: "/book-di-julia.jpg",
    qrCode: "BSNM-001"
  },
  {
    title: "40 Năm Văn Học (Tiểu Luận Phê Bình)",
    author: "Nhiều tác giả (Bành Bảo, Hoàng Trung Thông, Hà Minh Đức...)",
    publishYear: 1986,
    publisher: "NXB Tác Phẩm Mới",
    category: "Lý Luận Phê Bình Văn Học",
    price: 35000,
    conditionNote: "Ấn bản kỷ niệm 40 năm văn học cách mạng (1945-1985), bìa sờn nhuộm màu thời gian, ruột nguyên vẹn",
    summary: "Công trình tuyển tập tiểu luận phê bình đồ sộ tổng kết 40 năm chặng đường văn học cách mạng Việt Nam (1945 - 1985). Cuốn sách ghi lại những đánh giá cốt lõi về các tác phẩm đỉnh cao thời kỳ chống Pháp, chống Mỹ và những trăn trở đổi mới đầu tiên.",
    quote: "Bốn mươi năm văn học là bốn mươi năm đồng hành cùng máu lửa non sông, nâng niu tâm hồn người chiến sĩ.",
    coverImageUrl: "/book-40-nam-van-hoc.jpg",
    qrCode: "BSNM-002"
  },
  {
    title: "Kết Cục",
    author: "Bô-rít Pô-lê-vôi (Boris Polevoy)",
    publishYear: 1985,
    publisher: "NXB Quân Đội Nhân Dân",
    category: "Ký Sự Chiến Tranh & Công Lý",
    price: 30000,
    conditionNote: "Bìa sờn mộc mạc, giấy in thời bao cấp nguyên vẹn chữ in typo của NXB Quân Đội Nhân Dân",
    summary: "Tác phẩm lịch sử chấn động của nhà văn chiến sĩ Xô Viết Boris Polevoy, tường thuật lại toàn bộ quá trình Tòa án Quân sự Quốc tế Nuremberg xét xử tội phạm chiến tranh phát xít. Tác phẩm khẳng định công lý tất thắng của nhân loại tiến bộ trước bạo tàn.",
    quote: "Tội ác chống lại loài người không bao giờ có thể bị lãng quên hay tha thứ trước tòa án lương tri.",
    coverImageUrl: "/book-ket-cuc.jpg",
    qrCode: "BSNM-003"
  },
  {
    title: "Tìm Trầm",
    author: "Minh Kiên",
    publishYear: 1987,
    publisher: "NXB Văn Nghệ TP. Hồ Chí Minh",
    category: "Tiểu Thuyết Đời Sống & Rừng Núi",
    price: 30000,
    conditionNote: "Ấn bản 1987, bìa nghệ thuật đồ họa thập niên 80 sờn nhẹ mép sách, các trang nguyên vẹn",
    summary: "Tiểu thuyết khắc họa hành trình gian lao, sinh tử của những người phu trầm lặn lội giữa chốn rừng sâu núi thẳm miền Trung sau ngày giải phóng. Cuộc kiếm tìm kỳ nam quý giá đan xen với việc đi tìm chính nhân cách và giá trị lương thiện của con người giữa thử thách nghiệt ngã.",
    quote: "Trầm hương sinh ra từ vết thương của cây dó bầu; đời người muốn tỏa hương cũng phải đi qua bao thăng trầm thử thách.",
    coverImageUrl: "/book-tim-tram.jpg",
    qrCode: "BSNM-004"
  },
  {
    title: "Nắng Mới Trên Đỉnh Ăng-co",
    author: "Hoàng Huân, Văn Lê, Đỗ Quảng, Nguyễn Việt Sơn, Nguyễn Khắc Viện",
    publishYear: 1981,
    publisher: "NXB Thành Phố Hồ Chí Minh",
    category: "Ký Sự Tình Nghĩa Quốc Tế",
    price: 30000,
    conditionNote: "Bìa màu đất nguyên bản năm 1981, khắc họa bức phù điêu Angkor, gáy sờn cổ kính",
    summary: "Tập ký sự chân thực và xúc động viết tại chiến trường Campuchia sau khi chế độ diệt chủng Khmer Đỏ bị lật đổ. Các tác giả ghi lại bước chân nghĩa tình của bộ đội tình nguyện Việt Nam giúp nhân dân bạn hồi sinh từ cõi chết, làm bừng sáng lại ánh nắng trên kỳ quan Angkor kỳ vĩ.",
    quote: "Tia nắng mới rọi trên đỉnh tháp cổ không chỉ báo hiệu một ngày mới, mà là sự hồi sinh của cả một dân tộc được cứu thoát khỏi diệt chủng.",
    coverImageUrl: "/book-nang-moi-ang-co.jpg",
    qrCode: "BSNM-005"
  }
];

async function seed() {
  console.log("Seeding 5 books to Render Backend...");
  for (const b of books) {
    try {
      const res = await fetch("https://bia-son-nang-moi.onrender.com/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(b)
      });
      const data = await res.json();
      console.log("Inserted:", b.title, "-> status:", res.status, "data:", data.data?.bookId);
    } catch (e) {
      console.error("Error inserting", b.title, e);
    }
  }
  console.log("Done!");
}

seed();
