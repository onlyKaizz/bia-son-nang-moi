# Khởi chạy toàn bộ hệ thống Fullstack (Backend + Frontend)
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host "  KHỞI ĐỘNG HỆ THỐNG FULLSTACK: BÌA SỜN NẮNG MỚI (SSG105)  " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Yellow

# Mở Backend trong cửa sổ PowerShell riêng
Write-Host "[1/2] Đang bật Spring Boot Backend (Port 8080)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", "$PSScriptRoot/start-backend.ps1"

# Chờ 3 giây rồi mở Frontend
Start-Sleep -Seconds 3
Write-Host "[2/2] Đang bật React Frontend (Port 3000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", "$PSScriptRoot/start-frontend.ps1"

Write-Host "`nĐã kích hoạt cả 2 dịch vụ!" -ForegroundColor Green
Write-Host " - Frontend UI:        http://localhost:3000" -ForegroundColor White
Write-Host " - Backend REST API:   http://localhost:8080/api/books" -ForegroundColor White
Write-Host " - H2 Database Console: http://localhost:8080/h2-console" -ForegroundColor White
