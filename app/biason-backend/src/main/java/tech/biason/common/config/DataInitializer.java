package tech.biason.common.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import tech.biason.book.entity.BookEntity;
import tech.biason.book.entity.CategoryEntity;
import tech.biason.book.repository.BookRepository;
import tech.biason.book.repository.CategoryRepository;
import tech.biason.campaign.entity.CampaignEntity;
import tech.biason.campaign.repository.CampaignRepository;
import tech.biason.guestbook.entity.GuestbookEntity;
import tech.biason.guestbook.repository.GuestbookRepository;

@Component
public class DataInitializer implements CommandLineRunner {
    private final CategoryRepository categoryRepository;
    private final BookRepository bookRepository;
    private final CampaignRepository campaignRepository;
    private final GuestbookRepository guestbookRepository;

    public DataInitializer(CategoryRepository categoryRepository, BookRepository bookRepository,
                           CampaignRepository campaignRepository, GuestbookRepository guestbookRepository) {
        this.categoryRepository = categoryRepository;
        this.bookRepository = bookRepository;
        this.campaignRepository = campaignRepository;
        this.guestbookRepository = guestbookRepository;
    }

    @Override
    public void run(String... args) {
        if (campaignRepository.count() == 0) {
            CampaignEntity c = new CampaignEntity();
            c.setCampaignName("Bìa Sờn Nắng Mới — Tri Ân Thương Binh Liệt Sĩ");
            c.setBeneficiaryName("Trung tâm Điều dưỡng Thương binh và Người có công Long Đất");
            c.setBeneficiaryAddress("Khu phố Hải Sơn, Thị trấn Long Hải, Huyện Long Điền, Tỉnh Bà Rịa - Vũng Tàu");
            c.setTargetAmount(3500000);
            campaignRepository.save(c);
        }

        if (categoryRepository.count() == 0) {
            CategoryEntity c1 = categoryRepository.save(new CategoryEntity("Ký sự & Hồi ức Chiến trường", "Nhật ký, hồi ức chân thực từ chiến sĩ"));
            CategoryEntity c2 = categoryRepository.save(new CategoryEntity("Tiểu thuyết Thời kỳ Kháng chiến", "Văn học sử thi ca ngợi tinh thần bảo vệ tổ quốc"));
            CategoryEntity c3 = categoryRepository.save(new CategoryEntity("Văn học Thời Bao cấp & Đổi mới", "Giai đoạn chuyển mình của đất nước 1975-1995"));
            CategoryEntity c4 = categoryRepository.save(new CategoryEntity("Thơ ca Kháng chiến", "Những vần thơ theo bước chân người lính"));

            if (bookRepository.count() == 0) {
                seedBook("BSNM-001", "Nhật Ký Đặng Thùy Trâm", "Đặng Thùy Trâm", 2005, "NXB Hội Nhà Văn", c1,
                        "Bìa sờn mép, gáy đóng chỉ nguyên bản", 35000,
                        "Những dòng nhật ký xúc động của nữ bác sĩ trẻ trên chiến trường Đức Phổ ác liệt, ngời sáng lý tưởng cống hiến tuổi thanh xuân cho độc lập dân tộc.",
                        "Chỉ có tình yêu thương sâu sắc với nhân dân và lòng tin son sắt vào ngày mai mới giúp ta đứng vững trước bom rơi đạn nổ.",
                        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600");

                seedBook("BSNM-002", "Nỗi Buồn Chiến Tranh", "Bảo Ninh", 1991, "NXB Hội Nhà Văn", c2,
                        "Bìa ố vàng tự nhiên, giấy bãi bằng thời bao cấp", 40000,
                        "Tác phẩm chạm đến chiều sâu tâm lý người lính sau khói lửa chiến tranh, khắc họa nỗi đau nhưng tôn vinh phẩm giá và lòng quả cảm phi thường.",
                        "Ký ức chiến tranh không bao giờ mất đi, nó là lời nhắc nhở thiêng liêng về giá trị của những ngày hòa bình.",
                        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600");

                seedBook("BSNM-003", "Mảnh Trăng Cuối Rừng", "Nguyễn Minh Châu", 1970, "NXB Tác Phẩm Mới", c2,
                        "Ấn bản 1970 hiếm có, mép sách hơi sờn", 30000,
                        "Bản tình ca trong trẻo giữa những cung đường Trường Sơn rực lửa, biểu tượng cho vẻ đẹp tâm hồn bất diệt của tuổi trẻ thời hoa lửa.",
                        "Vẻ đẹp của con người trong khói lửa kháng chiến luôn lấp lánh như mảnh trăng đầu tháng giữa bầu trời đêm.",
                        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600");

                seedBook("BSNM-004", "Đất Nước Đứng Lên", "Nguyên Ngọc", 1984, "NXB Kim Đồng", c2,
                        "Giấy ngả nâu hoài niệm, bìa minh họa vẽ tay", 25000,
                        "Bản hùng ca về anh hùng Núp và đồng bào Ba Na kiên cường đánh giặc giữ làng, giữ đất Tây Nguyên hùng vĩ.",
                        "Lòng yêu buôn làng hòa cùng tình yêu Tổ quốc đã làm nên sức mạnh quật cường đánh đuổi kẻ thù.",
                        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600");

                seedBook("BSNM-005", "Tuyển Tập Thơ Quang Dũng", "Quang Dũng", 1988, "NXB Văn Học", c4,
                        "Bìa sờn gáy cổ kính, giấy thô mộc", 35000,
                        "Khắc họa chân dung người lính Tây Tiến hào hoa, lãng mạn nhưng sẵn sàng xả thân: Chiến trường đi chẳng tiếc đời xanh.",
                        "Tây Tiến người đi không hẹn ước / Đường lên thăm thẳm một chia phôi / Ai lên Tây Tiến mùa xuân ấy / Hồn về Sầm Nứa chẳng về xuôi.",
                        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=600");

                seedBook("BSNM-006", "Ánh Trăng", "Nguyễn Duy", 1984, "NXB Tác Phẩm Mới", c4,
                        "Sách xuất bản 1984, giữ trọn dấu ấn tem thư cũ", 30000,
                        "Lời nhắc nhở chân thành, sâu lắng về đạo lý uống nước nhớ nguồn, không bao giờ quên đi những năm tháng gian lao cùng đồng đội.",
                        "Trăng cứ tròn vành vạnh / kể chi người vô tình / ánh trăng im phăng phắc / đủ cho ta giật mình.",
                        "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=600");

                seedBook("BSNM-007", "Mùa Lá Rụng Trong Vườn", "Ma Văn Kháng", 1985, "NXB Phụ Nữ", c3,
                        "Bìa gấp hoài niệm, chữ in typo thời bao cấp", 35000,
                        "Câu chuyện gia đình giàu truyền thống cách mạng trải qua những biến động của thời đại, giữ vững nếp nhà và lòng tự trọng.",
                        "Dù cuộc sống có gian khó đổi thay, cốt cách người lính và lòng biết ơn thế hệ trước vẫn là nền tảng thiêng liêng nhất.",
                        "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&q=80&w=600");

                seedBook("BSNM-008", "Tuổi Thơ Dữ Dội", "Phùng Quán", 1995, "NXB Thuận Hóa", c2,
                        "Bản in năm 1995, bìa phục chế kỹ lưỡng", 40000,
                        "Thiên anh hùng ca xúc động nghẹn ngào về Đội thiếu niên trinh sát Trung đoàn 101 Trần Cao Vân trong những ngày đầu kháng chiến tại mặt trận Huế.",
                        "Các em ngã xuống khi tuổi đời còn quá nhỏ, để lại cho non sông một mùa xuân bất tử.",
                        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600");
            }
        }

        if (guestbookRepository.count() == 0) {
            guestbookRepository.save(new GuestbookEntity("Nguyễn Văn An (K18 FPT)", 1L,
                    "Cầm cuốn Nhật Ký Đặng Thùy Trâm trên tay mà lòng nghẹn ngào. Cảm ơn các bác thương bệnh binh đã hy sinh xương máu cho thế hệ chúng cháu có được ngày hòa bình hôm nay."));
            guestbookRepository.save(new GuestbookEntity("Trần Thị Mai (K19 FPT)", 8L,
                    "Một dự án môn học vô cùng ý nghĩa! Từng cuốn sách sờn gáy kẹp chiếc bookmark làm em thấy trân trọng hơn công lao của những người đi trước."));
        }
    }

    private void seedBook(String qr, String title, String author, int year, String publisher,
                          CategoryEntity cat, String condition, int price, String summary, String quote, String img) {
        BookEntity b = new BookEntity();
        b.setQrCode(qr);
        b.setTitle(title);
        b.setAuthor(author);
        b.setPublishYear(year);
        b.setPublisher(publisher);
        b.setCategory(cat);
        b.setConditionNote(condition);
        b.setPrice(price);
        b.setSummary(summary);
        b.setQuote(quote);
        b.setCoverImageUrl(img);
        b.setStatus("AVAILABLE");
        bookRepository.save(b);
    }
}
