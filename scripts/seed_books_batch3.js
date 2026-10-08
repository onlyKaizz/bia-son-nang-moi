const books = [
  {
    title: "Hợp Tuyển Thơ Văn Việt Nam (1858 - 1920) — Quyển II",
    author: "Huỳnh Lý (Chủ biên) - Viện Văn Học",
    publishYear: 1984,
    publisher: "NXB Văn Học",
    category: "Thơ Văn & Tư Liệu Lịch Sử",
    price: 35000,
    conditionNote: "Ấn bản Quyển II (1984) của NXB Văn Học, bìa vàng đất sờn gáy cổ kính, giấy mộc thời bao cấp ngả vàng nhuốm màu thời gian, chữ in sắc nét",
    summary: "Công trình học thuật đồ sộ và chuẩn mực do Viện Văn học biên soạn (Huỳnh Lý chủ biên cùng các học giả uy tín). Sách tuyển chọn và khảo cứu sâu sắc các áng thơ văn yêu nước tiêu biểu của dân tộc giai đoạn giao thời biến động (1858 - 1920), thể hiện khí phách kiên trung, tư tưởng canh tân và hồn cốt văn chương nước nhà.",
    quote: "Mỗi trang thơ văn giai đoạn 1858 - 1920 không chỉ là nghệ thuật ngôn từ, mà là tiếng lòng yêu nước, là khí phách quật cường của những bậc chí sĩ tiền bối.",
    coverImageUrl: "/book-hop-tuyen-tho-van.jpg",
    qrCode: "BSNM-011"
  },
  {
    title: "Tơ Vương (Tập 2)",
    author: "Vân Nhi",
    publishYear: 1989,
    publisher: "NXB Văn Nghệ",
    category: "Tiểu Thuyết & Tình Cảm Tuổi Trẻ",
    price: 30000,
    conditionNote: "Bìa màu vintage thập niên 80-90 ghim gáy nguyên bản, sờn mép thời gian, màu ảnh mang đậm hoài niệm tuổi học trò",
    summary: "Tiểu thuyết tâm lý tình cảm giàu chất thơ của tác giả Vân Nhi. Câu chuyện xoay quanh những mối tơ vương tinh khôi, những rung động sâu kín và trăn trở trưởng thành của thế hệ thanh niên trí thức cuối thập niên 80, đan xen giữa ước mơ hoài bão và tình yêu trong sáng.",
    quote: "Tuổi trẻ như một khúc dạo đầu êm đềm, dẫu mang bao mối tơ vương vương vấn vẫn giữ vẹn nguyên sự thánh thiện của tâm hồn.",
    coverImageUrl: "/book-to-vuong.jpg",
    qrCode: "BSNM-012"
  },
  {
    title: "Gặp Gỡ Cuối Năm & Thời Gian Của Người",
    author: "Nguyễn Khải",
    publishYear: 1985,
    publisher: "NXB Tác Phẩm Mới",
    category: "Tiểu Thuyết Xã Hội Hiện Thực",
    price: 35000,
    conditionNote: "Ấn bản nguyên bản NXB Tác Phẩm Mới (TPM) năm 1985, bìa hai mảng màu vàng - nâu sờn mép phong trần, ruột nguyên vẹn, gáy chắc",
    summary: "Tập hợp hai kiệt tác tiểu thuyết đỉnh cao của nhà văn Nguyễn Khải - người từng nhận Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật. 'Gặp gỡ cuối năm' (Giải thưởng Hội Nhà văn 1982) và 'Thời gian của người' là những trang văn sắc sảo, đối thoại triết lý sâu cay về nhân tâm, sự biến thiên của lịch sử và bản lĩnh con người thời hậu chiến.",
    quote: "Thời gian không làm mất đi những giá trị chân chính; trong cuộc gặp gỡ giữa các số phận, sự thấu hiểu và lòng nhân ái là điều còn lại sau cùng.",
    coverImageUrl: "/book-gap-go-cuoi-nam.jpg",
    qrCode: "BSNM-013"
  },
  {
    title: "Mô Da (Cuộc Đời & Sự Nghiệp W. A. Mozart)",
    author: "Bằng Việt",
    publishYear: 1978,
    publisher: "NXB Văn Hóa",
    category: "Âm Nhạc & Tiểu Sử Danh Nhân",
    price: 35000,
    conditionNote: "Ấn bản quý hiếm của NXB Văn Hóa, bìa xanh lam cổ điển in chân dung Wolfgang Amadeus Mozart trong khung oval trang nhã, dấu thư viện xưa, gáy nguyên vẹn",
    summary: "Cuốn sách tiểu sử nghệ thuật đầu tiên và kinh điển tại Việt Nam viết về thiên tài âm nhạc Wolfgang Amadeus Mozart, do nhà thơ danh tiếng Bằng Việt biên soạn bằng ngòi bút tài hoa và tình yêu âm nhạc sâu sắc. Tác phẩm tái hiện sống động cuộc đời thần đồng rực rỡ nhưng cũng đầy thăng trầm, bi kịch của Mozart.",
    quote: "Âm nhạc của Mozart là ánh sáng thuần khiết nhất rọi vào tâm hồn nhân loại, nơi mọi nỗi đau đời đều hóa thành thanh âm vĩnh cửu.",
    coverImageUrl: "/book-mo-da.jpg",
    qrCode: "BSNM-014"
  },
  {
    title: "Mái Nhà Xanh",
    author: "Hoàng Minh Nhân",
    publishYear: 1985,
    publisher: "NXB Thanh Niên",
    category: "Truyện Ký & Đời Sống Tuổi Trẻ",
    price: 30000,
    conditionNote: "Ấn bản gốc NXB Thanh Niên năm 1985, bìa minh họa phong cách tranh khắc gỗ ấn tượng ba gương mặt thanh niên, giấy bãi bằng ngả vàng mộc mạc",
    summary: "Tập truyện ký tiêu biểu của nhà văn chiến sĩ Hoàng Minh Nhân do NXB Thanh Niên ấn hành. Bằng lối văn chân thật, tác phẩm kể về những người trẻ giàu nhiệt huyết, cùng nhau dựng xây 'mái nhà xanh' của tình đồng đội, lao động và lý tưởng sống cống hiến trong những năm tháng khó khăn của đất nước.",
    quote: "Dưới mái nhà chung ấm áp của tình thương và lý tưởng, tuổi trẻ tìm thấy ý nghĩa trọn vẹn nhất của cuộc đời mình.",
    coverImageUrl: "/book-mai-nha-xanh.jpg",
    qrCode: "BSNM-015"
  }
];

async function seedBatch3() {
  console.log("🚀 Bắt đầu thêm 5 cuốn sách Đợt 3 vào Database Render...");
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

  console.log(`\n🎉 Hoàn thành: Đã thêm ${successCount}/${books.length} cuốn sách đợt 3.`);
}

seedBatch3();
