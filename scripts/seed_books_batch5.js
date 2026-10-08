const books = [
  {
    title: "Ngôi Nhà Của Những Hồn Ma",
    author: "Isaben Adendê (Isabel Allende)",
    publishYear: 1988,
    publisher: "NXB Văn Học",
    category: "Văn Học Mỹ Latinh & Hiện Thực Huyền Ảo",
    price: 40000,
    conditionNote: "Ấn bản nguyên gốc năm 1988 của NXB Văn Học, bìa vàng cam in họa tiết tranh khắc gỗ cổ điển, sờn mép mộc mạc, giấy bãi bằng ngả vàng đều",
    summary: "Kiệt tác tiểu thuyết hiện thực huyền ảo đầu tay chấn động văn đàn thế giới của nữ văn sĩ Chile lừng danh Isabel Allende (nguyên tác 'La casa de los espíritus'). Tác phẩm trải dài qua ba thế hệ của dòng họ Trueba, đan xen giữa tình yêu, số phận bi tráng, năng lực ngoại cảm kỳ diệu và những biến động lịch sử đẫm máu của đất nước Chile, được ví như 'Trăm năm cô đơn' của phái nữ.",
    quote: "Ký ức là sợi dây mong manh nối liền cõi sống với những linh hồn đã khuất, để tình yêu và lòng kiêu hãnh không bao giờ bị thời gian vùi lấp.",
    coverImageUrl: "/book-ngoi-nha-cua-nhung-hon-ma.jpg",
    qrCode: "BSNM-021"
  },
  {
    title: "Lửa Lạnh",
    author: "Nhật Tuấn",
    publishYear: 1988,
    publisher: "NXB Phụ Nữ",
    category: "Tiểu Thuyết Xã Hội Hiện Thực",
    price: 35000,
    conditionNote: "Ấn bản năm 1988 của NXB Phụ Nữ, bìa tranh vẽ gương mặt phụ nữ u buồn ấn tượng với nét vẽ typo đỏ - tím độc đáo, giấy thời bao cấp nhuốm màu thời gian",
    summary: "Tiểu thuyết đặc sắc của nhà văn Nhật Tuấn ra đời trong giai đoạn văn học khởi sắc đầu thời kỳ Đổi Mới. Tác phẩm đào sâu vào những góc khuất tâm lý, sự xung đột giữa khát vọng hạnh phúc cá nhân và những định kiến khắt khe của xã hội, miêu tả thứ 'ngọn lửa lạnh' âm ỉ thiêu đốt tâm hồn con người trước ngã rẽ cuộc đời.",
    quote: "Có những ngọn lửa không bùng cháy rực rỡ mà âm ỉ lạnh giá, thiêu đốt tâm can con người giữa những giằng xé của số phận.",
    coverImageUrl: "/book-lua-lanh.jpg",
    qrCode: "BSNM-022"
  },
  {
    title: "Cái Đầm Ma (La Mare au Diable)",
    author: "Giorgio Xăng (George Sand)",
    publishYear: 1985,
    publisher: "NXB Văn Học",
    category: "Văn Học Kinh Điển Pháp",
    price: 35000,
    conditionNote: "Ấn bản NXB Văn Học, bìa giấy mộc màu nâu đất in minh họa chân dung hình học thanh lịch, sờn góc gáy nguyên bản, ruột sách sạch đẹp",
    summary: "Kiệt tác tiểu thuyết đồng quê tiêu biểu nhất của nữ văn hào Pháp George Sand (Amantine Lucile Dupin). Tác phẩm mở ra bức tranh thiên nhiên tuyệt mỹ và câu chuyện tình yêu mộc mạc, thuần khiết giữa chàng nông dân Germain góa vợ và cô gái Marie nghèo khó bên chiếc đầm lầy ma quái, ca ngợi phẩm giá cao đẹp của những con người lao động lương thiện.",
    quote: "Tình yêu chân chính không bao giờ cần đến sự giả dối hay tính toán; nó tỏa sáng giản dị như giọt sương mai trên cỏ nội đồng quê.",
    coverImageUrl: "/book-cai-dam-ma.jpg",
    qrCode: "BSNM-023"
  },
  {
    title: "Đất Lành Nơi Người Lính Trở Về",
    author: "Nhiều Tác Giả (Mai Linh Corporation tuyển chọn)",
    publishYear: 2005,
    publisher: "NXB Thanh Niên",
    category: "Ký Sự & Tri Ân Người Lính",
    price: 35000,
    conditionNote: "Bìa màu xanh lá biểu trưng hy vọng và hòa bình, hình ảnh nụ cười rạng rỡ của người lính và thế hệ trẻ, ruột in sạch đẹp, gáy chắc chắn",
    summary: "Tập ký sự và hồi ức xúc động do NXB Thanh Niên phối hợp phát hành, tôn vinh những người lính Cụ Hồ sau ngày đất nước hòa bình trở về với đời thường. Dù mang trên mình thương tật và ký ức chiến tranh khốc liệt, họ vẫn tiếp tục cống hiến trên mặt trận lao động xây dựng đất nước, gắn liền với tinh thần tri ân thương binh - bệnh binh sâu sắc của dự án Bìa Sờn Nắng Mới.",
    quote: "Đất nước thanh bình là mảnh đất lành che chở cho những người lính trở về, nơi những vết thương chiến tranh được xoa dịu bằng tình thương và sự tri ân.",
    coverImageUrl: "/book-dat-lanh-noi-nguoi-linh-tro-ve.jpg",
    qrCode: "BSNM-024"
  },
  {
    title: "Một Cõi Nhân Gian Bé Tí",
    author: "Nguyễn Khải",
    publishYear: 1989,
    publisher: "NXB Mũi Cà Mau",
    category: "Tiểu Thuyết Chiêm Nghiệm & Đổi Mới",
    price: 35000,
    conditionNote: "Ấn bản nguyên bản năm 1989 của NXB Mũi Cà Mau (logo MCM), bìa tranh sơn dầu hoang hoải thời gian sờn mép phong trần, ruột nguyên vẹn",
    summary: "Một trong những tiểu thuyết chiêm nghiệm xuất sắc của nhà văn Nguyễn Khải (Giải thưởng Hồ Chí Minh) viết sau khi chuyển vào sinh sống tại miền Nam thời Đổi Mới. Bằng giọng văn điềm đạm, hóm hỉnh và sắc sảo, tác giả soi chiếu vào số phận những con người bình thường trong 'một cõi nhân gian bé tí' để tự vấn và đúc kết những quy luật sâu sắc về nhân tình thế thái.",
    quote: "Cuộc đời dẫu chỉ là một cõi nhân gian bé tí, nhưng trong cõi ấy chứa đựng tất cả hỷ nộ ái ố và phẩm giá không thể trộn lẫn của con người.",
    coverImageUrl: "/book-mot-coi-nhan-gian-be-ti.jpg",
    qrCode: "BSNM-025"
  }
];

async function seedBatch5() {
  console.log("🚀 Bắt đầu thêm 5 cuốn sách Đợt 5 vào Database Render...");
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

  console.log(`\n🎉 Hoàn thành: Đã thêm ${successCount}/${books.length} cuốn sách đợt 5.`);
}

seedBatch5();
