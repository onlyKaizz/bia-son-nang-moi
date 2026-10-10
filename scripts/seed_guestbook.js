// scripts/seed_guestbook.js
const entries = [
  {
    senderName: "Lê Quang Thái",
    message: "Tối nay đọc xong cuốn sách thấy lòng nhẹ nhõm hẳn. Chúc các cô chú ở trung tâm Long Hải luôn mạnh khỏe, ngủ thật ngon giấc ạ.",
    createdAt: "2026-10-10T21:40:00"
  },
  {
    senderName: "Trịnh Cẩm Tú",
    message: "Tụi con ghé mua sách vừa tìm được sách hay vừa góp được chút tấm lòng nhỏ. Chúc các bác luôn bình an và nhiều niềm vui.",
    createdAt: "2026-10-10T20:15:00"
  },
  {
    senderName: "Hoàng Quốc Bảo",
    message: "Nhờ có các bác mà thế hệ tụi con mới có những ngày tháng yên bình để cắp sách tới trường. Chúc các bác thương binh luôn an vui!",
    createdAt: "2026-10-10T18:50:00"
  },
  {
    senderName: "Tô Ánh Nguyệt",
    message: "Hôm nay trời trở gió, con mong các bác giữ ấm và bớt đau nhức ở các vết thương xưa nhé ạ.",
    createdAt: "2026-10-10T17:25:00"
  },
  {
    senderName: "Lương Hoài Nam",
    message: "Một cuốn sách cũ đổi lại một nụ cười, chúc các cô chú ở trung tâm luôn dồi dào sức khỏe và yêu đời.",
    createdAt: "2026-10-10T16:10:00"
  },
  {
    senderName: "Nguyễn Tấn Đạt",
    message: "Mong các bác ở Long Hải luôn có thật nhiều tiếng cười bên bạn bè đồng đội mỗi ngày.",
    createdAt: "2026-10-10T14:45:00"
  },
  {
    senderName: "Phan Thị Diệu My",
    message: "Cảm ơn ban tổ chức vì một dự án rất ấm áp. Con kính chúc các bác thương bệnh binh luôn lạc quan, sống vui khỏe cùng con cháu.",
    createdAt: "2026-10-10T11:20:00"
  },
  {
    senderName: "Đỗ Hữu Nghĩa",
    message: "Biết ơn các bác đã cống hiến cả thanh xuân cho đất nước. Chúc các bác ăn ngon miệng và luôn khỏe khoắn ạ.",
    createdAt: "2026-10-10T09:35:00"
  },
  {
    senderName: "Huỳnh Khánh Linh",
    message: "Con cầm trên tay cuốn sách mà thấy vui lây vì biết tiền bán sách sẽ gửi về trung tâm. Kính chúc các bác thật nhiều sức khỏe!",
    createdAt: "2026-10-09T20:50:00"
  },
  {
    senderName: "Bùi Gia Khiêm",
    message: "Chúc các chú, các bác ở Trung tâm Long Đất luôn giữ vững tinh thần thép của người lính và mỗi ngày đều thật an vui.",
    createdAt: "2026-10-09T17:30:00"
  },
  {
    senderName: "Ngô Thanh Trúc",
    message: "Tụi con sinh ra thời bình, mỗi lần nghe chuyện về các bác lại càng thấy trân quý cuộc sống này hơn. Con chúc các bác sống lâu, khỏe mạnh ạ.",
    createdAt: "2026-10-09T15:15:00"
  },
  {
    senderName: "Vũ Thị Ngọc Hà",
    message: "Gửi chút tình cảm của sinh viên tụi con tới vùng biển Long Hải. Chúc các cô chú trung tâm luôn ngập tràn tiếng cười.",
    createdAt: "2026-10-09T10:05:00"
  },
  {
    senderName: "Phạm Đức Huy",
    message: "Mong một phần đóng góp nhỏ bé này tiếp thêm chút ấm áp cho các bác thương binh. Chúc các bác vạn sự như ý!",
    createdAt: "2026-10-08T19:40:00"
  },
  {
    senderName: "Đặng Mai Phương",
    message: "Hy vọng cuốn sách này sẽ sớm tìm được chủ mới để có thêm kinh phí gửi tới trung tâm. Chúc các bác luôn mạnh khỏe!",
    createdAt: "2026-10-08T16:20:00"
  },
  {
    senderName: "Trần Hoàng Long",
    message: "Kính chúc các cô chú, các bác thương bệnh binh tại Long Hải luôn dồi dào sức khỏe, an dưỡng thật tốt ạ.",
    createdAt: "2026-10-08T13:10:00"
  },
  {
    senderName: "Lê Thảo Vy",
    message: "Tụi con luôn ghi nhớ công ơn của thế hệ cha anh đi trước. Chúc các bác mỗi ngày đều bình yên và vui tươi.",
    createdAt: "2026-10-08T09:50:00"
  },
  {
    senderName: "Nguyễn Minh Quân",
    message: "Chào các bác ở Trung tâm Long Đất ạ, con chúc các bác luôn khỏe mạnh, thanh thản và luôn ấm lòng vì mọi người vẫn luôn nhớ tới các bác.",
    createdAt: "2026-10-07T16:30:00"
  }
];

async function run() {
  const url = "https://bia-son-nang-moi.onrender.com/api/guestbook";
  console.log("Xóa toàn bộ lưu bút cũ trên server...");
  try {
    const delRes = await fetch(url, { method: "DELETE" });
    console.log("Xóa thành công:", delRes.ok);
  } catch (err) {
    console.error("Lỗi xóa:", err.message);
  }

  console.log(`Đang thêm ${entries.length} lưu bút với lời văn tự nhiên và thời gian riêng biệt...`);
  // Đảo ngược để khi nạp xong, bản ghi mới nhất hiển thị trên đầu
  const reversed = [...entries].reverse();
  for (let i = 0; i < reversed.length; i++) {
    const e = reversed[i];
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e)
      });
      if (res.ok) {
        console.log(`✅ [${i + 1}/${reversed.length}] Đã thêm: ${e.senderName} (${e.createdAt})`);
      } else {
        console.error(`❌ Thất bại ${e.senderName}:`, res.status, await res.text());
      }
    } catch (err) {
      console.error(`❌ Lỗi mạng ${e.senderName}:`, err.message);
    }
  }
}

run();
