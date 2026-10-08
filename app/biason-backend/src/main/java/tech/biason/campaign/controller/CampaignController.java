package tech.biason.campaign.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.biason.campaign.service.CampaignService;
import tech.biason.common.response.ApiResponse;

import java.util.Map;

@RestController
@RequestMapping("/api/campaign")
public class CampaignController {
    private final CampaignService campaignService;

    public CampaignController(CampaignService campaignService) {
        this.campaignService = campaignService;
    }

    @GetMapping
    public ApiResponse<Map<String, Object>> getCampaign() {
        return ApiResponse.ok(campaignService.getCampaignProgress());
    }

    @org.springframework.web.bind.annotation.PutMapping("/target")
    public ApiResponse<Map<String, Object>> updateTarget(@org.springframework.web.bind.annotation.RequestBody Map<String, Object> body) {
        Integer newTarget = body.get("targetAmount") != null ? Integer.valueOf(body.get("targetAmount").toString()) : 2000000;
        return ApiResponse.ok("Đã cập nhật mục tiêu gây quỹ", campaignService.updateTargetAmount(newTarget));
    }
}
