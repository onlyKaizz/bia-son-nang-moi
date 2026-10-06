package tech.biason.campaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.biason.campaign.entity.CampaignEntity;

public interface CampaignRepository extends JpaRepository<CampaignEntity, Long> {
}
