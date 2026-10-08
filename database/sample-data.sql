-- ============================================================================
-- Seed Sample Data — Bìa Sờn Nắng Mới
-- Dữ liệu 15 cuốn sách thật thời kỳ 1970 - 2000 phục vụ trưng bày & bán gây quỹ
-- ============================================================================

-- 1. Thể loại sách
INSERT INTO categories (category_id, name, description) VALUES
(1, 'Văn học Kháng chiến & Cách mạng', 'Các tác phẩm văn học phản ánh hiện thực chiến tranh, ý chí quật cường của quân và dân ta.'),
(2, 'Ký sự & Hồi ức Chiến trường', 'Ghi chép chân thực từ chiến sĩ và nhân chứng lịch sử trực tiếp ngoài mặt trận.'),
(3, 'Thơ ca Thời chiến', 'Những vần thơ hào sảng, lắng đọng tình đồng chí, tình quân dân.'),
(4, 'Văn học Kinh điển Việt Nam', 'Các tác phẩm văn học giá trị xuất bản giai đoạn 1970 - 2000.');

-- 2. Chiến dịch gây quỹ Long Đất
INSERT INTO charity_campaign (campaign_id, campaign_name, beneficiary_name, beneficiary_address, target_amount) VALUES
(1, 'Bìa Sờn Nắng Mới — Tri Ân Thương Binh Liệt Sĩ', 
 'Trung tâm Điều dưỡng Thương binh và Người có công Long Đất', 
 'Thị trấn Long Hải, huyện Long Điền, tỉnh Bà Rịa – Vũng Tàu', 
 2000000);

-- 3. Danh mục 10 cuốn sách tiêu biểu (giai đoạn 1970 - 2000)
INSERT INTO books (qr_code, title, author, publish_year, publisher, category_id, condition_note, price, summary, quote, cover_image_url, status) VALUES
('BSNM-001', 'Nhật Ký Đặng Thùy Trâm', 'Đặng Thùy Trâm', 2005, 'NXB Hội Nhà Văn', 2, 
 'Bìa bọc màng kiếng, giấy giữ màu ấm, chữ in sắc nét', 35000, 
 'Tập nhật ký ghi lại những ngày tháng làm việc và chiến đấu kiên cường của nữ bác sĩ trẻ nơi chiến trường Đức Phổ ác liệt.', 
 'Và một ngày kia, khi hòa bình lập lại, tôi sẽ nhớ mãi những ngày gian khổ này...', 
 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600', 'AVAILABLE'),

('BSNM-002', 'Nỗi Buồn Chiến Tranh', 'Bảo Ninh', 1991, 'NXB Hội Nhà Văn', 1, 
 'Bản in cổ thập niên 90, góc bìa sờn nhẹ đã dán mép cẩn thận', 40000, 
 'Tiểu thuyết kinh điển của văn học Việt Nam đương đại nhìn lại chiến tranh qua lăng kính ký ức và chiều sâu nội tâm người lính.', 
 'Chiến tranh đã qua đi, nhưng nỗi nhớ thương đồng đội thì chẳng bao giờ nguôi ngoai.', 
 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600', 'AVAILABLE'),

('BSNM-003', 'Mảnh Trăng Cuối Rừng', 'Nguyễn Minh Châu', 1970, 'NXB Quân Đội Nhân Dân', 1, 
 'Bìa nguyên bản 1970, giấy bãi bằng ngả vàng cổ kính', 30000, 
 'Câu chuyện tình yêu trong sáng, kiên định giữa làn bom đạn trên tuyến đường Trường Sơn huyền thoại.', 
 'Tình yêu trong chiến tranh như vầng trăng sáng giữa rừng đại ngàn, thanh khiết và bất diệt.', 
 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600', 'AVAILABLE'),

('BSNM-004', 'Đất Nước Đứng Lên', 'Nguyên Ngọc', 1984, 'NXB Văn Học', 1, 
 'Gáy sách đã tân trang chỉ dù chắc chắn, giấy mộc mạc', 25000, 
 'Bản trường ca về anh hùng Núp và đồng bào làng Kông Hoa kiên cường đánh giặc giữ buôn làng Tây Nguyên.', 
 'Làng mình nghèo nhưng bụng dạ mình rộng như rừng, sáng như ngọn lửa.', 
 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600', 'AVAILABLE'),

('BSNM-005', 'Tuyển Tập Thơ Quang Dũng', 'Quang Dũng', 1988, 'NXB Văn Học', 3, 
 'Ấn bản hiếm năm 1988, còn nguyên chất phong trần lãng mạn', 35000, 
 'Tập hợp những vần thơ bất hủ Tây Tiến, Mắt người Sơn Tây hào hùng nhưng đậm nét bi tráng.', 
 'Chiến trường đi chẳng tiếc đời xanh / Áo bào thay chiếu anh về đất.', 
 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600', 'AVAILABLE'),

('BSNM-006', 'Ánh Trăng', 'Nguyễn Duy', 1984, 'NXB Tác Phẩm Mới', 3, 
 'Bìa sờn màu thời gian, tập thơ đoạt giải thưởng lớn năm 1984', 30000, 
 'Khúc ca nhắc nhở người lính và mỗi chúng ta về đạo lý uống nước nhớ nguồn, không được lãng quên nghĩa tình quá khứ.', 
 'Ánh trăng im phăng phắc / Đủ cho ta giật mình.', 
 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', 'AVAILABLE'),

('BSNM-007', 'Mùa Lá Rụng Trong Vườn', 'Ma Văn Kháng', 1985, 'NXB Phụ Nữ', 4, 
 'Bản in 1985 thời kỳ đổi mới, bảo quản tốt', 35000, 
 'Bức tranh gia đình và xã hội Hà Nội những năm đầu thời kỳ chuyển giao, giữ gìn đạo đức truyền thống.', 
 'Gia đình là cái nôi gìn giữ linh hồn của mỗi con người qua bao thăng trầm thời cuộc.', 
 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600', 'AVAILABLE'),

('BSNM-008', 'Tuổi Thơ Dữ Dội', 'Phùng Quán', 1995, 'NXB Thuận Hóa', 1, 
 'Bản in năm 1995, câu chuyện về Đội thiếu niên trinh sát Trung đoàn 101', 40000, 
 'Hành trình quả cảm và sự hy sinh kiên cường của các em thiếu nhi Vệ quốc đoàn tại mặt trận Huế.', 
 'Những đứa trẻ mang trái tim dũng cảm như những người lính trưởng thành.', 
 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600', 'AVAILABLE');

-- 4. Lưu bút mẫu
INSERT INTO guestbook (sender_name, book_id, message) VALUES
('Nguyễn Mai Anh (K18 FPT)', 1, 'Cầm cuốn nhật ký Đặng Thùy Trâm cũ trên tay mà nghẹn ngào. Cảm ơn nhóm Bìa Sờn Nắng Mới vì một dự án vô cùng ý nghĩa hướng về các bác thương binh Long Đất!'),
('Trần Hoàng Long', 5, 'Vần thơ Tây Tiến vẫn luôn hào sảng như ngày nào. Chúc chiến dịch của các bạn thành công rực rỡ và quyên góp được thật nhiều cho các bác!');
