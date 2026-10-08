package tech.biason.common.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import tech.biason.book.entity.CategoryEntity;
import tech.biason.book.repository.CategoryRepository;
import tech.biason.campaign.entity.CampaignEntity;
import tech.biason.campaign.repository.CampaignRepository;

@Component
public class DataInitializer implements CommandLineRunner {
    private final CategoryRepository categoryRepository;
    private final CampaignRepository campaignRepository;

    public DataInitializer(CategoryRepository categoryRepository,
                           CampaignRepository campaignRepository) {
        this.categoryRepository = categoryRepository;
        this.campaignRepository = campaignRepository;
    }

    @Override
    public void run(String... args) {
        // Khởi tạo chiến dịch gây quỹ nếu chưa có
        if (campaignRepository.count() == 0) {
            CampaignEntity c = new CampaignEntity();
            c.setCampaignName("Bìa Sờn Nắng Mới — Tri Ân Thương Binh Liệt Sĩ");
            c.setBeneficiaryName("Trung tâm Điều dưỡng Thương binh và Người có công Long Đất");
            c.setBeneficiaryAddress("Khu phố Hải Sơn, Thị trấn Long Hải, Huyện Long Điền, Tỉnh Bà Rịa - Vũng Tàu");
            c.setTargetAmount(2000000);
            campaignRepository.save(c);
        }

        // Khởi tạo danh mục sách nếu chưa có
        if (categoryRepository.count() == 0) {
            categoryRepository.save(new CategoryEntity("Văn Học Dịch Thời Bao Cấp", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Lý Luận Phê Bình Văn Học", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Ký Sự Chiến Tranh & Công Lý", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Tiểu Thuyết Đời Sống & Rừng Núi", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Ký Sự Tình Nghĩa Quốc Tế", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Chính Trị & Xây Dựng Đất Nước", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Chính Sách Đổi Mới", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Truyện Dài & Văn Học Kháng Chiến", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Tiểu Thuyết Xã Hội", "Thể loại sách"));
            categoryRepository.save(new CategoryEntity("Lịch Sử & Tư Liệu Cách Mạng", "Thể loại sách"));
        }

        // Sách thực tế (10 cuốn) đã được seed qua script và lưu trữ vĩnh viễn trên PostgreSQL.
        // Không cần seed sách ở đây để tránh dữ liệu trùng lặp.
    }
}
