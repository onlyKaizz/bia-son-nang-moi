import { Book, CharityCampaign, GuestbookEntry } from './types';

export const INITIAL_CAMPAIGN: CharityCampaign = {
  campaign_name: 'Bìa Sờn Nắng Mới — Tri Ân Thương Binh Liệt Sĩ',
  beneficiary_name: 'Trung tâm Điều dưỡng Thương binh và Người có công Long Đất',
  beneficiary_address: 'Thị trấn Long Hải, huyện Long Điền, tỉnh Bà Rịa – Vũng Tàu',
  target_amount: 3500000,
};

export const INITIAL_BOOKS: Book[] = [
  {
    id: 1,
    qr_code: 'BSNM-001',
    title: 'Nhật Ký Đặng Thùy Trâm',
    author: 'Đặng Thùy Trâm',
    publish_year: 2005,
    publisher: 'NXB Hội Nhà Văn',
    category: 'Ký sự & Hồi ức',
    price: 35000,
    condition_note: 'Bìa màng kiếng, giấy giữ màu ấm, chữ in sắc nét',
    summary: 'Tập nhật ký ghi lại những ngày tháng làm việc và chiến đấu kiên cường của nữ bác sĩ trẻ nơi chiến trường Đức Phổ ác liệt.',
    quote: 'Và một ngày kia, khi hòa bình lập lại, tôi sẽ nhớ mãi những ngày gian khổ này...',
    cover_image_url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600',
    status: 'AVAILABLE'
  },
  {
    id: 2,
    qr_code: 'BSNM-002',
    title: 'Nỗi Buồn Chiến Tranh',
    author: 'Bảo Ninh',
    publish_year: 1991,
    publisher: 'NXB Hội Nhà Văn',
    category: 'Văn học Kháng chiến',
    price: 40000,
    condition_note: 'Bản in cổ thập niên 90, mép bìa sờn nhẹ đã dán mép cẩn thận',
    summary: 'Tiểu thuyết kinh điển nhìn lại chiến tranh qua lăng kính ký ức và chiều sâu nội tâm của người lính bước ra từ khói lửa.',
    quote: 'Chiến tranh đã qua đi, nhưng nỗi nhớ thương đồng đội thì chẳng bao giờ nguôi ngoai.',
    cover_image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
    status: 'AVAILABLE'
  },
  {
    id: 3,
    qr_code: 'BSNM-003',
    title: 'Mảnh Trăng Cuối Rừng',
    author: 'Nguyễn Minh Châu',
    publish_year: 1970,
    publisher: 'NXB Quân Đội Nhân Dân',
    category: 'Văn học Kháng chiến',
    price: 30000,
    condition_note: 'Bìa nguyên bản 1970, giấy bãi bằng ngả vàng cổ kính',
    summary: 'Khúc tráng ca trong sáng về tình yêu kiên định giữa làn mưa bom bão đạn trên tuyến lửa Trường Sơn huyền thoại.',
    quote: 'Tình yêu trong chiến tranh như vầng trăng sáng giữa rừng đại ngàn, thanh khiết và bất diệt.',
    cover_image_url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600',
    status: 'AVAILABLE'
  },
  {
    id: 4,
    qr_code: 'BSNM-004',
    title: 'Đất Nước Đứng Lên',
    author: 'Nguyên Ngọc',
    publish_year: 1984,
    publisher: 'NXB Văn Học',
    category: 'Văn học Kháng chiến',
    price: 25000,
    condition_note: 'Gáy sách đã tân trang chỉ dù chắc chắn, giấy mộc mạc',
    summary: 'Bản anh hùng ca về anh hùng Núp và buôn làng Kông Hoa kiên cường đánh giặc giữ rẫy, giữ rừng Tây Nguyên.',
    quote: 'Làng mình nghèo nhưng bụng dạ mình rộng như rừng, sáng như ngọn lửa.',
    cover_image_url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600',
    status: 'AVAILABLE'
  },
  {
    id: 5,
    qr_code: 'BSNM-005',
    title: 'Tuyển Tập Thơ Quang Dũng',
    author: 'Quang Dũng',
    publish_year: 1988,
    publisher: 'NXB Văn Học',
    category: 'Thơ ca Thời chiến',
    price: 35000,
    condition_note: 'Ấn bản hiếm năm 1988, nét phong trần lãng mạn',
    summary: 'Tập hợp những vần thơ bất hủ Tây Tiến, Mắt người Sơn Tây hào sảng, bi tráng của đoàn binh Tây Tiến.',
    quote: 'Chiến trường đi chẳng tiếc đời xanh / Áo bào thay chiếu anh về đất.',
    cover_image_url: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600',
    status: 'AVAILABLE'
  },
  {
    id: 6,
    qr_code: 'BSNM-006',
    title: 'Ánh Trăng',
    author: 'Nguyễn Duy',
    publish_year: 1984,
    publisher: 'NXB Tác Phẩm Mới',
    category: 'Thơ ca Thời chiến',
    price: 30000,
    condition_note: 'Bìa sờn màu thời gian, tập thơ đoạt giải thưởng lớn năm 1984',
    summary: 'Khúc tâm tình nhắc nhở người lính và mỗi chúng ta về đạo lý Uống nước nhớ nguồn, không lãng quên nghĩa tình quá khứ.',
    quote: 'Ánh trăng im phăng phắc / Đủ cho ta giật mình.',
    cover_image_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600',
    status: 'AVAILABLE'
  },
  {
    id: 7,
    qr_code: 'BSNM-007',
    title: 'Mùa Lá Rụng Trong Vườn',
    author: 'Ma Văn Kháng',
    publish_year: 1985,
    publisher: 'NXB Phụ Nữ',
    category: 'Văn học Kinh điển',
    price: 35000,
    condition_note: 'Bản in 1985 thời kỳ đổi mới, bảo quản tốt',
    summary: 'Bức tranh gia đình và xã hội Hà Nội những năm đầu chuyển giao, giữ gìn đạo đức truyền thống và tình thân.',
    quote: 'Gia đình là cái nôi gìn giữ linh hồn của mỗi con người qua bao thăng trầm thời cuộc.',
    cover_image_url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600',
    status: 'AVAILABLE'
  },
  {
    id: 8,
    qr_code: 'BSNM-008',
    title: 'Tuổi Thơ Dữ Dội',
    author: 'Phùng Quán',
    publish_year: 1995,
    publisher: 'NXB Thuận Hóa',
    category: 'Văn học Kháng chiến',
    price: 40000,
    condition_note: 'Bản in năm 1995, câu chuyện về Đội thiếu niên trinh sát Trung đoàn 101',
    summary: 'Hành trình quả cảm và sự hy sinh kiên cường của các em thiếu nhi Vệ quốc đoàn tại mặt trận Thừa Thiên - Huế.',
    quote: 'Những đứa trẻ mang trái tim dũng cảm như những người lính trưởng thành.',
    cover_image_url: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600',
    status: 'AVAILABLE'
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 1,
    sender_name: 'Nguyễn Mai Anh (K18 FPT)',
    message: 'Cầm cuốn nhật ký Đặng Thùy Trâm cũ trên tay mà nghẹn ngào. Cảm ơn nhóm Bìa Sờn Nắng Mới vì một dự án vô cùng ý nghĩa hướng về các bác thương binh Long Đất!',
    created_at: '2026-10-05 09:30',
    book_title: 'Nhật Ký Đặng Thùy Trâm'
  },
  {
    id: 2,
    sender_name: 'Trần Hoàng Long',
    message: 'Vần thơ Tây Tiến vẫn luôn hào sảng như ngày nào. Chúc chiến dịch của các bạn thành công rực rỡ và quyên góp được thật nhiều cho các bác!',
    created_at: '2026-10-05 14:15',
    book_title: 'Tuyển Tập Thơ Quang Dũng'
  }
];
