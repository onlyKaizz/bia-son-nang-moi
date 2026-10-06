package tech.biason.campaign.service;

import org.springframework.stereotype.Service;
import tech.biason.book.entity.BookEntity;
import tech.biason.book.repository.BookRepository;
import tech.biason.campaign.entity.CampaignEntity;
import tech.biason.campaign.repository.CampaignRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CampaignService {
    private final CampaignRepository campaignRepository;
    private final BookRepository bookRepository;

    public CampaignService(CampaignRepository campaignRepository, BookRepository bookRepository) {
        this.campaignRepository = campaignRepository;
        this.bookRepository = bookRepository;
    }

    public Map<String, Object> getCampaignProgress() {
        CampaignEntity campaign = campaignRepository.findAll().stream().findFirst()
                .orElseGet(() -> {
                    CampaignEntity c = new CampaignEntity();
                    c.setCampaignName("Bìa Sờn Nắng Mới — Tri Ân Người Có Công");
                    c.setBeneficiaryName("Trung tâm Điều dưỡng Thương binh và Người có công Long Đất");
                    c.setBeneficiaryAddress("Long Hải, Bà Rịa - Vũng Tàu");
                    c.setTargetAmount(3500000);
                    return campaignRepository.save(c);
                });

        List<BookEntity> soldBooks = bookRepository.findByStatus("SOLD");
        int totalRaised = soldBooks.stream().mapToInt(BookEntity::getPrice).sum();
        int booksSold = soldBooks.size();
        double percent = (totalRaised * 100.0) / campaign.getTargetAmount();

        Map<String, Object> res = new HashMap<>();
        res.put("campaignId", campaign.getCampaignId());
        res.put("campaignName", campaign.getCampaignName());
        res.put("beneficiaryName", campaign.getBeneficiaryName());
        res.put("beneficiaryAddress", campaign.getBeneficiaryAddress());
        res.put("targetAmount", campaign.getTargetAmount());
        res.put("currentAmount", totalRaised);
        res.put("booksSold", booksSold);
        res.put("progressPercent", Math.round(percent * 10.0) / 10.0);
        return res;
    }
}
