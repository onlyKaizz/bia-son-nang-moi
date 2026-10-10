// scripts/seed_guestbook.js
const entries = [
  { senderName: "Nguyễn Minh Quân", message: "Kính chúc các cô chú, các bác ở Trung tâm Long Đất luôn dồi dào sức khỏe và an vui trong cuộc sống ạ." },
  { senderName: "Lê Thảo Vy", message: "Tụi con thế hệ trẻ luôn biết ơn sự hy sinh thầm lặng của các bác vì độc lập hôm nay. Chúc các bác thật nhiều niềm vui!" },
  { senderName: "Trần Hoàng Long", message: "Mong một phần đóng góp nhỏ từ việc mua sách cũ có thể gửi gắm chút ấm áp đến các cô chú thương binh tại Long Hải." },
  { senderName: "Đặng Mai Phương", message: "Mỗi cuốn sách trao đi là một tấm lòng tụi con hướng về các bác ở trung tâm. Kính chúc các bác luôn khỏe mạnh, yêu đời!" },
  { senderName: "Phạm Đức Huy", message: "Con chúc các bác nhiều sức khỏe, những ngày trái gió trở trời vết thương bớt đau và luôn thấy ấm lòng vì chúng con luôn nhớ ơn." },
  { senderName: "Vũ Thị Ngọc Hà", message: "Cảm ơn dự án ý nghĩa này. Chúc các cô chú, các bác tại Trung tâm Long Đất mỗi ngày đều trọn vẹn bình yên và niềm vui!" },
  { senderName: "Ngô Thanh Trúc", message: "Mong các bác thương binh luôn giữ nụ cười và tinh thần lạc quan. Tụi con luôn tự hào và biết ơn thế hệ đi trước thật nhiều." },
  { senderName: "Bùi Gia Khiêm", message: "Xin gửi ngàn lời tri ân chân thành nhất tới các bác. Chúc các bác ăn ngon miệng, ngủ ngon giấc và sống vui khỏe mỗi ngày." },
  { senderName: "Huỳnh Khánh Linh", message: "Cầm cuốn sách cũ trên tay mà thấy ấm lòng vì biết số tiền này sẽ tới được với các cô chú ở Trung tâm Long Đất." },
  { senderName: "Đỗ Hữu Nghĩa", message: "Kính chúc các bác thương binh, bệnh binh trung tâm Long Đất luôn mạnh khỏe, thanh thản bên bạn bè đồng đội!" },
  { senderName: "Phan Thị Diệu My", message: "Tụi con sinh viên thế hệ sau chỉ biết nói lời cảm ơn sâu sắc nhất tới công lao của các bác. Chúc các bác trường thọ và an nhiên ạ." },
  { senderName: "Nguyễn Tấn Đạt", message: "Chúc các bác luôn nhiều sức khỏe, tinh thần sảng khoái và nhận được thật nhiều sự quan tâm từ cộng đồng." },
  { senderName: "Lương Hoài Nam", message: "Một việc nhỏ nhưng mong mang lại niềm vui lớn tới trung tâm. Chúc các cô chú luôn ấm áp và yêu đời!" },
  { senderName: "Tô Ánh Nguyệt", message: "Con chúc các bác vượt qua những cơn đau nhức khi trở trời và mỗi ngày đều có thật nhiều tiếng cười rộn rã." },
  { senderName: "Hoàng Quốc Bảo", message: "Kính chúc các bác thương bệnh binh Long Hải luôn vững vàng, mạnh khỏe và sống an vui trong tình yêu thương của mọi người." },
  { senderName: "Trịnh Cẩm Tú", message: "Biết ơn các thế hệ cha anh đã cho chúng con một đất nước hòa bình. Con kính chúc các bác vạn sự an khang!" },
  { senderName: "Lê Quang Thái", message: "Chúc các cô chú ở trung tâm luôn khỏe mạnh, an dưỡng thật tốt và luôn cảm nhận được lòng biết ơn từ giới trẻ tụi con." }
];

async function run() {
  const url = "https://bia-son-nang-moi.onrender.com/api/guestbook";
  console.log("Xóa toàn bộ lưu bút cũ...");
  try {
    const delRes = await fetch(url, { method: "DELETE" });
    console.log("Delete all result:", delRes.ok);
  } catch (err) {
    console.error("Lỗi xóa:", err.message);
  }

  console.log(`Bắt đầu thêm lại ${entries.length} lưu bút chỉ có họ tên thuần túy...`);
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e)
      });
      if (res.ok) {
        console.log(`✅ [${i + 1}/${entries.length}] Added: ${e.senderName}`);
      } else {
        console.error(`❌ Failed ${e.senderName}:`, res.status, await res.text());
      }
    } catch (err) {
      console.error(`❌ Error ${e.senderName}:`, err.message);
    }
  }
}

run();
