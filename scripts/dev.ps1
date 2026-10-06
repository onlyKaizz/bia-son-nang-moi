# Script khởi chạy môi trường phát triển
Write-Host "[Bìa Sờn Nắng Mới] Đang khởi động frontend tại http://localhost:3000..." -ForegroundColor Green
Set-Location "$PSScriptRoot/../app/biason-frontend"
& npm.cmd run dev
