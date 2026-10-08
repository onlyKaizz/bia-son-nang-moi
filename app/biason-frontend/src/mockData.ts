import { Book, CharityCampaign, GuestbookEntry } from './types';

export const INITIAL_CAMPAIGN: CharityCampaign = {
  campaign_name: 'Bìa Sờn Nắng Mới — Tri Ân Thương Binh Liệt Sĩ',
  beneficiary_name: 'Trung tâm Điều dưỡng Thương binh và Người có công Long Đất',
  beneficiary_address: 'Thị trấn Long Hải, huyện Long Điền, tỉnh Bà Rịa – Vũng Tàu',
  target_amount: 2000000,
};

export const INITIAL_BOOKS: Book[] = [
  {
    id: 1,
    qr_code: 'BSNM-001',
    title: 'Dì Hulia Và Nhà Văn Quèn',
    author: 'Mariô Vargax Lôxa (Mario Vargas Llosa)',
    publish_year: 1986,
    publisher: 'NXB Tác Phẩm Mới',
    category: 'Văn Học Dịch Thời Bao Cấp',
    price: 35000,
    condition_note: 'Bìa sờn mép nguyên bản, giấy bãi bằng ngả vàng thời kỳ 1986, gáy vững',
    summary: 'Kiệt tác hài hước tự truyện của đại văn hào giải Nobel Mario Vargas Llosa. Tác phẩm đan xen giữa mối tình sóng gió của chàng thanh niên Mario 18 tuổi với người dì họ Hulia, và những câu chuyện kịch truyền thanh kỳ lạ, đầy châm biếm sâu sắc của nhà biên kịch Pedro Camacho.',
    quote: 'Tình yêu và văn chương là hai điều cám dỗ lớn nhất của cuộc đời, khiến con người ta dám vượt qua mọi định kiến.',
    cover_image_url: '/book-di-julia.jpg',
    status: 'AVAILABLE'
  },
  {
    id: 2,
    qr_code: 'BSNM-002',
    title: '40 Năm Văn Học (Tiểu Luận Phê Bình)',
    author: 'Nhiều tác giả (Bành Bảo, Hoàng Trung Thông, Hà Minh Đức...)',
    publish_year: 1986,
    publisher: 'NXB Tác Phẩm Mới',
    category: 'Lý Luận Phê Bình Văn Học',
    price: 35000,
    condition_note: 'Ấn bản kỷ niệm 40 năm văn học cách mạng (1945-1985), bìa sờn nhuộm màu thời gian, ruột nguyên vẹn',
    summary: 'Công trình tuyển tập tiểu luận phê bình đồ sộ tổng kết 40 năm chặng đường văn học cách mạng Việt Nam (1945 - 1985). Cuốn sách ghi lại những đánh giá cốt lõi về các tác phẩm đỉnh cao thời kỳ chống Pháp, chống Mỹ và những trăn trở đổi mới đầu tiên.',
    quote: 'Bốn mươi năm văn học là bốn mươi năm đồng hành cùng máu lửa non sông, nâng niu tâm hồn người chiến sĩ.',
    cover_image_url: '/book-40-nam-van-hoc.jpg',
    status: 'AVAILABLE'
  },
  {
    id: 3,
    qr_code: 'BSNM-003',
    title: 'Kết Cục',
    author: 'Bô-rít Pô-lê-vôi (Boris Polevoy)',
    publish_year: 1985,
    publisher: 'NXB Quân Đội Nhân Dân',
    category: 'Ký Sự Chiến Tranh & Công Lý',
    price: 30000,
    condition_note: 'Bìa sờn mộc mạc, giấy in thời bao cấp nguyên vẹn chữ in typo của NXB Quân Đội Nhân Dân',
    summary: 'Tác phẩm lịch sử chấn động của nhà văn chiến sĩ Xô Viết Boris Polevoy, tường thuật lại toàn bộ quá trình Tòa án Quân sự Quốc tế Nuremberg xét xử tội phạm chiến tranh phát xít. Tác phẩm khẳng định công lý tất thắng của nhân loại tiến bộ trước bạo tàn.',
    quote: 'Tội ác chống lại loài người không bao giờ có thể bị lãng quên hay tha thứ trước tòa án lương tri.',
    cover_image_url: '/book-ket-cuc.jpg',
    status: 'AVAILABLE'
  },
  {
    id: 4,
    qr_code: 'BSNM-004',
    title: 'Tìm Trầm',
    author: 'Minh Kiên',
    publish_year: 1987,
    publisher: 'NXB Văn Nghệ TP. Hồ Chí Minh',
    category: 'Tiểu Thuyết Đời Sống & Rừng Núi',
    price: 30000,
    condition_note: 'Ấn bản 1987, bìa nghệ thuật đồ họa thập niên 80 sờn nhẹ mép sách, các trang nguyên vẹn',
    summary: 'Tiểu thuyết khắc họa hành trình gian lao, sinh tử của những người phu trầm lặn lội giữa chốn rừng sâu núi thẳm miền Trung sau ngày giải phóng. Cuộc kiếm tìm kỳ nam quý giá đan xen với việc đi tìm chính nhân cách và giá trị lương thiện của con người giữa thử thách nghiệt ngã.',
    quote: 'Trầm hương sinh ra từ vết thương của cây dó bầu; đời người muốn tỏa hương cũng phải đi qua bao thăng trầm thử thách.',
    cover_image_url: '/book-tim-tram.jpg',
    status: 'AVAILABLE'
  },
  {
    id: 5,
    qr_code: 'BSNM-005',
    title: 'Nắng Mới Trên Đỉnh Ăng-co',
    author: 'Hoàng Huân, Văn Lê, Đỗ Quảng, Nguyễn Việt Sơn, Nguyễn Khắc Viện',
    publish_year: 1981,
    publisher: 'NXB Thành Phố Hồ Chí Minh',
    category: 'Ký Sự Tình Nghĩa Quốc Tế',
    price: 30000,
    condition_note: 'Bìa màu đất nguyên bản năm 1981, khắc họa bức phù điêu Angkor, gáy sờn cổ kính',
    summary: 'Tập ký sự chân thực và xúc động viết tại chiến trường Campuchia sau khi chế độ diệt chủng Khmer Đỏ bị lật đổ. Các tác giả ghi lại bước chân nghĩa tình của bộ đội tình nguyện Việt Nam giúp nhân dân bạn hồi sinh từ cõi chết, làm bừng sáng lại ánh nắng trên kỳ quan Angkor kỳ vĩ.',
    quote: 'Tia nắng mới rọi trên đỉnh tháp cổ không chỉ báo hiệu một ngày mới, mà là sự hồi sinh của cả một dân tộc được cứu thoát khỏi diệt chủng.',
    cover_image_url: '/book-nang-moi-ang-co.jpg',
    status: 'AVAILABLE'
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [];
