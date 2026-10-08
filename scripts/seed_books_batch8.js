// Batch 8: 2 cuốn sách vừa nhận (BSNM-036 & BSNM-037)
const books = [
  {
    title: "Những Cuộc Phiêu Lưu Của Sơ-lốc Hôm (Tập III)",
    author: "Arthur Conan Doyle",
    publishYear: 1987,
    publisher: "Sở Văn Hóa & Thông Tin Lâm Đồng",
    category: "Trinh Thám Kinh Điển",
    price: 35000,
    conditionNote: "Ấn bản Tập III năm 1987 của Sở VH&TT Lâm Đồng do Phạm Quang Trung dịch, giấy bãi bằng vàng nâu đậm chất thời bao cấp, có lưu bút/chữ ký kỷ niệm ngày 12/6/87, ruột vẹn nguyên",
    summary: "Tập III trong bộ truyện trinh thám kinh điển thế giới về thám tử đại tài Sherlock Holmes và bác sĩ Watson, do dịch giả Phạm Quang Trung chuyển ngữ và Sở VH&TT Lâm Đồng xuất bản năm 1987. Tác phẩm tập hợp những vụ kỳ án hóc búa bậc nhất với phương pháp suy luận quy nạp sắc bén, đưa độc giả bước vào không khí London sương mù cuối thế kỷ 19.",
    quote: "Khi bạn đã loại trừ những điều không thể, thì điều còn lại, dù khó tin đến đâu, vẫn phải là sự thật.",
    coverImageUrl: "/book-nhung-cuoc-phieu-luu-cua-so-loc-hom-tap-3.jpg",
    qrCode: "BSNM-036"
  },
  {
    title: "Nơi Đối Mặt",
    author: "Nguyễn Ngọc Mộc",
    publishYear: 1982,
    publisher: "NXB Quân Đội Nhân Dân",
    category: "Truyện & Ký Quân Đội",
    price: 35000,
    conditionNote: "Ấn bản nguyên gốc năm 1982 của NXB Quân Đội Nhân Dân (logo QĐND), bìa màu vàng đất với phong cách đồ họa ước lệ độc đáo, mép sờn thời gian, trang giấy nhuốm màu ký ức chiến trận",
    summary: "Tập truyện giàu xúc cảm của nhà văn Quân đội Nguyễn Ngọc Mộc, do NXB Quân Đội Nhân Dân ấn hành năm 1982. Tác phẩm tái hiện những khoảnh khắc đối mặt gay cấn và thử thách cam go của người lính nơi tiền tuyến — không chỉ là đối mặt với hiểm nguy bom đạn, mà còn là đối mặt với chính phẩm giá, lý tưởng và tình đồng đội cao cả.",
    quote: "Nơi đối mặt gay gắt nhất giữa sự sống và cái chết cũng chính là nơi phẩm chất người lính ngời sáng vẻ đẹp kiên trung và nhân ái.",
    coverImageUrl: "/book-noi-doi-mat.jpg",
    qrCode: "BSNM-037"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} books (Batch 8)...`);

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
