// Batch 18: 1 cuốn sách mới BSNM-083 (Mưa - Somerset Maugham)
const books = [
  {
    title: "Mưa (Tập Truyện — Tập 2)",
    author: "W. Somerset Maugham (Xômơxét Môôm)",
    publishYear: 1984,
    publisher: "Nhà Xuất Bản Tác Phẩm Mới (Hội Nhà Văn)",
    category: "Truyện Ngắn Văn Học Anh Cổ Điển",
    price: 35000,
    conditionNote: "Ấn bản năm 1984 của NXB Tác Phẩm Mới, bìa giấy mộc nâu đất tối giản in chữ 'MƯA' nhỏ góc trên, giữ nguyên vẻ đẹp mộc mạc của ấn phẩm thời bao cấp, sờn mép phong trần, ruột nguyên vẹn",
    summary: "Kiệt tác tập truyện ngắn của đại văn hào người Anh W. Somerset Maugham do NXB Tác Phẩm Mới (tiền thân NXB Hội Nhà Văn) ấn hành năm 1984. Tác phẩm kinh điển 'Mưa' (Rain) lấy bối cảnh một hòn đảo nhiệt đới Nam Thái Bình Dương ngập chìm trong những cơn mưa dầm dề bất tận, nơi diễn ra cuộc đối đầu nghẹt thở giữa nhà truyền giáo cuồng tín Davidson và cô gái điếm Sadie Thompson, bóc trần sự giả tạo đạo đức và bản chất phức tạp khôn lường của tâm lý con người.",
    quote: "Cơn mưa nhiệt đới không chỉ trút nước xuống mặt đất, mà như xối rửa và lột trần mọi lớp mặt nạ đạo đức giả để lộ ra bản năng sâu kín nhất của con người.",
    coverImageUrl: "/book-mua-somerset-maugham.jpg",
    qrCode: "BSNM-083"
  }
];

async function seed() {
  const API_URL = "https://bia-son-nang-moi.onrender.com/api/books";
  console.log(`Starting to seed ${books.length} book (Batch 18: BSNM-083)...`);

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
