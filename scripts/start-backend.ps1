# Khởi chạy Spring Boot Backend trên cổng 8080
Write-Host "[Bìa Sờn Nắng Mới] Đang khởi động Spring Boot Backend (Java 21/25 + H2 DB) tại http://localhost:8080..." -ForegroundColor Cyan
Set-Location "$PSScriptRoot/../app/biason-backend"
mvn spring-boot:run
